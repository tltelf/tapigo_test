<template>
  <Nuxt />
</template>

<script>
export default {
  mounted() {
    document.body.classList.add('body-article')
  },
  beforeDestroy() {
    document.body.classList.remove('body-article')
  },
}
</script>
