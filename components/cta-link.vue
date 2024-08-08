<template>
  <sys-paragraph-2 class="cta">
    <a
      :href="to"
      target="_blank"
    >
      <slot name="before" />
      {{ caption }}
      <slot name="after" />
    </a>
  </sys-paragraph-2>
</template>

<style scoped>
  .cta {
    font-weight: 400;
    font-family: var(--font-family-slab);
    font-style: normal;
    text-align: center;
  }

  .cta > a {
    color: #574F4A;
  }
  .dark-mode .cta > a {
    color: #CCCCCC;
  }
</style>

<script>

  export default {
    props: {
      to: {
        type: String,
        required: true
      },
      caption: {
        type: String,
        required: true
      }
    }
  }
</script>
