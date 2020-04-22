<template>
  <main :class="classes">
    <index-head />

    <index-other-features />

    <div class="end">
      <index-foot />
      <index-footnotes />
    </div>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .light-mode {
    background-color: #E5E5E5;
    color: #272727;
  }

  .dark-mode {
    background-color: #303030;
    color: #CCCCCC;
  }

  .end {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 1 1 auto;
  }
</style>

<script>
  import IndexFoot from '~/components/index/foot'
  import IndexFootnotes from '~/components/index/footnotes'
  import IndexHead from '~/components/index/head'
  import IndexOtherFeatures from '~/components/index/other-features'
  import color from '~/mixins/color'

  export default {
    components: {
      IndexFoot,
      IndexHead,
      IndexOtherFeatures,
      IndexFootnotes
    },

    mixins: [
      color
    ]
  }
</script>
