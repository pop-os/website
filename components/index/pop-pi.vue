<template>
  <section>
    <div>
      <img
        v-lazy="require('~/assets/images/index/pi400.png')"
        alt="Pi400 Computer"
        :data-loading="require('~/assets/images/index/pi400.png?lqip')"
      >
    </div>
    <div>
      <sys-header-2>Pop!_PI for Raspberry Pi 4</sys-header-2>
      <sys-subheader-2>Tech Preview</sys-subheader-2>
      <sys-paragraph-1>
        We’ve optimized Pop!_OS 21.10 for the Raspberry Pi 4/400, a mini
        computer which empowers people to learn and explore computing. Pop!_Pi
        adapts Pop!_OS to the Raspberry Pi, giving you the same powerful
        software tools at your disposal. So whether you’re programming a robot
        or learning Rust, have fun tinkering and experimenting!
      </sys-paragraph-1>
      <div>
        <sys-form-button
          color="secondary"
          @click.prevent="toggleDownload"
        >
          Download
        </sys-form-button>
      </div>
    </div>
  </section>
</template>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto 4em auto;
    padding: 0 1rem;
  }

  img {
    width: 100%;
  }

  @media (width >= 970px) {
    section {
      flex-direction: row;
      padding: 0;
    }

    section > div:first-child {
      width: 40%;
    }

    section > div:nth-child(2) {
      width: 60%;
    }

    .half {
      margin: 0;
      padding: 0;
    }

    .row .half {
      width: 50%;
    }
  }
</style>

<script>
  import color from '~/mixins/color'

  export default {
    mixins: [
      color
    ],

    methods: {
      toggleDownload () {
        this.$store.dispatch('download/setPiMode')
        this.$store.commit('download/toggleShowing')
      }
    }
  }
</script>
