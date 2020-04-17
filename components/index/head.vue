<template>
  <section :class="classes">
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

<style module>
  .light-mode {
    background-image: url("~assets/images/index/head-light.png?webp");
    color: #fff;
  }

  .light-mode {
    background-image: url("~assets/images/index/head-light.png");
    color: #fff;
  }

  .dark-mode {
    background-image: url("~assets/images/index/head-dark.png?webp");
    color: #574F4A;
  }

  .dark-mode {
    background-image: url("~assets/images/index/head-dark.png");
  }
</style>

<style scoped>
  section {
    background-origin: center;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
  }

  .content {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    margin: 0 auto;
    max-width: 1280px;
    padding: calc(1rem + 3vw) 1rem calc(3rem + 6vw);
  }

  h1 {
    font-family: var(--font-family-slab);
    font-size: 2.3375rem;
    margin-top: 0;
  }

  .logo {
    display: none;
    filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.35));
    max-width: 85%;
  }

  @media (width >= 70rem) {
    .content {
      grid-template-columns: 1fr 1fr;
    }

    .logo {
      display: block;
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
