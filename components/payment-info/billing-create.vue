<template>
  <sys-form :submit-function="submit">
    <p v-if="canSelectSources">
      <a
        href="#"
        @click.prevent="$store.commit('payment/setPage', 'billing-select')"
      >
        Select an existing payment method
      </a>
    </p>

    <div>
      <sys-label for="stripe-card-input">
        Card number
      </sys-label>

      <div id="stripe-card-input" />

      <sys-input-error>
        {{ stripeCardError }}
      </sys-input-error>
    </div>

    <div class="half">
      <sys-label for="stripe-expiration-input">
        Expiration
      </sys-label>

      <div id="stripe-expiration-input" />

      <sys-input-error>
        {{ stripeExpirationError }}
      </sys-input-error>
    </div>

    <div class="half">
      <sys-label for="stripe-cvc-input">
        CVC
      </sys-label>

      <div id="stripe-cvc-input" />

      <sys-input-error>
        {{ stripeCVCError }}
      </sys-input-error>
    </div>

    <sys-form-input
      id="fname"
      v-model="firstName"
      autocomplete="given-name"
      label="First Name"
      name="fname"
      placeholder="John"
      validation="required"
    />

    <sys-form-input
      id="lname"
      v-model="lastName"
      autocomplete="family-name"
      label="Last Name"
      name="lname"
      placeholder="Smith"
      validation="required"
    />

    <sys-form-input
      id="address1"
      v-model="address1"
      autocomplete="address-line1"
      label="Address 1"
      name="address1"
      placeholder="4240 Carson St #101"
      validation="required"
    />

    <sys-form-input
      id="address2"
      v-model="address2"
      autocomplete="address-line2"
      label="Address 2"
      name="address2"
    />

    <sys-form-input
      id="city"
      v-model="city"
      autocomplete="address-level2"
      label="City"
      name="city"
      placeholder="Denver"
      validation="required"
    />

    <sys-form-input
      id="state"
      v-model="state"
      autocomplete="address-level1"
      class="half"
      label="State"
      name="state"
      placeholder="CO"
    />

    <sys-form-input
      id="zip"
      v-model="zip"
      autocomplete="postal-code"
      class="half"
      label="ZIP"
      name="zip"
      placeholder="80239"
      validation="required"
    />

    <sys-form-select
      id="country"
      v-model="country"
      autocomplete="country"
      label="Country"
      name="country"
      :disabled="$fetchState.pending"
      :options="countryOptions"
      validation="required"
    />

    <template v-slot:actions="{ submittable }">
      <div class="buttons">
        <sys-form-button
          type="submit"
          color="primary"
          :disabled="!submittable || !valid"
        >
          Review
        </sys-form-button>

        <sys-form-button
          v-if="canGoBack"
          type="button"
          ghost
          @click.prevent="$store.dispatch('payment/gotoPreviousPage')"
        >
          <font-awesome-icon :icon="faChevronLeft" />
          <span>Back</span>
        </sys-form-button>
      </div>
    </template>
  </sys-form>
</template>

<style scoped>
  .loading {
    display: block;
    margin: 2rem auto;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -1rem;
  }

  form p {
    margin: 0 1rem 2rem;
  }

  form >>> > div {
    margin: 0.6rem 1rem 0;
    flex: 1 1 100%;
  }

  form >>> [class^="sys-actions"] {
    flex: 1 1 100%;
    margin: 0 1rem;
    width: 100%;
  }

  .half {
    flex: 1 1 40%;
  }

  >>> .StripeElement {
    background-color: var(--color-light-form-input-background);
    border-radius: 3px;
    border: 1px solid var(--color-light-form-input-border);
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.06);
    color: var(--color-light-form-input-foreground);
    display: block;
    font-family: var(--font-family-sans);
    font-size: 1rem;
    height: 2.4rem;
    line-height: 2.4rem;
    margin: 0;
    padding: 0.5rem;
    transition: border-color 0.2s ease;
  }

  >>> .StripeElement--focus {
    border-color: var(--color-light-form-input-active);
  }

  >>> .StripeElement--invalid {
    border-color: var(--color-light-form-input-invalid);
  }
</style>

