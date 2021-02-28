<template>
    <section class="flex justify-center items-between  lg:mx-64">
      <button @click="setLocale('en')" class="lg:inline" >In English</button>
      <button @click="setLocale('ru')"  class="lg:inline">На Русском</button>
      <button @click="setLocale('ba')"  class="lg:inline">Башҡортса</button>
      <button @click="setLocale('tat')"  class="lg:inline">Татарча</button>
    </section>
</template>

<script>
export default {
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
      localStorage.setItem('locale', locale)
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  @apply p-1 m-1 inline-block text-gray-200 bg-gray-800;
}
</style>
