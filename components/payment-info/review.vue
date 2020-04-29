<template>
  <div>
    <sys-paragraph-1 class="head">
      Payment method
    </sys-paragraph-1>

    <div class="payment">
      <font-awesome-icon :icon="faCreditCard" />

      <div>
        <span>Ending in: {{ stripeRef }}</span>
        <span>Expires: {{ stripeExpMonth }}/{{ stripeExpYear }}</span>
      </div>
    </div>

    <sys-paragraph-1 class="head">
      Billing address
    </sys-paragraph-1>

    <div v-html="formattedAddress" />

    <a
      class="change"
      href="#"
      @click.prevent="$store.dispatch('payment/gotoPreviousPage')"
    >
      Change payment method
    </a>

    <subscription-price
      :amount="12"
      class="subscription"
      length="year"
      billing="annualy"
    />

    <p class="terms">
      By completing the purchase, I agree with System76’s
      <a target="_blank" rel="noopener" href="https://system76.com/privacy">Privacy Policy</a>
      and
      <a target="_blank" rel="noopener" href="https://system76.com/terms">
        Terms and Conditions
      </a>
      .
    </p>

    <div class="buttons">
      <sys-form-button
        ghost
        @click.prevent="$store.dispatch('payment/gotoPreviousPage')"
      >
        <font-awesome-icon :icon="faChevronLeft" />
        <span>Back</span>
      </sys-form-button>

      <sys-form-button
        color="primary"
        :disabled="!canReview"
        @click.prevent="$store.dispatch('payment/complete')"
      >
        Confirm
      </sys-form-button>
    </div>
  </div>
</template>

<style scoped>
  .head {
    font-weight: bold;
  }

  .payment {
    display: flex;
  }

  .payment svg {
    font-size: 3rem;
    color: #574F4A;
  }

  .payment div {
    margin-left: 1rem;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .change {
    display: block;
    margin: 1rem 0;
  }

  .subscription {
    margin: 3rem auto;
  }

  .terms {
    text-align: center;
    max-width: 45ch;
    display: block;
    margin: 2rem auto;
    color: #574F4A;
    font-size: 0.75rem;
  }
</style>

<script>
  import { mapGetters, mapState } from 'vuex'

  import { faChevronLeft, faCreditCard } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import SubscriptionPrice from '~/components/subscription-price'

  export default {
    name: 'PaymentInfoReview',

    components: {
      FontAwesomeIcon,
      SubscriptionPrice
    },

    computed: {
      ...mapState('payment', [
        'stripeRef',
        'stripeExpMonth',
        'stripeExpYear',
        'address'
      ]),

      ...mapGetters('payment', ['canReview']),

      faChevronLeft: () => faChevronLeft,
      faCreditCard: () => faCreditCard,

      formattedAddress () {
        const lines = [
          [this.address.firstName, this.address.lastName],
          [this.address.address1],
          [this.address.address2],
          [this.address.city, this.address.state, this.address.zip],
          [this.address.country]
        ]
          .map((l) => l.filter((v) => (v != null)))
          .map((l) => l.join(' '))
          .map((l) => l.trim())
          .filter((l) => (l !== ''))
          .map((l) => ([l, '<br />']))
          .reduce((a, b) => [...a, ...b], [])

        return lines
          .splice(0, (lines.length - 1))
          .join('')
      }
    }
  }
</script>
