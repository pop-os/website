<template>
  <div>
    <iframe
      :src="`https://pop-os.github.io${$nuxt.$route.path}`"
      style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"
    />
  </div>
</template>

<script>
  export default {
    layout: 'none'
    // beforeMount() {
    //     // window.location = "https://pop-os.github.io/docs" // "https://docs.pop-os.org"
    // }
  }
</script>
