export default {
  computed: {
    classes () {
      if (this.isDark) {
        return this.$style['dark-mode']
      } else {
        return this.$style['light-mode']
      }
    },

    color: {
      get () {
        return this.$colorMode.preference
      },

      set (value) {
        this.$colorMode.preference = value
      }
    },

    isDark () {
      return (this.color === 'dark')
    },

    isLight () {
      return (!this.isDark)
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
