<template>
  <main :class="classes">
    <index-head />

    <div>
      <button @click.prevent="toggleColor">
        Toggle Color
      </button>
    </div>
  </main>
</template>

<style module>
  .light-mode {
    background-color: #E5E5E5;
    color: #272727;
  }

  .dark-mode {
    background-color: #303030;
    color: #CCCCCC;
  }
</style>

<script>
  import IndexHead from '~/components/index/head'
  import color from '~/mixins/color'

  export default {

    components: {
      IndexHead
    },
    mixins: [
      color
    ]
  }
</script>
