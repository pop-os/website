export default {
  computed: {
    classes () {
      if (this.isDark) {
        return this.$style['dark-mode']
      } else {
        return this.$style['light-mode']
      }
    },

    isDark () {
      return (this.$colorMode.preference === 'dark')
    },

    isLight () {
      return (!this.isDark)
    }
  },

  methods: {
    setDark () {
      this.$colorMode.preference = 'dark'
    },

    setLight () {
      this.$colorMode.preference = 'light'
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
