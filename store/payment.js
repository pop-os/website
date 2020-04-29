const REQUEST_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'User-Agent': 'pop-os/website (https://github.com/pop-os/website)'
}

export const state = () => ({
  showing: false,

  page: 'support',
  forwardPageDisabled: false,

  error: null,

  stripeId: null,
  stripeRef: null,
  stripeExpMonth: null,
  stripeExpYear: null,
  stripeToken: null,

  addressId: null,
  address: null,

  sources: [],
  sourceId: null
})

export const getters = {
  address (state) {
    return state.address
  },

  showing (state) {
    return state.showing
  },

  canReview (state) {
    return (state.stripeToken != null && state.address != null)
  },

  currentPage (state) {
    return state.page
  },

  currentProgress (state) {
    switch (state.page) {
      case 'support':
        return 1

      case 'login':
      case 'register':
        return 2

      case 'billing-select':
      case 'billing-create':
        return 3

      case 'review':
        return 4

      case 'success':
        return 5
    }
  },

  nextPage (state, getters, rootState, rootGetters) {
    switch (state.page) {
      case 'support':
        // TODO: if already subscribed
        if (getters.canReview) {
          return 'review'
        } else if (rootGetters['session/isLoggedIn']) {
          return 'billing-select'
        } else {
          return 'login'
        }

      case 'login':
      case 'register':
        return 'billing-select'

      case 'billing-select':
      case 'billing-create':
        return 'review'

      case 'error':
        return 'support'

      case 'review':
        return 'success'

      default:
        return null
    }
  },

  previousPage (state) {
    switch (state.page) {
      case 'login':
        return 'support'

      case 'register':
        return 'login'

      case 'billing-select':
        return 'support'

      case 'billing-create':
        if (state.sources.length) {
          return 'billing-select'
        } else {
          return 'support'
        }

      case 'review':
        return 'billing-select'

      case 'success':
        return 'review'

      default:
        return null
    }
  }
}

export const mutations = {
  setAddress (state, value) {
    state.address = value
  },

  setError (state, error) {
    state.error = error
    state.page = 'error'
  },

  setAddressId (state, value) {
    state.addressId = value
  },

  setSources (state, value) {
    state.sources = value
  },

  setSourceData (state, value) {
    state.stripeId = value.attributes.stripe_id
    state.sourceId = value.id
  },

  setStripeToken (state, value) {
    if (value.type !== 'card') {
      throw new Error('Only able to subscribe to cards')
    } else {
      state.stripeRef = value.card.last4
      state.stripeExpMonth = value.card.exp_month
      state.stripeExpYear = value.card.exp_year
      state.stripeToken = value.id
    }
  },

  toggleShowing (state, value) {
    const absValue = (value != null) ? value : !state.showing

    if (absValue) {
      state.showing = true
    } else {
      state.showing = false
      state.page = 'support'
    }
  },

  toggleForwardPageDisabled (state, value) {
    if (value != null) {
      state.forwardButtonDisabled = value
    } else {
      state.forwardButtonDisabled = !state.forwardButtonDisabled
    }
  },

  gotoPage (state, page) {
    state.page = page
  }
}

export const actions = {
  async gotoPreviousPage ({ commit, getters }) {
    if (getters.previousPage == null) {
      commit('toggleShowing', false)
    } else {
      commit('gotoPage', getters.previousPage)
    }
  },

  async gotoNextPage ({ commit, getters }) {
    commit('gotoPage', getters.nextPage)
  },

  async complete ({ commit, dispatch, getters, rootState, state }) {
    if (!getters.canReview) {
      return
    }

    const addressId = await dispatch('completeAddress')

    if (addressId !== false) {
      const sourceId = await dispatch('completeTransaction')

      if (sourceId !== false) {
        return dispatch('gotoNextPage')
      }
    }
  },

  async completeAddress ({ commit, rootState, state }) {
    const res = await fetch(`${process.env.API_URL}/geography/addresses`, {
      method: 'POST',
      headers: new Headers({
        ...REQUEST_HEADERS,
        Authorization: `Token ${rootState.session.token}`,
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json'
      }),
      body: JSON.stringify({
        address: {
          first_name: state.address.firstName,
          last_name: state.address.lastName,
          company_name: state.address.companyName,
          address1: state.address.address1,
          address2: state.address.address2,
          state: state.address.state,
          city: state.address.city,
          zip: state.address.zip,
          country: state.address.country,
          user_id: rootState.session.userId,
          shipping: false
        }
      })
    })

    if (res.ok) {
      const body = await res.json()

      commit('setAddressId', body.data.id)
      return body.data.id
    } else {
      commit('setError', 'Error creating address')
      return false
    }
  },

  async completeTransaction ({ commit, rootState, state }) {
    const res = await fetch(`${process.env.API_URL}/transactions/sources`, {
      method: 'POST',
      headers: new Headers({
        ...REQUEST_HEADERS,
        Authorization: `Token ${rootState.session.token}`,
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json'
      }),
      body: JSON.stringify({
        data: {
          type: 'transactions-source',
          attributes: {
            token: state.stripeToken,
            type: 'stripe'
          },
          relationships: {
            user: { data: { id: rootState.session.userId } },
            address: { data: { id: state.addressId } }
          }
        }
      })
    })

    if (res.ok) {
      const body = await res.json()

      commit('setSourceData', body.data)
      return body.data.id
    } else {
      commit('setError', 'Error creating transaction source')
      return false
    }
  },

  async fetchSources ({ commit }) {
    const res = await fetch(`${process.env.API_URL}/transactions/sources`, {
      method: 'GET'
    })

    const body = await res.json()

    commit('setSources', body.data)

    return body.data
  }
}
