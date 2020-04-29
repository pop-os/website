/**
 * artoo/components/v3/components/youtube-responsive.vue
 * A youtube video container that keeps the video responsive and fitable to the
 * page.
 */

<template>
  <!-- An extra div to avoid parents setting width and messing with sizing -->
  <div>
    <div
      :style="style"
      class="container"
    >
      <iframe
        v-bind="$attrs"
        :src="src"
        :width="width"
        :height="height"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        v-on="$listeners"
      />
    </div>
  </div>
</template>

<style scoped>
  .container {
    position: relative;
    padding: 0;
    height: 0;
  }

  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
</style>

<script>
export default {
  name: 'YoutubeResponsive',

  props: {
    height: {
      type: Number,
      default: () => 315
    },

    /**
     * Youtube video ID.
     *
     * @example `3cZFPRrRN_g` from `/watch?v=3cZFPRrRN_g`
     *
     * @var {string}
     */
    video: {
      type: String,
      required: true
    },

    width: {
      type: Number,
      default: () => 560
    }
  },

  computed: {
    ratio () {
      return ((this.height / this.width) * 100)
    },

    style () {
      return { 'padding-bottom': `${this.ratio}%` }
    },

    src () {
      return `https://www.youtube-nocookie.com/embed/${this.video}?rel=0&amp;controls=0&amp;showinfo=0`
    }
  }
}
</script>
