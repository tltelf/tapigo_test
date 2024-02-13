<template>
  <Nuxt />
</template>

<script>
export default {
  mounted() {
    document.body.classList.add('body-default')
  },
  beforeDestroy() {
    document.body.classList.remove('body-default')
  },
}
</script>
