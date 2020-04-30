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
      billing="annualy"
    />

    <div class="buttons">
      <sys-form-button
        type="button"
        ghost
        @click.prevent="$store.dispatch('payment/gotoPreviousPage')"
      >
        <font-awesome-icon :icon="faChevronLeft" />
        <span>Back</span>
      </sys-form-button>

      <sys-form-button
        color="primary"
        @click.prevent="$store.dispatch('payment/gotoNextPage')"
      >
        Pay Now
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

  import SubscriptionPrice from '~/components/subscription-price'

  export default {
    name: 'PaymentInfoSupport',

    components: {
      FontAwesomeIcon,
      SubscriptionPrice
    },

    computed: {
      faChevronLeft: () => faChevronLeft
    }
  }
</script>
