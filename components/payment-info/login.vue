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
      autocomplete="username"
      name="email"
      validation="required"
      v-model="email"
    />

    <sys-form-password
      autocomplete="current-password"
      id="password"
      name="password"
      validation="required"
      v-model="password"
    />

    <template v-slot:actions="{ submitting, submittable, valid }">
      <div class="buttons">
        <sys-form-button
          ghost
          @click.prevent="$store.dispatch('payment/gotoPreviousPage')"
        >
          <font-awesome-icon :icon="faChevronLeft" />
          <span>Back</span>
        </sys-form-button>

        <sys-form-button
          type="submit"
          color="primary"
          :disabled="!valid || submitting"
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
