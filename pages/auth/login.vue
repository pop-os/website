<template>
  <div />
</template>

<script>
export default {
  auth: false,

  async fetch () {
    await this.$auth.loginWith('system76')
  }
}
</script>
