<template>
  <div class="container">
    <div class="title">
      <sys-header-3>{{ modalHeader }}</sys-header-3>
      <div
        class="close"
        @click.prevent="$emit('close')"
      >
        <font-awesome-icon
          :icon="faTimes"
          size="1x"
        />
      </div>
    </div>

    <template v-if="$fetchState.pending || saving">
      <font-awesome-icon
        :icon="faSpinner"
        spin
        class="loading"
      />
    </template>

    <template v-else>
      <template v-if="!success">
        <sys-form
          submit-text="Save Changes"
          submit-color="secondary"
          :submit-function="saveMailchimpSettings"
          :disabled="saveButtonDisabled"
        >
          <sys-form-email
            v-if="!userFromAuth"
            id="email"
            v-model="email"
            name="email"
            autocomplete="username"
            validation="required"
          />

          <p>Select one or more options below to subscribe.</p>
          <div class="toggles">
            <sys-form-button
              size="small"
              @click.prevent="toggleInterests(true)"
            >
              Select all
            </sys-form-button>
            <sys-form-button
              size="small"
              @click.prevent="toggleInterests(false)"
            >
              Select none
            </sys-form-button>
          </div>

          <div
            v-for="(interest, i) in interests"
            :key="i"
          >
            <input
              :id="`interest-${i}`"
              v-model="groups[interest.id]"
              type="checkbox"
            >
            <label :for="`interest-${i}`">{{ interest.name }}</label>
          </div>
        </sys-form>

        <privacy-paragraph />
      </template>
      <template v-else>
        <div class="buttons">
          <sys-form-button
            color="secondary"
            @click.prevent="$emit('close')"
          >
            Close
          </sys-form-button>
        </div>
      </template>
    </template>
  </div>
</template>

<style scoped>
  .loading {
    margin: 1em auto;
    text-align: center;
    display: block;
    font-size: 3em;
  }

  .container {
    background-color: #fff !important;
    border-radius: 12px;
    border: 1px solid #C8C8C8;
    color: #272727;
    padding: 2rem 2.5rem;
    position: relative;
    cursor: default !important;
  }

  .title {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
  }

  .title h3 {
    margin: 0;
  }

  .close {
    align-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: absolute;
    right: 6px;
    top: 6px;
    height: 32px;
    width: 32px;
  }

  .close:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .container p {
    margin-top: 1.25em;
  }

  >>> .buttons {
    border-top: 1px solid #48B9C7;
    margin-top: 1em;
    padding-top: 1em;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  >>> .buttons button {
    margin: 0;
    min-width: 16ch;
  }

  >>> strong {
    font-weight: 800;
  }

  label {
    padding-left: .5em;
    font-weight: 700;
  }

  input,
  label {
      line-height: 3em;
  }

  .toggles {
    max-width: 22ch;
    display: flex;
    justify-content: space-between;
    margin: 1em 0;
  }

  .toggles button {
    margin: 0 !important;
  }

  @media (width > 834px) {
    .container {
      width: 700px;
    }
  }
</style>

<script>
  import { faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import { SysHeader3 } from '@system76/design'

  import PrivacyParagraph from './privacy-paragraph'

  export default {
    components: {
      FontAwesomeIcon,
      SysHeader3,
      PrivacyParagraph
    },

    props: {
      validateGroups: {
        type: Boolean,
        default: false
      }
    },

    data: () => ({
      email: '', // used when userAuth is empty
      mailchimpStatus: 'pending',
      interests: [],
      groups: {}, // what we call interests internally
      saving: false,
      success: false
    }),

    async fetch () {
      this.interests = await this.fetchInterests()

      this.interests.forEach((interest) => {
        this.$set(this.groups, interest.id, false)
      })

      if (this.userFromAuth) {
        const mailchimp = await this.fetchMailchimpSettings()
        this.mailchimpStatus = mailchimp.status
        if (mailchimp.interests) {
          for (const [key, val] of Object.entries(mailchimp.interests)) {
            this.$set(this.groups, key.toLowerCase(), val)
          }
        }
      }
    },

    computed: {
      faSpinner: () => faSpinner,
      faTimes: () => faTimes,

      userFromAuth () {
        return this.$auth.user
      },

      saveButtonDisabled () {
        if (this.validateGroups) {
          let disabled = this.saving
          if (!disabled) disabled = !this.hasGroupSelected
          return disabled
        } else {
          return this.saving
        }
      },

      saveStatus () {
        if (['pending', 'unsubscribed'].includes(this.mailchimpStatus)) {
          return 'pending'
        }
        if (this.hasGroupSelected) {
          return 'subscribed'
        } else {
          return 'unsubscribed'
        }
      },

      hasGroupSelected () {
        return Object.values(this.groups).some((bool) => bool === true)
      },
      modalHeader () {
        if (this.success) {
          switch (this.saveStatus) {
          case 'unsubscribed':
            return 'Unsubscribed from all mailing lists.'
          case 'pending':
            return 'Check your email to confirm subscription.'
          default:
            return 'Subscriptions have been updated.'
          }
        }
        return 'Subscribe and Manage'
      }

    },

    methods: {
      async fetchInterests () {
        const data = await this.$hal()
          .get('/accounts/newsletter/interests')
          .flatten()

        return data.interests
      },

      async fetchMailchimpSettings () {
        const email = (this.userFromAuth ? this.userFromAuth.email : this.email)
        return this.$hal()
          .get('/accounts/newsletter')
          .parameter('email_address', email)
          .flatten()
      },

      async saveMailchimpSettings () {
        this.saving = true
        if (this.email) {
          const mailchimp = await this.fetchMailchimpSettings()
          this.mailchimpStatus = mailchimp.status
        }

        const interests = {}
        for (const [key, val] of Object.entries(this.groups)) {
          interests[key] = val
        }

        const body = {
          email_address: (this.userFromAuth) ? this.userFromAuth.email : this.email,
          status: this.saveStatus,
          interests: interests,
          merge_fields: {
            FNAME: (this.userFromAuth) ? this.userFromAuth.firstName : '',
            LNAME: (this.userFromAuth) ? this.userFromAuth.lastName : ''
          }
        }

        try {
          await this.$hal()
            .post('/accounts/newsletter')
            .bodyCasing(false)
            .body(body)
          this.saving = false
          this.success = true
        } catch (e) {
          this.saving = false
          this.success = false
          throw e
        }
      },

      toggleInterests (all = true) {
        if (all) {
          this.interests.forEach((interest) => {
            this.$set(this.groups, interest.id, true)
          })
        } else {
          this.interests.forEach((interest) => {
            this.$set(this.groups, interest.id, false)
          })
        }
      }
    }
  }
</script>
