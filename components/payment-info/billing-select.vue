<template>
  <div>
    <template v-if="$fetchState.pending">
      <font-awesome-icon
        :icon="faSpinner"
        class="loading"
        size="3x"
        spin
      />
    </template>

    <template v-else-if="$fetchState.error">
      Error: {{ $fetchState.error }}
    </template>

    <template v-else>
      <p>
        <a
          href="#"
          @click.prevent="$store.commit('payment/setPage', 'billing-create')"
        >
          Create a new payment method
        </a>
      </p>

      <div class="grid">
        <label
          v-for="s in sources"
          :key="s.id"
        >
          <input
            v-model="sourceId"
            type="radio"
            name="method"
            :value="s.id"
          >

          <payment-method
            :brand="s.attributes.brand"
            :expiration-month="s.attributes['expiration-month']"
            :expiration-year="s.attributes['expiration-year']"
            :reference="s.attributes.reference"
          />
        </label>
      </div>

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
          Review
        </sys-form-button>
      </div>
    </template>
  </div>
</template>

<style scoped>
  .loading {
    display: block;
    margin: 2rem auto;
  }

  p {
    margin: 2rem 0;
  }

  .grid {
    align-content: flex-start;
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem -1rem;
  }

  label {
    align-content: center;
    align-items: center;
    display: flex;
    flex: 0 1 200px;
    margin: 1rem;
  }

  label > input {
    margin-right: 1ch;
  }
</style>

<script>
  import { faChevronLeft, faSpinner } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { mapState } from 'vuex'

  import PaymentMethod from '~/components/payment-method'

  export default {
    name: 'PaymentInfoBillingSelect',

    components: {
      FontAwesomeIcon,
      PaymentMethod
    },

    computed: {
      ...mapState('payment', ['sources', 'addresses']),

      faChevronLeft: () => faChevronLeft,
      faSpinner: () => faSpinner,

      sourceId: {
        get () {
          return this.$store.getters['payment/sourceId']
        },

        set (id) {
          const source = this.sources.find((o) => (o.id === id))
          this.$store.commit('payment/setSource', source)

          if (source != null) {
            const address = this.addresses.find((a) => (a.id === source.relationships.address.data.id))

            this.$store.commit('payment/setAddress', address)
          } else {
            this.$store.commit('payment/setAddress', null)
          }
        }
      }
    },

    async fetch () {
      if (this.sources.length < 1) {
        await this.$store.dispatch('payment/fetchData')
      }

      if (this.sources.length < 1) {
        this.$store.commit('payment/setPage', 'billing-create')
      } else if (this.sourceId == null) {
        this.sourceId = this.sources[0].id
      }
    }
  }
</script>
