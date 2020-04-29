<template>
  <div>
    <template v-if="source">
      <sys-paragraph-1 class="head">
        Payment method
      </sys-paragraph-1>

      <payment-method
        class="payment"
        :brand="source.attributes.brand"
        :reference="source.attributes.reference"
        :expiration-month="source.attributes['expiration-month']"
        :expiration-year="source.attributes['expiration-year']"
      />
    </template>

    <template v-if="address">
      <sys-paragraph-1 class="head">
        Billing address
      </sys-paragraph-1>

      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="formattedAddress" />
    </template>

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
      <a
        target="_blank"
        rel="noopener"
        href="https://system76.com/privacy"
      >Privacy Policy</a>
      and
      <a
        target="_blank"
        rel="noopener"
        href="https://system76.com/terms"
      >
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

      <div>
        <sys-form-button
          v-if="subscription"
          :disabled="!canReview"
          @click.prevent="$store.dispatch('payment/deleteSubscription')"
        >
          Delete
        </sys-form-button>

        <sys-form-button
          color="primary"
          :disabled="!canReview"
          @click.prevent="$store.dispatch('payment/createSubscription')"
        >
          Confirm
        </sys-form-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .head {
    font-weight: bold;
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
  import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { mapGetters, mapState } from 'vuex'

  import PaymentMethod from '~/components/payment-method'
  import SubscriptionPrice from '~/components/subscription-price'

  export default {
    name: 'PaymentInfoReview',

    components: {
      FontAwesomeIcon,
      SubscriptionPrice,
      PaymentMethod
    },

    computed: {
      ...mapState('payment', ['source', 'address', 'subscription']),
      ...mapGetters('payment', ['canReview']),

      faChevronLeft: () => faChevronLeft,

      formattedAddress () {
        const { attributes } = this.address

        const lines = [
          [attributes['first-name'], attributes['last-name']],
          [attributes.address1],
          [attributes.address2],
          [attributes.city, attributes.state, attributes.zip],
          [attributes.country]
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