<script>
  import { faChevronLeft, faSpinner } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { mapGetters } from 'vuex'

  export default {
    name: 'PaymentInfoBillingCreate',

    components: {
      FontAwesomeIcon
    },

    data: () => ({
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      country: 'US',

      countries: [],

      stripe: null,

      stripeCard: null,
      stripeCardError: null,
      stripeCardValid: false,

      stripeExpiration: null,
      stripeExpirationError: null,
      stripeExpirationValid: false,

      stripeCVC: null,
      stripeCVCError: null,
      stripeCVCValid: false
    }),

    computed: {
      ...mapGetters('payment', ['canGoBack', 'canSelectSources']),

      faChevronLeft: () => faChevronLeft,
      faSpinner: () => faSpinner,

      countryOptions () {
        return this.countries.map((c) => ([c.code, c.name]))
      },

      valid () {
        return [
          this.stripeCardValid,
          this.stripeExpirationValid,
          this.stripeCVCValid
        ].every((v) => v)
      }
    },

    async fetch () {
      const res = await fetch(`${process.env.API_URL}/geography/countries?page[size]=1000`, {
        method: 'GET',
        headers: new Headers({
          'User-Agent': 'pop-os/website (https://github.com/pop-os/website)',
          'Content-Type': 'application/vnd.api+json',
          Accept: 'application/vnd.api+json'
        })
      })

      if (res.ok) {
        const body = await res.json()

        this.countries = body.data.map((b) => b.attributes)
      } else {
        throw new Error('Unable to get countries')
      }
    },

    mounted () {
      // HACK: vee-validate is not initiating corretly preventing the submit
      // button from ever being _not_ disabled. This is a hacky hack fix
      this.$children[0].$children[0].validate({ silent: true })

      this.setupStripeCard()

      this.maybeGrabFromStore()
    },

    methods: {
      async createAddress () {
        return this.$store.dispatch('payment/createAddress', {
          firstName: this.firstName,
          lastName: this.lastName,
          address1: this.address1,
          address2: this.address2,
          city: this.city,
          state: this.state,
          zip: this.zip,
          country: this.country
        })
      },

      async createSource () {
        const stripe = await this.waitForStripe()
        const { token, error } = await stripe.createToken(this.stripeCard, {
          name: `${this.firstName} ${this.lastName}`,
          address_line1: this.address1,
          address_line2: this.address2,
          address_city: this.city,
          address_state: this.state,
          address_zip: this.zip,
          address_country: this.country,
          currency: 'USD'
        })

        if (token != null) {
          return this.$store.dispatch('payment/createSource', {
            addressId: this.$store.state.payment.address.id,
            token: token.id
          })
        } else {
          this.$store.commit('payment/setError', error.message)
          return false
        }
      },

      maybeGrabFromStore () {
        const storeData = this.$store.state['payment/address']

        if (storeData != null) {
          this.firstName = storeData.firstName || ''
          this.lastName = storeData.lastName || ''
          this.address1 = storeData.address1 || ''
          this.address2 = storeData.address2 || ''
          this.city = storeData.city || ''
          this.state = storeData.state || ''
          this.zip = storeData.zip || ''
          this.country = storeData.country || 'US'
        }
      },

      async setupStripeCard () {
        const stripe = await this.waitForStripe()
        const elements = stripe.elements()
        const style = {
          base: {
            height: '1.5rem',
            lineHeight: '1.5rem'
          }
        }

        this.stripeCard = elements.create('cardNumber', { style })
        this.stripeCard.mount('#stripe-card-input')

        this.stripeCard.addEventListener('change', (event) => {
          if (event.error) {
            this.stripeCardError = event.error.message
            this.stripeCardValid = false
          } else {
            this.stripeCardError = null
            this.stripeCardValid = true
          }
        })

        this.stripeExpiration = elements.create('cardExpiry')
        this.stripeExpiration.mount('#stripe-expiration-input', { style })

        this.stripeExpiration.addEventListener('change', (event) => {
          if (event.error) {
            this.stripeExpirationError = event.error.message
            this.stripeExpirationValid = false
          } else {
            this.stripeExpirationError = null
            this.stripeExpirationValid = true
          }
        })

        this.stripeCVC = elements.create('cardCvc')
        this.stripeCVC.mount('#stripe-cvc-input', { style })

        this.stripeCVC.addEventListener('change', (event) => {
          if (event.error) {
            this.stripeCVCError = event.error.message
            this.stipreCVCValid = false
          } else {
            this.stripeCVCError = null
            this.stripeCVCValid = true
          }
        })
      },

      async submit () {
        const addressRes = await this.createAddress()

        if (addressRes) {
          const sourceRes = await this.createSource()

          if (sourceRes) {
            await this.$store.dispatch('payment/gotoNextPage')
          }
        }
      },

      async waitForStripe () {
        const namespace = 'Stripe'
        const src = 'https://js.stripe.com/v3/'
        const key = process.env.STRIPE_KEY

        if (window[`${namespace}Instance`] != null) {
          return window[`${namespace}Instance`]
        }

        let el = document.querySelector(`[src="${src}"]`)
        if (el == null) {
          el = document.createElement('script')
          el.src = src
          el.async = true
          document.head.appendChild(el)
        }

        return new Promise((resolve, reject) => {
          el.addEventListener('load', () => {
            window[`${namespace}Instance`] = window[namespace](key)
            return resolve(window[`${namespace}Instance`])
          })

          el.addEventListener('error', (err) => {
            return reject(err)
          })
        })
      }
    }
  }
</script>
