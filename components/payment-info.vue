<template>
  <div class="container">
    <div
      v-if="!isErrorPage && !isSuccessPage"
      class="header"
    >
      <sys-header-2>Support Pop!_OS</sys-header-2>

      <progress-dots :number="5" :value="currentProgress" />
    </div>

    <div>
      <component
        :key="currentComponent.name"
        :is="currentComponent"
      />
    </div>
  </div>
</template>

<style scoped>
  .container {
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #C8C8C8;
    color: #272727;
    padding: 1rem;
  }

  .header {
    margin-bottom: 3rem;
  }

  h2 {
    text-align: center;
  }

  >>> a {
    color: #AF5C02;
    text-decoration: none;
  }

  >>> .buttons {
    align-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1rem -1rem 0;
    width: calc(100% + 2rem);
    flex: 1 1 100%;
  }

  >>> .buttons > * {
    margin: 0 1rem !important;
  }

  @media (width > 600px) {
    .container {
      width: 500px;
      padding: 1rem 2rem;
    }
  }
</style>

<script>
  import { mapGetters } from 'vuex'

  import ProgressDots from './progress-dots'

  import PaymentInfoSupport from './payment-info/support'
  import PaymentInfoLogin from './payment-info/login'
  import PaymentInfoRegister from './payment-info/register'
  import PaymentInfoBilling from './payment-info/billing'
  import PaymentInfoReview from './payment-info/review'
  import PaymentInfoError from './payment-info/error'

  export default {
    components: {
      ProgressDots
    },

    computed: {
      ...mapGetters('payment', [
        'currentPage',
        'currentProgress'
      ]),

      currentComponent () {
        switch (this.currentPage) {
          case 'login':
            return PaymentInfoLogin

          case 'register':
            return PaymentInfoRegister

          case 'billing':
            return PaymentInfoBilling

          case 'review':
            return PaymentInfoReview

          case 'error':
            return PaymentInfoError

          default:
            return PaymentInfoSupport
        }
      },

      isErrorPage () {
        return (this.currentPage === 'error')
      },

      isSuccessPage () {
        return (this.currentPage === 'success')
      }
    }
  }
</script>
