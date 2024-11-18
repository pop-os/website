<template>
  <div>
    <sys-paragraph-1>
      System76 is continuing to make Pop!_OS the most convenient, fun-to-use OS
      known to man, woman, child, and machine. And you can help make it happen.
    </sys-paragraph-1>

    <subscription-price
      :amount="1"
      class="subscription"
      length="month"
      billing="annually"
    />

    <div class="buttons">
      <sys-form-button
        v-if="$auth.loggedIn"
        color="primary"
        @click.prevent="$store.dispatch('payment/gotoNextPage')"
      >
        Pay Now
      </sys-form-button>

      <sys-form-button
        v-if="$auth.loggedIn"
        color="danger"
        @click.prevent="getSupport()"
      >
        Unsubscribe
      </sys-form-button>

      <sys-form-button
        v-else
        color="primary"
        @click.prevent="$auth.loginWith('system76')"
      >
        Log In or Register
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
  </div>
</template>

<style scoped>
  p {
    max-width: 40ch;
  }

  .subscription {
    margin: 3rem auto;
  }
</style>

<script>
  import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { mapGetters } from 'vuex'

  import SubscriptionPrice from '~/components/subscription-price'

  export default {
    name: 'PaymentInfoSupport',

    components: {
      FontAwesomeIcon,
      SubscriptionPrice
    },

    computed: {
      ...mapGetters('payment', ['canGoBack']),

      faChevronLeft: () => faChevronLeft
    },

    methods: {
      getSupport () {
        if (confirm('You will be redirected to a contact page. To get help with canceling your subscription, please fill out the form.\n\nThank you for your support.')) {
          window.location = 'https://system76.com/contact/support'
        }
      }
    }
  }
</script>
