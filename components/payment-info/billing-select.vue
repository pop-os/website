<template>
  <div class="container">
    <template v-if="$fetchState.pending">
      <font-awesome-icon
        :icon="faSpinner"
        size="3x"
        spin
      />
    </template>

    <template v-else-if="$fetchState.error">
      Error: {{ $fetchState.error }}
    </template>

    <template v-else>

    </template>
  </div>
</template>

<style scoped>
  .loading {
    display: block;
    margin: 2rem auto;
  }
</style>

<script>
  import { mapState } from 'vuex'

  import { faChevronLeft, faSpinner } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  export default {
    name: 'PaymentInfoBillingSelect',

    components: {
      FontAwesomeIcon
    },

    data: () => ({
    }),

    computed: {
      ...mapState('payment', ['sources']),

      faChevronLeft: () => faChevronLeft,
      faSpinner: () => faSpinner
    },

    async fetch () {
      if (this.sources.length < 1) {
        await this.$store.dispatch('payment/fetchSources')
      }

      if (this.sources.length < 1) {
        this.$store.commit('payment/gotoPage', 'billing-create')
      }

      w
    },

    methods: {
    }
  }
</script>
