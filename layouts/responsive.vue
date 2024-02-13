<template>
  <Nuxt />
</template>

<script>
export default {
  mounted() {
    document.body.classList.add('body-responsive')
  },
  beforeDestroy() {
    document.body.classList.remove('body-responsive')
  },
}
</script>
