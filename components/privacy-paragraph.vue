<template>
  <p class="legal">
    <em>Your email address will be used in accordance with our <a
      href="https://system76.com/privacy"
      target="_blank"
    >privacy policy</a>.</em>
  </p>
</template>

<style scoped>
  p.legal {
    font-size: 0.9em;
    text-align: center;
    margin: 1em 0;
  }
  a {
    color: var(--color-orange);
  }
</style>

<script>
  export default {
    name: 'PrivacyParagraph'
  }
</script>
