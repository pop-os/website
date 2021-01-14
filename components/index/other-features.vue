<template>
  <section>
    <light-box v-model="active">
      <div class="modal">
        <img :src="require(`~/assets/images/index/${image}-${ (isLight) ? 'light' : 'dark' }.jpg?resize&sizes[]=1920`).src">
      </div>
    </light-box>

    <sys-header-2>Other Features</sys-header-2>

    <div :class="[classes, 'block']">
      <div class="text">
        <sys-subheader-2>Hybrid Graphics</sys-subheader-2>

        <sys-paragraph-1>
          Set phasers to stunning performance. Toggle between battery-saving and
          high-powered graphics, or tell an application to use your GPU on launch.
        </sys-paragraph-1>
      </div>

      <div
        class="image"
        @click="toggleModal('other-features-hybrid')"
      >
        <img
          v-if="isLight"
          v-lazy="require('~/assets/images/index/other-features-hybrid-light.jpg')"
          alt="Hybrid graphics menu in Pop!_OS light theme"
          :data-loading="require('~/assets/images/index/other-features-hybrid-light.jpg?lqip')"
          :data-srcset="require('~/assets/images/index/other-features-hybrid-light.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&sizes[]=1920').srcSet"
        >
        <img
          v-if="isDark"
          v-lazy="require('~/assets/images/index/other-features-hybrid-dark.jpg')"
          alt="Hybrid graphics menu in Pop!_OS dark theme"
          :data-loading="require('~/assets/images/index/other-features-hybrid-dark.jpg?lqip')"
          :data-srcset="require('~/assets/images/index/other-features-hybrid-dark.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&sizes[]=1920').srcSet"
        >
      </div>
    </div>

    <div :class="[classes, 'block']">
      <div class="text">
        <sys-subheader-2>Gaming</sys-subheader-2>

        <sys-paragraph-1>
          Steam, Lutris, and GameHub create an incredible gaming experience
          in selection and performance. Let your game library roam free on a single-OS PC.
        </sys-paragraph-1>
      </div>

      <div
        class="image"
        @click="toggleModal('other-features-gaming')"
      >
        <img
          v-if="isLight"
          v-lazy="require('~/assets/images/index/other-features-gaming-light.jpg')"
          alt="Gaming in Pop!_OS light theme"
          :data-loading="require('~/assets/images/index/other-features-gaming-light.jpg?lqip')"
          :data-srcset="require('~/assets/images/index/other-features-gaming-light.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&sizes[]=1920').srcSet"
        >
        <img
          v-if="isDark"
          v-lazy="require('~/assets/images/index/other-features-gaming-dark.jpg')"
          alt="Gaming in Pop!_OS dark theme"
          :data-loading="require('~/assets/images/index/other-features-gaming-dark.jpg?lqip')"
          :data-srcset="require('~/assets/images/index/other-features-gaming-dark.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&sizes[]=1920').srcSet"
        >
      </div>
    </div>

    <div :class="[classes, 'block']">
      <div class="text">
        <sys-subheader-2>Do Not Disturb</sys-subheader-2>

        <sys-paragraph-1>
          Get rid of any and all notifications for however long you like. Cast out
          ye heathens, for there is many a work to be done!
        </sys-paragraph-1>
      </div>

      <div
        class="image"
        @click="toggleModal('other-features-dnd')"
      >
        <img
          v-if="isLight"
          v-lazy="require('~/assets/images/index/other-features-dnd-light.jpg')"
          alt="Do not disturb toggle in Pop!_OS light theme"
          :data-loading="require('~/assets/images/index/other-features-dnd-light.jpg?lqip')"
          :data-srcset="require('~/assets/images/index/other-features-dnd-light.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&sizes[]=1920').srcSet"
        >
        <img
          v-if="isDark"
          v-lazy="require('~/assets/images/index/other-features-dnd-dark.jpg')"
          alt="Do not disturb toggle in Pop!_OS dark theme"
          :data-loading="require('~/assets/images/index/other-features-dnd-dark.jpg?lqip')"
          :data-srcset="require('~/assets/images/index/other-features-dnd-dark.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&sizes[]=1920').srcSet"
        >
      </div>
    </div>

    <div :class="[classes, 'block']">
      <div class="text">
        <sys-subheader-2>Dark mode</sys-subheader-2>

        <sys-paragraph-1>
          It’s dark, like your afternoon coffee—but with high-contrast accent
          colors to please the eye. Flip the toggle below to see Dark Mode in
          action.
        </sys-paragraph-1>

        <label :class="[classes, 'switch']">
          <input
            :checked="isDark"
            aria-label="Dark Mode"
            type="checkbox"
            @change="toggleColor"
          >
        </label>
      </div>

      <div
        class="image"
        @click="toggleModal('other-features-mode')"
      >
        <img
          v-if="isLight"
          v-lazy="require('~/assets/images/index/other-features-mode-light.jpg')"
          alt="Dark mode settings in Pop!_OS light theme"
          :data-loading="require('~/assets/images/index/other-features-mode-light.jpg?lqip')"
          :data-srcset="require('~/assets/images/index/other-features-mode-light.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&sizes[]=1920').srcSet"
        >
        <img
          v-if="isDark"
          v-lazy="require('~/assets/images/index/other-features-mode-dark.jpg')"
          alt="Dark mode settings in Pop!_OS dark theme"
          :data-loading="require('~/assets/images/index/other-features-mode-dark.jpg?lqip')"
          :data-srcset="require('~/assets/images/index/other-features-mode-dark.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&sizes[]=1920').srcSet"
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
  .modal {
    width: 80vw;
  }

  .modal > img {
    width: 100%;
  }

  section {
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: repeat(5, auto);
    margin: 4rem auto;
    max-width: 1280px;
    padding: 0 1rem;
  }

  section > h2 {
    grid-column: 1 / 2;
    margin-top: 0;
    text-align: center;
  }

  .block {
    border-radius: 12px;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .light-mode.block {
    background-color: #fff;
    border-color: #C8C8C8;
    color: #272727;
  }

  .dark-mode.block {
    background-color: #272727;
    border-color: #171717;
    color: #ccc;
  }

  .text {
    flex: 1 1 auto;
  }

  .block h2 {
    margin-top: 0;
  }

  .switch {
    border-radius: 22px;
    display: inline-block;
    height: 44px;
    position: relative;
    transition: all 200ms linear;
    width: 86px;
  }

  .light-mode.switch {
    background-color: #C8C8C8;
    border-color: #fff;
    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.15);
  }

  .dark-mode.switch {
    background-color: #FBB86C;
    border-color: #000;
    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.25);
  }

  .switch input {
    appearance: none;
    border-radius: 24px;
    display: block;
    height: 36px;
    outline: none;
    position: absolute;
    top: 4px;
    transition: all 200ms linear;
    width: 36px;
  }

  .switch input:focus {
    outline: none !important;
  }

  .light-mode.switch input {
    background-color: #fff;
    left: 4px;
  }

  .dark-mode.switch input {
    background-color: #303030;
    left: 46px;
  }

  .block .image {
    cursor: pointer;
    flex: 0 0 auto;
    margin-top: 1rem;
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    user-select: none;
    width: 100%;
  }

  .block img {
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }

  @media (width >= 700px) {
    .block {
      padding: 2rem;
    }
  }

  @media (width >= 120ch) {
    section {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto repeat(2, 1fr)
    }

    section > h2 {
      grid-column: 1 / 3;
    }
  }

  @media (width >= 1280px) {
    section {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto 1fr auto;
    }

    section > h2 {
      grid-column: 1 / 4;
    }

    .block:last-of-type {
      flex-direction: row;
      grid-column: 1 / 4;
    }

    .block:last-of-type .text {
      display: flex;
      flex-direction: column;
    }

    .block:last-of-type h2 {
      text-align: left;
    }

    .block:last-of-type p {
      flex: 1 1 auto;
      margin: 0;
    }

    .block:last-of-type .image {
      width: 0;
      height: 0;
      padding-bottom: 337.5px;
      padding-right: 600px;
      margin-top: 0;
      margin-left: 2rem;
    }
  }
</style>

<script>
  import LightBox from '~/components/light-box'
  import color from '~/mixins/color'

  export default {
    components: {
      LightBox
    },

    mixins: [
      color
    ],

    data: () => ({
      active: false,
      image: 'other-features-mode'
    }),

    methods: {
      toggleModal (image) {
        this.image = image
        this.active = true
      }
    }
  }
</script>
