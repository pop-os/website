<template>
  <div class="container">
    <div
      v-if="!isErrorPage && !isSuccessPage"
      class="header"
    >
      <div class="close">
        <span @click="closeLightBox">
          <font-awesome-icon
            :icon="faTimes"
            size="1x"
          />
        </span>
      </div>

      <sys-header-2>Support Pop!_OS</sys-header-2>

      <progress-dots
        :number="5"
        :value="currentProgress"
      />
    </div>

    <div>
      <component
        :is="currentComponent"
        :key="currentComponent.name"
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

  .close {
    text-align: right;
  }

  .close span {
    cursor: pointer;
  }

  @media (width > 600px) {
    .container {
      width: 500px;
      padding: 1rem 2rem;
    }
  }
</style>

<script>
  import { faTimes } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { mapGetters } from 'vuex'

  import PaymentInfoBillingCreate from './payment-info/billing-create'
  import PaymentInfoBillingSelect from './payment-info/billing-select'
  import PaymentInfoError from './payment-info/error'
  import PaymentInfoLogin from './payment-info/login'
  import PaymentInfoRegister from './payment-info/register'
  import PaymentInfoReview from './payment-info/review'
  import PaymentInfoSuccess from './payment-info/success'
  import PaymentInfoSupport from './payment-info/support'
  import ProgressDots from './progress-dots'

  export default {
    components: {
      FontAwesomeIcon,
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

        case 'billing-select':
          return PaymentInfoBillingSelect

        case 'billing-create':
          return PaymentInfoBillingCreate

        case 'review':
          return PaymentInfoReview

        case 'error':
          return PaymentInfoError

        case 'success':
          return PaymentInfoSuccess

        default:
          return PaymentInfoSupport
        }
      },
      faTimes: () => faTimes,
      isErrorPage () {
        return (this.currentPage === 'error')
      },

      isSuccessPage () {
        return (this.currentPage === 'success')
      }
    },

    methods: {
      closeLightBox () {
        this.$parent.close()
      }
    }
  }
</script>
