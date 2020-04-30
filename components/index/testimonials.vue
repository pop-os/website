<template>
  <section>
    <div
      :class="['icon', 'previous', (hasPrevious ? null : 'disabled')]"
      @click.prevent="gotoPrevious"
    >
      <font-awesome-icon :icon="faChevronLeft" />
    </div>

    <div
      :class="['icon', 'next', (hasNext ? null : 'disabled')]"
      @click.prevent="gotoNext"
    >
      <font-awesome-icon :icon="faChevronRight" />
    </div>

    <transition
      mode="out-in"
      :name="transition"
    >
      <div
        :key="currentIndex"
        class="item"
      >
        <font-awesome-icon
          class="quote"
          :icon="faQuoteLeft"
        />

        <p>{{ current.content }}</p>
        <h5>{{ current.name }}</h5>

        <img
          class="avatar"
          :src="require(`~/assets/images/index/testimonials/${current.image}?sizes=200`)"
          :alt="current.name"
        >
      </div>
    </transition>
  </section>
</template>

<style scoped>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem auto;
    max-width: 800px;
    padding: 0 1rem;
    position: relative;
    width: 100%;
  }

  .next-enter-active,
  .next-leave-active,
  .previous-enter-active,
  .previous-leave-active {
    transition: all 100ms ease;
  }

  .next-enter-active,
  .previous-leave-active {
    transform: translateX(1rem);
  }

  .next-leave-active,
  .previous-enter-active {
    transform: translateX(-1rem);
  }

  .next-leave-active,
  .previous-leave-active {
    opacity: 0;
  }

  .item {
    align-content: center;
    align-items: center;
    display: grid;
    flex: 0 0 100%;
    grid-gap: 1rem;
    justify-content: center;
    position: relative;
  }

  .icon {
    align-content: center;
    align-items: center;
    border-radius: 50%;
    display: flex;
    flex: 0 0 auto;
    font-size: 2rem;
    height: 4rem;
    justify-content: center;
    margin: 1rem;
    user-select: none;
    width: 4rem;
  }

  .icon:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .icon.disabled {
    background-color: transparent !important;
    opacity: 0.2;
  }

  .icon.previous {
    left: 0;
  }

  .icon.next {
    right: 0;
  }

  .quote {
    color: #FFAD00;
    content: '“';
    font-size: 2rem;
    left: calc(-2rem - 1ch);
    position: absolute;
    top: -0.5rem;
    user-select: none;
  }

  .item p {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    margin: 0;
    padding: 0;
  }

  .item h5 {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    margin: 0 0;
  }

  .avatar {
    border-radius: 50%;
    display: block;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    height: 8rem;
    margin: 0 auto;
    object-fit: cover;
    object-position: center;
    user-select: none;
    width: 8rem;
  }

  @media (width >= 600px) {
    .item p {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    .item h5 {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    .avatar {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }
  }

  @media (width >= 800px) {
    .icon {
      position: absolute;
      top: calc(50% - 2rem);
    }

    .icon.previous {
      left: -6rem;
    }

    .icon.next {
      right: -6rem;
    }
  }
</style>

<script>
  import { faChevronLeft, faChevronRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  const ITEMS = [
    { name: 'Stuart L.', image: 'stuart_l.jpg', content: 'My favorite thing about Pop_OS! Is that it literally gets out of your way and I can get so much work done without any problems. My favorite feature has to be the docker and the sweet animations!!!' },
    { name: 'Robert H.', image: 'robert_h.jpg', content: 'When I first got my System76 laptop I decided I\'d use Pop!_OS until it annoyed me, and would then switch to my distro-of-choice. Two years later not only am I still using it, it\'s become my distro-of-choice. It\'s radically cut how much time I spend hand-hacking configuration files, which gives me more time to spend on my projects' },
    { name: 'Robert T.', image: 'robert_t.jpg', content: 'With minimal fiddling, Pop!_OS is a very capable, functional, and beautiful Linux distribution. It is still fully tweakable, but out of the box it just works. Really well!' },
    { name: 'Amanda B.', image: 'amanda_b.jpg', content: 'I am a high school science teacher, and while I do consider myself tech-savvy, I am not one to explore or experiment with different operating systems. I have been using Pop!_OS for several months now and I love it. It is very intuitive and user-friendly for the non-Linux user. Every tool I have needed has been available in the Pop Shop and those tools are easy to download, install, and use. Thank you for creating a Linux OS that is simple and approachable.' }
  ]

  export default {
    name: 'IndexTestimonials',

    components: {
      FontAwesomeIcon
    },

    data: () => ({
      currentIndex: 0,
      transition: 'next'
    }),

    computed: {
      faChevronLeft: () => faChevronLeft,
      faChevronRight: () => faChevronRight,
      faQuoteLeft: () => faQuoteLeft,

      current () {
        return ITEMS[this.currentIndex]
      },

      hasNext () {
        return (this.currentIndex < ITEMS.length - 1)
      },

      hasPrevious () {
        return (this.currentIndex !== 0)
      }
    },

    methods: {
      gotoNext () {
        if (this.hasNext) {
          this.transition = 'next'
          this.currentIndex++
        }
      },

      gotoPrevious () {
        if (this.hasPrevious) {
          this.transition = 'previous'
          this.currentIndex--
        }
      }
    }
  }
</script>
