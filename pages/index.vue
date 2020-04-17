<template>
  <main :class="classes">
    <index-head />

    <div>
      <button @click.prevent="toggleColor">
        Toggle Color
      </button>
    </div>

    <index-foot />
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
  import IndexFoot from '~/components/index/foot'
  import IndexHead from '~/components/index/head'
  import color from '~/mixins/color'

  export default {
    components: {
      IndexHead,
      IndexFoot
    },

    mixins: [
      color
    ]
  }
</script>
