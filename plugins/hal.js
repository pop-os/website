import { Client } from '@system76/js-api'

export default function (ctx, inject) {
  const client = () => new Client({
    baseUrl: process.env.API_URL,
    token: () => ctx.$auth.strategy.token.get()
  })

  inject('hal', () => client())
}
