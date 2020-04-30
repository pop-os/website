<template>
  <div>
    <span class="amount">${{ amount }}</span>
    <span class="length">/{{ length }}</span>
    <span class="time">Billed {{ billing }}</span>
  </div>
</template>

<style scoped>
  div {
    align-content: flex-end;
    align-items: flex-end;
    color: #574F4A;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    justify-content: center;
    grid-gap: 0.2rem 1ch;
    margin: 1rem auto;
  }

  .amount {
    font-size: 2rem;
    font-weight: bold;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    text-align: right;
    line-height: 2rem;
  }

  .length {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .time {
    border-top: 1px solid #8D817A;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    padding: 0.4rem 1rem 0;
    text-align: center;
  }
</style>

<script>
  export default {
    props: {
      amount: {
        type: Number,
        default: 12
      },

      billing: {
        type: String,
        default: 'annualy'
      },

      length: {
        type: String,
        default: 'year'
      }
    }
  }
</script>
