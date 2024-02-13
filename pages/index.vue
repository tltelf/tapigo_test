<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/registrationformpage">Форма регистрации</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/responsivelayoutpage">Адаптивный макет</nuxt-link>
      </li>
      <li><nuxt-link to="/articlepage">Статья</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
}
</script>

<style scoped>
nav {
  @apply flex items-center justify-center h-screen;
}

nav ul {
  @apply flex gap-x-8;
}

nav ul li {
  @apply w-60 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2;
}
</style>
