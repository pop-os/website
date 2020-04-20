<template>
  <section :class="classes">
    <template v-if="isLight">
      <img
        alt="Planet Texture"
        class="bg-texture"
        importance="low"
        src="~/assets/images/index/head-texture-light.png?size=1000"
      >
      <img
        alt="Planets"
        class="bg-planets"
        importance="low"
        src="~/assets/images/index/head-planet-light.png?size=1600"
      >
    </template>
    <template v-if="isDark">
      <img
        alt="Moon Texture"
        class="bg-moon"
        importance="low"
        src="~/assets/images/index/head-moon-dark.svg"
      >
    </template>

    <div class="content">
      <div>
        <sys-subheader-1>
          Welcome to Pop!_OS
        </sys-subheader-1>

        <sys-paragraph-1>
          Pop!_OS is an operating system for STEM and creative professionals who
          use their computer as a tool to discover and create. Unleash your
          potential on secure, reliable open source software. Based on your
          exceptional curiosity, we sense you have a lot of it.
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

      <div
        class="logo"
        v-html="require('~/assets/images/index/logo.svg?include')"
      />
    </div>
  </section>
</template>

<style scoped>
  section {
    clip-path: ellipse(140% calc(100vw + 6rem) at 50% calc(100% - 6rem - 100vw));
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  section.light-mode {
    background: linear-gradient(#00163d 0%, #001e54 25%, #9acfe1 120%);
    color: #fff;
  }

  section.dark-mode {
    background: linear-gradient(#fff 0%, #fcfbf7 100%);
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
    background: linear-gradient(to bottom, rgb(255, 255, 255), rgba(255, 255, 255, 0));
    z-index: 2;
  }

  .bg-planets {
    position: absolute;
    top: 1rem;
    left: calc(50% - 900px);
    width: 1600px;
    z-index: 2;
    opacity: 0.2;
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
    opacity: 0.5;
  }

  .bg-moon {
    position: absolute;
    left: 0;
    right: 0;
    object-fit: cover;
    object-position: bottom center;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .content {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    margin: 0 auto 3rem;
    max-width: 1280px;
    padding: 2rem 1rem 0;
    position: relative;
    z-index: 10;
  }

  h1 {
    margin-top: 0;
  }

  .logo {
    display: none;
    filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.35));
    max-width: 100%;
  }

  @media (width >= 40rem) {
    .content {
      margin-bottom: 5rem;
    }
  }

  @media (width >= 70rem) {
    .content {
      grid-template-columns: 1fr 1fr;
      margin-bottom: 7rem;
    }

    .logo {
      display: block;
    }
  }

  @media (width >= 1280px) {
    section {
      clip-path: ellipse(calc(53vw + 242px) 140% at 45vw -40%);
    }

    .content {
      padding-top: 4vw;
      padding-bottom: calc(8rem - 4vw);
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
