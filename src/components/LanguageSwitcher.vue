<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue'

const { locale } = useI18n()
const currentLanguage = ref(locale.value)

const changeLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'cs' ? 'en' : 'cs'
  locale.value = currentLanguage.value
  localStorage.setItem('language', currentLanguage.value)
}

onMounted(() => {
  const savedLanguage = localStorage.getItem('language')
  if (savedLanguage) {
    currentLanguage.value = savedLanguage
    locale.value = savedLanguage
  }
})
</script>

<template>
  <v-button @click="changeLanguage">
    {{ currentLanguage.toUpperCase() }}
  </v-button>
</template>

<style scoped>
v-button {
  background: none;
  border: none;
  font-family: var(--font-heading);
  font-size: 1.5em;
  color: var(--color-text);
  cursor: pointer;
  padding: 2px;
  outline: none;
}
</style>
