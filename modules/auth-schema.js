import Oauth2Scheme from '@nuxtjs/auth-next/dist/schemes/oauth2'
import { getResponseProp } from '@nuxtjs/auth-next/dist/utils'

import { camelCaseDeep } from '~/utility/case'

export default class System76Schema extends Oauth2Scheme {
  async fetchUser () {
    if (!this.check().valid) {
      return
    }

    if (!this.options.endpoints.userInfo) {
      this.$auth.setUser({})
      return
    }

    const response = await this.$auth.requestWith(this.name, {
      url: this.options.endpoints.userInfo
    })

    const body = getResponseProp(response, this.options.user.property)
    const user = camelCaseDeep(body)

    this.$auth.setUser(user)
  }

  logout () {
    if (this.options.endpoints.logout) {
      window.location.replace(this.options.endpoints.logout)
    }

    return this.$auth.reset()
  }
}
