<template>
  <sys-form :submit-function="submit">
    <p>
      Already have an account?
      <a
        href="#"
        @click.prevent="login"
      >
        Log In
      </a>
    </p>

    <sys-form-input
      v-model="firstName"
      autocomplete="given-name"
      id="given_name"
      label="First Name"
      name="given_name"
      placeholder="John"
      validation="required"
    />

    <sys-form-input
      v-model="lastName"
      autocomplete="family-name"
      id="family_name"
      label="Last Name"
      name="family_name"
      placeholder="Smith"
      validation="required"
    />

    <sys-form-email
      v-model="email"
      autocomplete="username"
      id="email"
      name="email"
      validation="required"
    />

    <sys-form-telephone
      v-model="phoneNumber"
      autocomplete="tel"
      id="phone_number"
      name="phone_number"
      validation="required"
    />

    <sys-form-password
      v-model="password"
      autocomplete="new-password"
      id="new_password"
      name="new_password"
      validation="required"
    />

    <sys-form-password
      v-model="confirmPassword"
      autocomplete="new-password"
      id="password_confirm"
      label="Confirm Password"
      name="new_password_confirm"
      validation="required|confirmed:new_password"
    />

    <template v-slot:actions="{ submittable }">
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
          :disabled="!submittable"
        >
          Create Account
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
    name: 'PaymentInfoRegister',

    components: {
      FontAwesomeIcon
    },

    data: () => ({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    }),

    computed: {
      faChevronLeft: () => faChevronLeft
    },

    methods: {
      login () {
        this.$store.commit('payment/gotoPage', 'login')
      },

      async submit () {
        const { firstName, lastName, email, phoneNumber, password } = this

        await this.$store.dispatch('session/register', {
          firstName, lastName, email, phoneNumber, password
        })

        await this.$store.dispatch('session/authenticate', { email, password })

        await this.$store.dispatch('payment/gotoNextPage')
      }
    }
  }
</script>
