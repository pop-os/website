<template>
  <div>
    <font-awesome-icon
      :icon="icon"
      class="icon"
    />

    <span class="ref">Ending in: {{ reference }}</span>

    <template v-if="expirationMonth && expirationYear">
      <span class="exp">Expires: {{ expirationMonth }}/{{ expirationYear }}</span>
    </template>
  </div>
</template>

<style scoped>
  div {
    align-content: center;
    align-items: center;
    display: inline-grid;
    flex: 0 1 200px;
    grid-gap: 0.2rem 0.5rem;
  }

  svg {
    color: #574F4A;
    display: block;
    font-size: 3rem;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  .ref {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .exp {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
</style>

<script>
  import { faCcAmex, faCcVisa, faCcMastercard, faCcDiscover } from '@fortawesome/free-brands-svg-icons'
  import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  const CARD_ICONS = {
    'American Express': faCcAmex,
    Discover: faCcDiscover,
    Mastercard: faCcMastercard,
    Visa: faCcVisa
  }

  export default {
    components: {
      FontAwesomeIcon
    },

    props: {
      brand: {
        type: String,
        default: ''
      },

      reference: {
        type: String,
        default: ''
      },

      expirationMonth: {
        type: Number,
        default: null
      },

      expirationYear: {
        type: Number,
        default: null
      }
    },

    computed: {
      icon () {
        if (CARD_ICONS[this.brand] != null) {
          return CARD_ICONS[this.brand]
        } else {
          return faCreditCard
        }
      }
    }
  }
</script>
