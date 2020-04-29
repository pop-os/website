const REQUEST_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'User-Agent': 'pop-os/website (https://github.com/pop-os/website)'
}

export const state = () => ({
  userId: null,

  token: null,
  jwt: null,

  loggedInAt: null
})

export const getters = {
  isLoggedIn (state) {
    return (state.userId != null)
  }
}

export const mutations = {
  login (state, data) {
    state.userId = data.user

    state.token = data.token
    state.jwt = data.jwt

    state.loggedInAt = new Date()
  },

  logout (state) {
    state.userId = null

    state.token = null
    state.jwt = null

    state.loggedInAt = null
  }
}

export const actions = {
  async authenticate ({ commit, getters, state }, { email, password }) {
    const req = {
      method: 'POST',
      headers: new Headers(REQUEST_HEADERS),
      body: JSON.stringify({ email, password })
    }

    const res = await fetch(`${process.env.API_URL}/session`, req)

    if (res.status === 401) {
      throw new Error('Incorrect username or password')
    } else if (!res.ok) {
      throw new Error(res.statusText)
    } else {
      const body = await res.json()
      commit('login', body)
    }
  },

  async register ({ commit, getters, state }, data) {
    const req = {
      method: 'POST',
      headers: new Headers({
        ...REQUEST_HEADERS,
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
      }),
      body: JSON.stringify({
        data: {
          attributes: {
            first_name: data.firstName,
            last_name: data.lastName,
            type: 'individual',
            email: data.email,
            phone_number: data.phoneNumber,
            password: data.password
          }
        }
      })
    }

    const res = await fetch(`${process.env.API_URL}/accounts/users`, req)

    if (res.status === 401) {
      throw new Error('Incorrect username or password')
    } else if (!res.ok) {
      throw new Error(res.statusText)
    } else {
      const body = await res.json()
      commit('login', body)
    }
  }
}
