import { event } from 'vue-analytics'

const REQUEST_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'User-Agent': 'pop-os/website (https://github.com/pop-os/website)'
}

export const state = () => ({
  userId: null,
  stripeId: null,

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
  login (state, body) {
    state.userId = body.data.relationships.user.data.id
    state.stripeId = body.included[0].attributes['stripe-id']

    state.token = body.data.attributes.token
    state.jwt = body.data.attributes.jwt

    state.loggedInAt = new Date()
  },

  update (state, body) {
    state.userId = body.data.id
    state.stripeId = body.data.attributes['stripe-id']
  },

  logout (state) {
    state.userId = null
    state.stripeId = null

    state.token = null
    state.jwt = null

    state.loggedInAt = null
  }
}

export const actions = {
  async authenticate ({ commit, getters, state }, { email, password }) {
    const res = await fetch(`${process.env.API_URL}/accounts/session?include=user`, {
      method: 'POST',
      headers: new Headers({
        ...REQUEST_HEADERS,
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json'
      }),
      body: JSON.stringify({
        data: {
          attributes: { email, password }
        }
      })
    })

    if (res.status === 401) {
      throw new Error('Incorrect username or password')
    } else if (!res.ok) {
      throw new Error(res.statusText)
    } else {
      const body = await res.json()
      commit('login', body)
      event('session', 'login')
    }
  },

  async fetchData ({ commit, getters, state }) {
    const res = await fetch(`${process.env.API_URL}/accounts/users/${state.userId}`, {
      method: 'GET',
      headers: new Headers({
        ...REQUEST_HEADERS,
        Authorization: `Token ${state.token}`,
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json'
      })
    })

    if (res.ok) {
      commit('update', await res.json())
    }
  },

  async register ({ commit, getters, state }, data) {
    const req = {
      method: 'POST',
      headers: new Headers({
        ...REQUEST_HEADERS,
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json'
      }),
      body: JSON.stringify({
        data: {
          attributes: {
            first_name: data.firstName,
            last_name: data.lastName,
            type: 'individual',
            email: data.email,
            phone_number: data.phoneNumber,
            password: data.password,
            newsletter: data.newsletter
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
      event('session', 'register')
      return res.json()
    }
  }
}
