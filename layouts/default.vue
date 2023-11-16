<template>
  <div :class="$style.layout">
    <sys-omnibar>
      <template v-slot:global>
        <span :class="$style.hidden" />
      </template>

      <template v-slot:copy>
        <a
          href="https://system76.com/specials"
          target="_blank"
          :class="$style.specials"
        >
          Tuxmas holiday deals are here! Shop Now!
        </a>
      </template>

      <template v-slot:local>
        <button @click.prevent="toggleDownload">
          Download
        </button>
      </template>
    </sys-omnibar>

    <sys-headerbar
      url-homepage="https://system76.com"
      url-laptops="https://system76.com/laptops"
      url-desktops="https://system76.com/desktops"
      url-mini="https://system76.com/desktops/meerkat"
      url-servers="https://system76.com/servers"
      url-components="https://system76.com/components"
      url-keyboards="https://system76.com/accessories/launch"
      url-pop-os="/"
      url-contact="https://system76.com/contact"
      url-account="https://system76.com/my-account"
      url-admin="https://joshua.system76.com/admin"
      url-login="/auth/login"
      url-logout="/auth/logout"
      :admin="isStaff"
      :authenticated="isAuthenticated"
    />

    <nuxt :class="$style.page" />

    <sys-footerbar
      url-contact="https://system76.com/contact"
      url-about="https://system76.com/about"
      url-careers="https://system76.com/careers"
      url-sustainability="https://system76.com/sustainability"
      url-shipping="https://system76.com/shipping"
      url-privacy="https://system76.com/privacy-and-legal"
      show-newsletter-button
      @subscribe="toggleSubscribeModal"
    />

    <light-box
      :active="isDownloadActive"
      @input="toggleDownload"
    >
      <download-info />
    </light-box>

    <light-box
      :active="isPaymentActive"
      @input="togglePayment"
    >
      <payment-info />
    </light-box>

    <light-box :active="isSubscribeModalActive">
      <modal-newsletter
        validate-groups
        @close="toggleSubscribeModal"
      />
    </light-box>
  </div>
</template>

<style module>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100%;
  }

  .page {
    flex: 1 0 auto;
  }

  .specials {
    color: #fff;
    text-decoration: none;
  }

  .hidden {
    display: none !important;
  }
</style>

<script>
  import { mapGetters, mapState } from 'vuex'

  import DownloadInfo from '~/components/download-info'
  import LightBox from '~/components/light-box'
  import ModalNewsletter from '~/components/modal-newsletter'
  import PaymentInfo from '~/components/payment-info'

  export default {
    components: {
      DownloadInfo,
      ModalNewsletter,
      PaymentInfo,
      LightBox
    },

    computed: {
      ...mapGetters('download', { isDownloadActive: 'showing' }),
      ...mapGetters('newsletter', { isSubscribeModalActive: 'showing' }),
      ...mapState('payment', { isPaymentActive: 'showing' }),

      isAuthenticated () {
        return this.$auth.loggedIn
      },

      isStaff () {
        return this.$auth.user && this.$auth.user.staff
      }
    },

    methods: {
      toggleDownload () {
        this.$store.dispatch('download/detectChannel')
        this.$store.commit('download/toggleShowing')
      },

      togglePayment () {
        this.$store.commit('payment/setShowing')
      },

      toggleSubscribeModal () {
        this.$store.commit('newsletter/toggleShowing')
      }
    }
  }
</script>
