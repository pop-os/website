<template>
  <section :class="classes">
    <template v-if="isLight">
      <img
        alt="Planet Texture"
        class="bg-texture"
        importance="low"
        src="~/assets/images/index/foot-texture-light.png?size=1000"
      >
    </template>
    <template v-if="isDark">
      <img
        alt="Moon Texture"
        class="bg-moon"
        importance="low"
        src="~/assets/images/index/foot-moon-dark.svg"
      >
    </template>

    <div class="content">
      <sys-paragraph-1>
        Pop!_OS is free to download. If you want to try it out before you
        commit, you can download the .iso file to a USB and boot the OS from
        there. Here’s how.  Like what we’re doing? Subscribe to fund more
        awesome features down the road. We’ve always got something exciting in
        the works for you to experience.
      </sys-paragraph-1>

      <div>
        <sys-form-button color="secondary">
          Download
        </sys-form-button>

        <sys-form-button color="primary">
          Support Pop
        </sys-form-button>
      </div>
    </div>
  </section>
</template>

<style scoped>
  section {
    clip-path: ellipse(120% 100% at 50% 100%);
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  section.light-mode {
    background: linear-gradient(#e1d5dc 0%, #f2d8db 10%, #d0d9d1 30%, #a8ebe0 100%);
    color: #000;
  }

  section.dark-mode {
    background: linear-gradient(#fcfbf7 0%, #fff 100%);
    color: #574F4A;
  }

  section.dark-mode::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgb(255, 255, 255), rgba(255, 255, 255, 0));
    z-index: 2;
  }

  .bg-texture {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    mix-blend-mode: luminosity;
    opacity: 0.3;
  }

  .bg-moon {
    position: absolute;
    left: 0;
    right: 0;
    object-fit: cover;
    object-position: top center;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .content {
    margin: 0 auto;
    text-align: center;
    max-width: 84ch;
    padding: 4rem 1rem calc(4rem + 14vw);
    position: relative;
    z-index: 10;
  }

  @media (width >= 100ch) {
    section {
      clip-path: ellipse(60% 100% at 50% 100%);
    }

    .content {
      padding: 8rem 1rem 14vw;
    }
  }
</style>

<script>
  import color from '~/mixins/color'

  export default {
    mixins: [
      color
    ]
  }
</script>
