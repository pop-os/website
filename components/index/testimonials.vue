<template>
  <section :class="classes">
    <vue-horizontal-list
      :items="items"
      :options="options"
    >
      <template
        v-slot:default="{item}"
        class="carousel"
      >
        <div class="item">
          <div class="quote">
            <p>{{ item.content }}</p>
            <h5>{{ item.name }}</h5>
          </div>
          <div>
            <div class="avatar">
              <img
                :src="require(`~/assets/images/index/testimonials/${item.image}`)"
                :alt="item.name"
              >
            </div>
          </div>
        </div>
      </template>
    </vue-horizontal-list>
  </section>
</template>
<style scoped>
  section {
    max-width: 800px;
    padding: 0 1rem;
    width: 100%;
  }

  .quote::before {
    content: '“';
    color: #FFAD00;
    font-size: 50px;
  }

  .quote p {
    padding: 0;
    margin: 0;
    margin-top: -40px;
  }

  .item {
    display: flex;
    flex-direction: row;
  }

  .avatar {
    position: relative;
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;
  }

  img {
    width: 100%;
    height: auto;
  }

  @media (width >= 1280px) {
    section {
      margin: auto auto;
      max-width: 800px;
      padding: 0 1rem;
      width: 100%;
    }
    .item {
      max-width: 670px;
      margin-left: 60px;
    }
  }
</style>
<script>
  import VueHorizontalList from 'vue-horizontal-list'

  export default {
    name: 'IndexTestimonials',
    components: {
      VueHorizontalList
    },
    data () {
      return {
        options: {
          responsive: [
            { size: 1 }
          ],
          list: {
            windowed: 800,
            padding: 24
          }
        },
        items: [
          { name: 'Stuart L.', image: 'stuart_l.jpg', content: 'My favorite thing about Pop_OS! Is that it literally gets out of your way and I can get so much work done without any problems. My favorite feature has to be the docker and the sweet animations!!!' },
          { name: 'Robert H.', image: 'robert_h.jpg', content: 'When I first got my System76 laptop I decided I\'d use Pop!_OS until it annoyed me, and would then switch to my distro-of-choice. Two years later not only am I still using it, it\'s become my distro-of-choice. It\'s radically cut how much time I spend hand-hacking configuration files, which gives me more time to spend on my projects' },
          { name: 'Robert T.', image: 'robert_t.jpg', content: 'With minimal fiddling, Pop!_OS is a very capable, functional, and beautiful Linux distribution. It is still fully tweakable, but out of the box it just works. Really well!' },
          { name: 'Amanda B.', image: 'amanda_b.jpg', content: 'I am a high school science teacher, and while I do consider myself tech-savvy, I am not one to explore or experiment with different operating systems. I have been using Pop!_OS for several months now and I love it. It is very intuitive and user-friendly for the non-Linux user. Every tool I have needed has been available in the Pop Shop and those tools are easy to download, install, and use. Thank you for creating a Linux OS that is simple and approachable.' }
        ]
      }
    }
  }
</script>
