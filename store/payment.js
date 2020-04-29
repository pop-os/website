const REQUEST_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'User-Agent': 'pop-os/website (https://github.com/pop-os/website)'
}

export const state = () => ({
  showing: false,

  error: null,
  page: 'support',

  address: null,
  source: null,

  addresses: [],
  sources: []
})

export const getters = {
  canReview (state) {
    return (state.source != null)
  },

  canSelectSources (state) {
    return (state.sources.length > 0)
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
      case 'error':
        return 5
    }
  },

  defaultBillingPage (state) {
    if (getters.canSelectSources) {
      return 'billing-select'
    } else {
      return 'billing-create'
    }
  },

  nextPage (state, getters, rootState, rootGetters) {
    switch (state.page) {
      case 'support':
        // TODO: if already subscribed
        if (getters.canReview) {
          return 'review'
        } else if (rootGetters['session/isLoggedIn']) {
          return getters.defaultBillingPage
        } else {
          return 'login'
        }

      case 'login':
      case 'register':
        return getters.defaultBillingPage

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

  previousPage (state, getters) {
    switch (state.page) {
      case 'login':
        return 'support'

      case 'register':
        return 'login'

      case 'billing-select':
        return 'support'

      case 'billing-create':
        if (getters.canSelectSources) {
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
  },

  showProgress (state) {
    return (state.page !== 'success' && state.page !== 'error')
  },

  sourceId (state) {
    if (state.source != null) {
      return state.source.id
    } else {
      return null
    }
  }
}

export const mutations = {
  setShowing (state, value) {
    const absValue = (value != null) ? value : !state.showing

    if (absValue) {
      state.showing = true
    } else {
      state.showing = false
      state.page = 'support'
      this.error = null
    }
  },

  setError (state, message) {
    state.error = message
    state.page = 'error'
  },

  setPage (state, page) {
    state.page = page
    this.error = null
  },

  setAddress (state, data) {
    state.address = data
  },

  setSource (state, data) {
    state.source = data
  },

  setSources (state, data) {
    state.sources = data
  },

  setAddresses (state, data) {
    state.addresses = data
  }
}

export const actions = {
  async gotoPreviousPage ({ commit, getters }) {
    if (getters.previousPage == null) {
      commit('setShowing', false)
    } else {
      commit('setPage', getters.previousPage)
    }
  },

  async gotoNextPage ({ commit, getters }) {
    if (getters.nextPage == null) {
      commit('setShowing', false)
    } else {
      commit('setPage', getters.nextPage)
    }
  },

  async fetchData ({ commit, rootState }) {
    const res = await fetch(`${process.env.API_URL}/transactions/sources?filter[type]=stripe&include=address`, {
      method: 'GET',
      headers: new Headers({
        ...REQUEST_HEADERS,
        Authorization: `Token ${rootState.session.token}`,
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json'
      })
    })

    if (res.ok) {
      const body = await res.json()

      commit('setSources', body.data || [])
      commit('setAddresses', body.included || [])

      return true
    } else {
      commit('setError', 'Unable to talk to server')

      return false
    }
  },

  async createAddress ({ commit, rootState, state }, fields) {
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
          first_name: fields.firstName,
          last_name: fields.lastName,
          company_name: fields.companyName,
          address1: fields.address1,
          address2: fields.address2,
          state: fields.state,
          city: fields.city,
          zip: fields.zip,
          country: fields.country,
          user_id: rootState.session.userId,
          shipping: false
        }
      })
    })

    if (res.ok) {
      const body = await res.json()

      commit('setAddress', body.data)

      return true
    } else {
      commit('setError', 'Error creating address')

      return false
    }
  },

  async createSource ({ commit, rootState, state }, { addressId, token }) {
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
            token: token,
            type: 'stripe'
          },
          relationships: {
            user: { data: { id: rootState.session.userId } },
            address: { data: { id: addressId } }
          }
        }
      })
    })

    if (res.ok) {
      const body = await res.json()

      commit('setSource', body.data)

      return true
    } else {
      commit('setError', 'Error creating payment method')

      return false
    }
  },

  async createSubscription ({ commit }) {
    commit('setPage', 'success')

    return true
  }
}
