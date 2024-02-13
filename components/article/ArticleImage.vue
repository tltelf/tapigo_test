<template>
  <figure>
    <img :src="imageSrc" :alt="imageAlt" />
    <figcaption v-if="figcaption">{{ figcaption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      default: '',
    },
    imageAlt: {
      type: String,
      default: '',
    },
    figcaption: {
      type: String,
      default: '',
    },
  },
}
</script>
