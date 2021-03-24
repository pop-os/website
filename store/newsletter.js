export const state = () => ({
  // true if we are showing the subscribe overlay
  showing: false
})

export const getters = {
  showing (state) {
    return state.showing
  }
}

export const mutations = {
  toggleShowing (state, value) {
    if (value != null) {
      state.showing = value
    } else {
      state.showing = !state.showing
    }
  }
}
