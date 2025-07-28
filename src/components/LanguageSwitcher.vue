<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue'

const { locale } = useI18n()
const currentLanguage = ref(locale.value)

const changeLanguage = () => {
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
  <div>
    <select v-model="currentLanguage" @change="changeLanguage">
      <option value="cs">CZ</option>
      <option value="en">EN</option>
    </select>
  </div>
</template>

<style scoped>
select {
  outline: none;
  box-shadow: none;
  text-align: center;
  background: none;
  font-family: var(--font-heading);
  font-size: 1.5em;
  border: none;
  padding: 2px;
  color: var(--color-text);
  appearance: none;        /* moderní prohlížeče */
  -webkit-appearance: none; /* Safari/Chrome */
  -moz-appearance: none;    /* Firefox */
}

option {
  color: var(--color-light-mode-text);
}
</style>
