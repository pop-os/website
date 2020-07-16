<template>
  <sys-form :submit-function="submit">
    <p>
      Already have an account?
      <a
        href="#"
        @click.prevent="$store.commit('payment/setPage', 'login')"
      >
        Log In
      </a>
    </p>

    <sys-form-input
      id="given_name"
      v-model="firstName"
      autocomplete="given-name"
      label="First Name"
      name="given_name"
      placeholder="John"
      validation="required"
    />

    <sys-form-input
      id="family_name"
      v-model="lastName"
      autocomplete="family-name"
      label="Last Name"
      name="family_name"
      placeholder="Smith"
      validation="required"
    />

    <sys-form-email
      id="email"
      v-model="email"
      autocomplete="username"
      name="email"
      validation="required"
    />

    <sys-form-password
      id="new_password"
      v-model="password"
      autocomplete="new-password"
      name="new_password"
      validation="required"
    />

    <sys-form-password
      id="password_confirm"
      v-model="confirmPassword"
      autocomplete="new-password"
      label="Confirm Password"
      name="new_password_confirm"
      validation="required|confirmed:new_password"
    />

    <label>
      <input
        v-model="newsletter"
        type="checkbox"
      >

      Subscribe to our newsletter
    </label>

    <template v-slot:actions="{ submittable }">
      <div class="buttons">
        <sys-form-button
          type="submit"
          color="primary"
          :disabled="!submittable"
        >
          Create Account
        </sys-form-button>

        <sys-form-button
          v-if="canGoBack"
          type="button"
          ghost
          @click.prevent="$store.dispatch('payment/gotoPreviousPage')"
        >
          <font-awesome-icon :icon="faChevronLeft" />
          <span>Back</span>
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

  form > label {
    display: block;
    margin: 1rem 0;
  }
</style>

<script>
  import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { mapGetters } from 'vuex'

  export default {
    name: 'PaymentInfoRegister',

    components: {
      FontAwesomeIcon
    },

    data: () => ({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      newsletter: true
    }),

    computed: {
      ...mapGetters('payment', ['canGoBack']),

      faChevronLeft: () => faChevronLeft
    },

    methods: {
      async submit () {
        const { firstName, lastName, email, password, newsletter } = this

        await this.$store.dispatch('session/register', {
          firstName, lastName, email, password, newsletter
        })

        await this.$store.dispatch('session/authenticate', { email, password })

        await this.$store.dispatch('payment/fetchData')
        await this.$store.dispatch('payment/gotoNextPage')
      }
    }
  }
</script>
