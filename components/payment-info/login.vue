<template>
  <sys-form :submit-function="submit">
    <p>
      New to System76?
      <a
        href="#"
        @click.prevent="register"
      >
        Create Account
      </a>
    </p>

    <sys-form-email
      id="email"
      v-model="email"
      autocomplete="username"
      name="email"
      validation="required"
    />

    <sys-form-password
      id="password"
      v-model="password"
      autocomplete="current-password"
      name="password"
      validation="required"
    />

    <template v-slot:actions="{ submittable }">
      <div class="buttons">
        <sys-form-button
          tabindex="99"
          ghost
          @click.prevent="$store.dispatch('payment/gotoPreviousPage')"
        >
          <font-awesome-icon :icon="faChevronLeft" />
          <span>Back</span>
        </sys-form-button>

        <sys-form-button
          type="submit"
          color="primary"
          :disabled="!submittable"
        >
          Log In
        </sys-form-button>
      </div>
    </template>
  </sys-form>
</template>

<style scoped>
  p {
    margin: 2rem 0;
  }

  a {
    color: #AF5C02;
    text-decoration: none;
  }
</style>

<script>
  import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  export default {
    name: 'PaymentInfoLogin',

    components: {
      FontAwesomeIcon
    },

    data: () => ({
      email: '',
      password: ''
    }),

    computed: {
      faChevronLeft: () => faChevronLeft
    },

    mounted () {
      // HACK: vee-validate is not initiating corretly preventing the submit
      // button from ever being _not_ disabled. This is a hacky hack fix
      this.$children[0].$children[0].validate({ silent: true })
    },

    methods: {
      register () {
        this.$store.commit('payment/gotoPage', 'register')
      },

      async submit () {
        await this.$store.dispatch('session/authenticate', {
          email: this.email,
          password: this.password
        })

        await this.$store.dispatch('payment/gotoNextPage')
      }
    }
  }
</script>
