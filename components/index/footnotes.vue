<template>
  <section :class="classes">
    <sys-subheader-1
      tag="div"
      class="links content"
    >
      <a
        href="https://support.system76.com/#pop"
        rel="noopener"
        target="_blank"
      >
        <font-awesome-icon :icon="faBookOpen" />
        Pop!_Docs
      </a>

      <a
        href="https://chat.pop-os.org"
        rel="noopener"
        target="_blank"
      >
        <font-awesome-icon :icon="faMattermost" />
        Pop!_community
      </a>

      <a
        href="https://github.com/pop-os"
        rel="noopener"
        target="_blank"
      >
        <font-awesome-icon :icon="faGithub" />
        GitHub
      </a>
    </sys-subheader-1>
  </section>
</template>

<style scoped>
  section {
    position: relative;
    width: 100%;
    padding: 0 0 2rem;
    z-index: 2;
  }

  section.light-mode {
    background: linear-gradient(#fb9764 0%, #da4d3f 400px);
    color: #000;
  }

  section.light-mode::before {
    background-image: url("~assets/images/index/foot-planet-light.svg");
    background-size: cover;
    position: absolute;
    top: -8vw;
    left: 0;
    right: 0;
    width: 100%;
    height: 8vw;
    content: "";
  }

  section.light-mode::after {
    background-image: url("~assets/images/index/foot-ship-light.svg");
    background-size: contain;
    position: absolute;
    top: -25vw;
    left: 83vw;
    width: 42vw;
    height: 38.154vw;
    content: "";
  }

  section.dark-mode {
    background-color: #fff;
    color: #574F4A;
  }

  .content {
    margin: 0 auto;
    text-align: center;
    max-width: 1280px;
    padding: 1rem;
    position: relative;
    z-index: 10;
  }

  .links {
    align-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  .links a {
    border-radius: 3px;
    color: inherit;
    flex: 1 1 100%;
    margin: 1rem;
    outline: none;
    padding: 1rem;
    text-decoration: none;
    transition-duration: 100ms;
    transition-properties: box-shadow, color;
    transition-timing-function: ease;
    user-select: none;
  }

  .light-mode .links a:hover,
  .light-mode .links a:focus,
  .light-mode .links a:active {
    box-shadow:
      inset 0 0 0 1px var(--color-white),
      0 0 12px var(--color-white),
      0 0 1px var(--color-white);
    color: var(--color-white);
  }

  .dark-mode .links a:hover,
  .dark-mode .links a:focus,
  .dark-mode .links a:active {
    box-shadow:
      inset 0 0 0 1px var(--color-orange),
      0 0 12px var(--color-orange),
      0 0 1px var(--color-orange);
    color: var(--color-black);
  }

  .links svg {
    display: block;
    margin: 0 auto 1rem;
  }

  @media (width >= 80ch) {
    .links a {
      flex: 0 1 auto;
    }
  }

  @media (width >= 120ch) {
    .links a {
      padding: 1rem 2rem;
    }
  }
</style>

<script>
  import { faGithub } from '@fortawesome/free-brands-svg-icons'
  import { faCog, faBookOpen } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import faMattermost from '~/icons/faMattermost'
  import color from '~/mixins/color'

  export default {
    components: {
      FontAwesomeIcon
    },

    mixins: [
      color
    ],

    computed: {
      faGithub: () => faGithub,
      faMattermost: () => faMattermost,
      faCog: () => faCog,
      faBookOpen: () => faBookOpen
    }
  }
</script>
