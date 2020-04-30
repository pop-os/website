<template>
  <div :class="$style.progress">
    <span
      v-for="i in number"
      :key="i"
      :class="dotClasses(i)"
    />
  </div>
</template>

<style module>
  .progress {
    align-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0 2rem;
    justify-content: center;
  }

  .dot {
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #48b9c7;
    display: inline-block;
    height: 12px;
    margin-right: 12px;
    width: 12px;
  }

  .active {
    background-color: #48b9c7;
  }

  .error {
    background-color: #f15d22;
    border-color: #f15d22;
  }
</style>

<script>
  export default {
    props: {
      error: {
        type: Boolean,
        default: false
      },

      number: {
        type: Number,
        default: 1
      },

      value: {
        type: Number,
        default: 1
      }
    },

    methods: {
      dotClasses (i) {
        return {
          [this.$style.dot]: true,
          [this.$style.active]: (i === this.value),
          [this.$style.error]: (i === this.value && this.error)
        }
      }
    }
  }
</script>
