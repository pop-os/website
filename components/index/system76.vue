<template>
  <section>
    <div class="top">
      <gradient-br />

      <sys-header-2>GET EVERY ADVANTAGE ON SYSTEM76 HARDWARE</sys-header-2>
    </div>

    <sys-subheader-2>Form of: An amazing computer.</sys-subheader-2>

    <sys-paragraph-1>
      System76 hardware is engineered together with Pop!_OS for optimal
      performance and user experience. Our computers empower creators,
      makers, and builders to go forth and discover.
    </sys-paragraph-1>

    <div
      v-lazy-container="{ selector: 'img' }"
      class="grid"
    >
      <a
        :class="classes"
        href="https://system76.com/laptops"
        target="_blank"
        rel="noopener"
        title="Lemur"
      >
        <img
          alt="Lemur Pro"
          :data-src="require('~/assets/images/index/thumbnail_lemp9.png?sizes=300')"
        >
        <font-awesome-icon :icon="faExternalLinkAlt" />
      </a>

      <a
        :class="classes"
        href="https://system76.com/desktops"
        target="_blank"
        rel="noopener"
        title="Thelio"
      >
        <img
          alt="Thelio Desktops"
          :data-src="require('~/assets/images/index/thumbnail_thelios.png?sizes=300')"
        >
        <font-awesome-icon :icon="faExternalLinkAlt" />
      </a>

      <a
        :class="classes"
        href="https://system76.com/desktops/meerkat"
        target="_blank"
        rel="noopener"
        title="Meerkat"
      >
        <img
          alt="Meerkat"
          :data-src="require('~/assets/images/index/thumbnail_meerkat.png?sizes=300')"
        >
        <font-awesome-icon :icon="faExternalLinkAlt" />
      </a>
    </div>

    <gradient-br class="bottom" />
  </section>
</template>

<style scoped>
  section {
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: repeat(5, auto);
    margin: 4rem auto;
    max-width: 1280px;
    padding: 0 1rem;
  }

  .top {
    display: flex;
    flex-direction: column;
  }

  .top h2 {
    margin: 2rem 0 0;
  }

  section > h2,
  p {
    margin: 0;
  }

  .grid {
    align-content: stretch;
    align-items: stretch;
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: repeat(3, 1fr);
    justify-content: stretch;
    margin: 1rem auto;
    padding: 0 1rem;
    text-align: center;
    user-select: none;
    width: 100%;
  }

  .grid a {
    align-content: center;
    align-items: center;
    border-radius: 12px;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    outline: none;
    position: relative;
    transition: box-shadow 250ms ease;
  }

  .grid a.light-mode {
    background-color: #fff;
    border-color: #C8C8C8;
    color: #272727;
  }

  .grid a.dark-mode {
    background-color: #272727;
    border-color: #171717;
    color: #ccc;
  }

  .grid a:focus,
  .grid a:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }

  .grid img {
    width: 100%;
    max-width: 300px;
    padding: 2rem;
  }

  .grid svg {
    bottom: 0.5rem;
    height: 1rem;
    position: absolute;
    right: 0.5rem;
  }

  @media (width >= 800px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
    }
  }

  @media (width >= 1200px) {
    section {
      grid-template-columns: 5fr 8fr;
      grid-template-rows: auto auto 1fr auto;
    }

    .top {
      align-items: center;
      align-content: center;
      justify-content: stretch;
      flex-direction: row-reverse;
      grid-row: 1 / 2;
      grid-column: 1 / 3;
    }

    .top h2 {
      flex: 0 0 auto;
      margin: 0 1rem 0 0;
    }

    section > h2 {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }

    p {
      grid-row: 3 / 4;
      grid-column: 1 / 2;
    }

    .grid {
      grid-row: 2 / 4;
      grid-column: 2 / 3;
    }

    .bottom {
      grid-row: 4 / 5;
      grid-column: 1 / 3;
    }
  }
</style>

<script>
  import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import GradientBr from '~/components/gradient-br'
  import color from '~/mixins/color'

  export default {
    components: {
      FontAwesomeIcon,
      GradientBr
    },

    mixins: [
      color
    ],

    computed: {
      faExternalLinkAlt: () => faExternalLinkAlt
    }
  }
</script>
