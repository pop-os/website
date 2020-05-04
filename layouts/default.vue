<template>
  <div :class="$style.layout">
    <sys-omnibar>
      <template v-slot:global>
        <a href="https://system76.com/specials">
          Special Offers
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
      url-pop-os="/"
      url-contact="https://system76.com/contact"
      url-account="https://system76.com/my-account"
      url-login="https://system76.com/my-account"
    />

    <nuxt :class="$style.page" />

    <sys-footerbar
      url-contact="https://system76.com/contact"
      url-about="https://system76.com/about"
      url-careers="https://system76.com/careers"
      url-specials="https://system76.com/specials"
      url-shipping="https://system76.com/shipping"
      url-financing="https://system76.com/financing"
      url-warranty="https://system76.com/warranty"
      url-privacy="https://system76.com/privacy"
      url-disclaimer="https://system76.com/disclaimer"
      url-terms="https://system76.com/terms"
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
</style>

<script>
  import { mapGetters, mapState } from 'vuex'

  import DownloadInfo from '~/components/download-info'
  import LightBox from '~/components/light-box'
  import PaymentInfo from '~/components/payment-info'

  export default {
    components: {
      DownloadInfo,
      PaymentInfo,
      LightBox
    },

    computed: {
      ...mapGetters('download', { isDownloadActive: 'showing' }),
      ...mapState('payment', { isPaymentActive: 'showing' })
    },

    methods: {
      toggleDownload () {
        this.$ga.event('download', 'toggle', 'layout')
        this.$store.dispatch('download/detectChannel')
        this.$store.commit('download/toggleShowing')
      },

      togglePayment () {
        this.$ga.event('payment', 'toggle', 'layout')
        this.$store.commit('payment/setShowing')
      }
    }
  }
</script>
