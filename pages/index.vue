<template>
  <main :class="classes">
    <index-head />

    <index-streamline />
    <index-other-features />

    <index-foot />
  </main>
</template>

<style scoped>
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
  import IndexOtherFeatures from '~/components/index/other-features'
  import IndexStreamline from '~/components/index/streamline'
  import color from '~/mixins/color'

  export default {
    components: {
      IndexFoot,
      IndexHead,
      IndexOtherFeatures,
      IndexStreamline
    },

    mixins: [
      color
    ]
  }
</script>
