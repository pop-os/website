const REQUEST_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'User-Agent': 'pop-os/website (https://github.com/pop-os/website)'
}

export const state = () => ({
  showing: false,

  page: 'support',
  forwardPageDisabled: false,

  error: null
})

export const getters = {
  showing (state) {
    return state.showing
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

      case 'billing':
        return 3
    }
  },

  nextPage (state, getters, rootState, rootGetters) {
    switch (state.page) {
      case 'support':
        // TODO: if already subscribed
        if (rootGetters['session/isLoggedIn']) {
          return 'billing'
        } else {
          return 'login'
        }

      case 'login':
      case 'register':
        return 'billing'

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

      case 'billing':
        return 'support'

      default:
        return null
    }
  }
}

export const mutations = {
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
  }
}
