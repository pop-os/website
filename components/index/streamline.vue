<template>
  <section v-lazy-container="{ selector: 'img' }">
    <div class="copy">
      <sys-header-2>Streamline your workflow</sys-header-2>

      <sys-paragraph-1>
        Pop!_OS is designed for fast navigation, easy workspace organization,
        and fluid, convenient workflow. Your operating system should encourage
        discovery, not obstruct it.
      </sys-paragraph-1>
    </div>

    <div :class="[classes, 'block']">
      <sys-subheader-2>Workflow Customization</sys-subheader-2>

      <sys-paragraph-1>
        While you’ve got your wheels turning, take the scenic route with a dock
        and touchpad gestures, or race along a minimalist track from behind the
        wheel of a revving keyboard. With a variety of both mouse-driven and
        keyboard-driven customizations, you’re empowered to navigate your
        workflow the way you’ve always wanted.
      </sys-paragraph-1>
      <div
        class="video-wrap"
        @click.prevent="toggleVideo('-fltwBKsMY0')"
      >
        <div class="play-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 494.148 494.148"
            xml:space="preserve"
          >
            <path
              d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884C432.632,229.572,422.964,213.288,405.284,201.188z"
            />
          </svg>
        </div>
        <img
          alt="Auto-tiling with Pop shell video"
          data-src="https://i.ytimg.com/vi/-fltwBKsMY0/mqdefault.jpg"
          class="video"
        >
      </div>
    </div>

    <div :class="[classes, 'block']">
      <sys-subheader-2>Auto-Tiling With Pop Shell</sys-subheader-2>

      <sys-paragraph-1>
        Pop!_OS uses auto-tiling for the same reason that people hire
        assistants: Organizing your work is incredibly time-consuming. Sure,
        you could still move, resize, and arrange windows yourself, but why
        spend the time when your OS does it for you? Auto-tiling helps you be
        both organized and efficient, and is especially convenient on large
        displays.
      </sys-paragraph-1>
      <div
        class="video-wrap"
        @click.prevent="toggleVideo('-fltwBKsMY0')"
      >
        <div class="play-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 494.148 494.148"
            xml:space="preserve"
          >
            <path
              d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884C432.632,229.572,422.964,213.288,405.284,201.188z"
            />
          </svg>
        </div>
        <img
          alt="Auto-tiling with Pop shell video"
          data-src="https://i.ytimg.com/vi/-fltwBKsMY0/mqdefault.jpg"
          class="video"
        >
      </div>
    </div>

    <div :class="[classes, 'block']">
      <sys-subheader-2>Workspaces</sys-subheader-2>

      <sys-paragraph-1>
        Keep relevant content together and irrelevant content out of sight.
        When the clutter overwhelms you, just toss it onto another desktop.
        Problem solved.
      </sys-paragraph-1>
      <div
        class="video-wrap"
        @click.prevent="toggleVideo('v9oVZwJrjOc')"
      >
        <div class="play-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 494.148 494.148"
            xml:space="preserve"
          >
            <path
              d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884C432.632,229.572,422.964,213.288,405.284,201.188z"
            />
          </svg>
        </div>
        <img
          alt="Pop!_OS workspaces video"
          data-src="https://i.ytimg.com/vi/v9oVZwJrjOc/mqdefault.jpg"
          class="video"
        >
      </div>
    </div>

    <div :class="[classes, 'block']">
      <sys-subheader-2>Keyboard Navigation</sys-subheader-2>

      <sys-paragraph-1>
        Arm yourself with a dark-lord level of power at your fingertips. Use
        keyboard shortcuts to:

        <ul>
          <li>move/resize windows</li>
          <li>search for anything</li>
          <li>launch applications</li>
        </ul>
      </sys-paragraph-1>
      <div
        class="video-wrap"
        @click.prevent="toggleVideo('aqj0cRTZaVE')"
      >
        <div class="play-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 494.148 494.148"
            xml:space="preserve"
          >
            <path
              d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884C432.632,229.572,422.964,213.288,405.284,201.188z"
            />
          </svg>
        </div>
        <img
          alt="Keyboard navigation video"
          data-src="https://i.ytimg.com/vi/aqj0cRTZaVE/mqdefault.jpg"
          class="video"
        >
      </div>
    </div>

    <div :class="[classes, 'block']">
      <sys-subheader-2>Stacking</sys-subheader-2>

      <sys-paragraph-1>
        Stack application windows atop one another like tabs in a web browser.
        Just remember to switch off of Steam when the boss walks in.
      </sys-paragraph-1>

      <div
        class="video-wrap"
        @click.prevent="toggleVideo('1TSdFWY_U9A')"
      >
        <div class="play-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 494.148 494.148"
            xml:space="preserve"
          >
            <path
              d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884C432.632,229.572,422.964,213.288,405.284,201.188z"
            />
          </svg>
        </div>
        <img
          alt="Keyboard navigation video"
          data-src="https://i.ytimg.com/vi/1TSdFWY_U9A/mqdefault.jpg"
          class="video"
        >
      </div>
    </div>

    <light-box v-model="active">
      <div class="youtube">
        <youtube-responsive :video="video" />
      </div>
    </light-box>
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

  .block h2 {
    margin: 0 auto 1rem;
    max-width: 80ch;
  }

  .block p {
    align-self: center;
    flex: 1 1 auto;
    margin: 1rem auto;
    max-width: 60ch;
  }

  .block:nth-child(4) p {
    max-width: 53ch;
  }

  .block ul {
    margin: 1rem 0 0;
    padding: 0;
    list-style: none;
  }

  .block ul li::before {
    content: "- ";
  }

  .block .video-wrap {
    cursor: pointer;
    height: 0;
    margin: 1rem 0 0;
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
  }

  .video-wrap .play-btn {
    position: absolute;
    max-width: 700px;
    width: 100px;
    height: 100px;
    left: 50%;
    top: 50%;
    transform: translate(-25%, -25%);
    z-index: 99;
  }

  .video-wrap .play-btn svg {
    transition: all .2s ease;
    fill: rgba(255,255,255, 0.8);
    width: 50%;
  }

  .video-wrap .play-btn:hover svg,
  .video-wrap .play-btn:focus svg {
    fill: #fff;
  }

  .block img {
    bottom: 0;
    cursor: pointer;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }

  .youtube {
    width: 90vw;
  }

  @media (width >= 900px) {
    section {
      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(2, auto);
    }

    .block {
      padding: 2rem;
    }

    .copy {
      grid-column: 1 / 3;
    }
  }

  @media (width >= 1280px) {

    section {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(3, auto);
    }

    .copy {
      grid-column: 1 / span 6;
      margin: 0 auto 1rem;
      max-width: 80ch;
    }

    .block:nth-child(2) h2,
    .block:nth-child(3) h2 {
      margin: 0 0 1em;
    }

    .block:nth-child(2) {
      grid-column: 1 / span 3;
    }

    .block:nth-child(3) {
      grid-column: 4 / span 3;
    }

    .block:nth-child(4) {
      grid-column: 1 / span 2;
    }

    .block:nth-child(5) {
      grid-column: 3 / span 2;
    }

    .block:nth-child(6) {
      grid-column: 5 / span 2;
    }

    .youtube {
      width: 60vw;
    }
  }
</style>

<script>
  import LightBox from '~/components/light-box'
  import YoutubeResponsive from '~/components/youtube-responsive'
  import color from '~/mixins/color'

  export default {

    components: {
      LightBox,
      YoutubeResponsive
    },

    mixins: [
      color
    ],

    data: () => ({
      active: false,
      video: null
    }),

    methods: {
      toggleVideo (video) {
        this.video = video
        this.active = true
      }
    }
  }
</script>
