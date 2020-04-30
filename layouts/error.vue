<template>
  <div class="container">
    <div class="error">
      <sys-header-1>{{ status }}</sys-header-1>
      <sys-paragraph-2>{{ message }}</sys-paragraph-2>
    </div>
  </div>
</template>

<style scoped>
  .container {
    align-content: center;
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 1rem;
    text-align: center;
    width: 100%;
  }
</style>

<script>
  export default {
    props: {
      error: {
        type: Object,
        required: true
      }
    },

    computed: {
      message () {
        return this.error.message
      },

      status () {
        return this.error.statusCode || 404
      }
    }
  }
</script>
