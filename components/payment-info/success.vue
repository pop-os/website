<template>
  <div>
    <sys-paragraph-1>
      Thank you for supporting Pop!_OS. With your help, we're going to make the
      best out-of-this-world experience for you and our users.
    </sys-paragraph-1>

    <img
      alt="Pop!_OS"
      src="~/assets/images/payment/logo.png"
    />
  </div>
</template>

<style scoped>
  div {
    padding: 6rem 0;
  }

  p {
    max-width: 25ch;
    margin: 0 auto 3rem;
  }

  img {
    display: block;
    margin: 0 auto;
  }
</style>

<script>
  export default {
    name: 'PaymentInfoSuccess'
  }
</script>
