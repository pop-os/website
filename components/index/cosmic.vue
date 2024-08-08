<template>
  <section
    :class="classes"
  >
    <div class="copy">
      <sys-header-2>POP!_OS IS EVOLVING</sys-header-2>

      <sys-paragraph-1>
        COSMIC, our new desktop environment, brings new features, refinements,
        core apps, stability, security, and performance to Pop!_OS users
        everywhere.
      </sys-paragraph-1>

      <cta-link
        to="https://system76.com/cosmic"
        caption="Learn more about COSMIC"
        :class="classes"
      >
        <template slot="after">
          <font-awesome-icon
            :icon="faAngleRight"
            size="1x"
          />
        </template>
      </cta-link>
    </div>
  </section>
</template>

<style scoped>
  section {
    margin: 4rem auto;
    max-width: 1280px;
    padding: 0 1rem;
    width: 100%;
  }
  .copy {
    grid-column: 1 / 2;
    margin: 0 auto 1rem;
    max-width: 80ch;
  }
  .copy > *:first-child {
    margin-top: 0;
    text-align: center;
  }
  .copy > *:last-child {
    margin-bottom: 0;
  }
  .cta svg {
    margin-left: 12px;
  }
  @media (width >= 900px) {
    .copy {
      grid-column: 1 / 3;
    }
  }

  @media (width >= 1280px) {
    .copy {
      grid-column: 1 / span 6;
      margin: 0 auto 1rem;
      max-width: 80ch;
    }
  }
</style>

<script>
  import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import CtaLink from '~/components/cta-link'
  import color from '~/mixins/color'

  export default {
    components: {
      CtaLink,
      FontAwesomeIcon
    },

    mixins: [
      color
    ],

    computed: {
      faAngleRight: () => faAngleRight
    }
  }
</script>
