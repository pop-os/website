<template>
  <main :class="classes">
    <index-head />

    <index-cosmic />
    <index-streamline />
    <index-development />
    <index-testimonials />
    <index-system76 />
    <index-security />
    <index-software />
    <index-other-features />
    <index-pop-pi />

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
    background-color: #F6F6F6;
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
  import IndexCosmic from '~/components/index/cosmic'
  import IndexDevelopment from '~/components/index/development'
  import IndexFoot from '~/components/index/foot'
  import IndexFootnotes from '~/components/index/footnotes'
  import IndexHead from '~/components/index/head'
  import IndexOtherFeatures from '~/components/index/other-features'
  import IndexPopPi from '~/components/index/pop-pi'
  import IndexSecurity from '~/components/index/security'
  import IndexSoftware from '~/components/index/software'
  import IndexStreamline from '~/components/index/streamline'
  import IndexSystem76 from '~/components/index/system76'
  import IndexTestimonials from '~/components/index/testimonials'
  import color from '~/mixins/color'

  export default {
    components: {
      IndexCosmic,
      IndexDevelopment,
      IndexFoot,
      IndexFootnotes,
      IndexHead,
      IndexOtherFeatures,
      IndexPopPi,
      IndexSecurity,
      IndexSoftware,
      IndexStreamline,
      IndexSystem76,
      IndexTestimonials
    },

    mixins: [
      color
    ]
  }
</script>
