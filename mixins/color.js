export default {
  computed: {
    classes () {
      if (this.isDark) {
        return 'dark-mode'
      } else {
        return 'light-mode'
      }
    },

    color: {
      get () {
        return this.$store.state['color/color']
      },

      set (value) {
        this.$store.commit('color/setColor', value)
      }
    },

    isDark () {
      return this.$store.getters['color/isDark']
    },

    isLight () {
      return this.$store.getters['color/isLight']
    }
  },

  methods: {
    setDark () {
      this.color = 'dark'
    },

    setLight () {
      this.color = 'light'
    },

    toggleColor () {
      if (this.isDark) {
        this.setLight()
      } else {
        this.setDark()
      }
    }
  }
}
