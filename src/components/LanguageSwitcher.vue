<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { locale } = useI18n()
const currentLanguage = ref(locale.value)

const changeLanguage = () => {
  locale.value = currentLanguage.value
}
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
  font-size: 1.5em;
  border: none;
  padding: 2px;
  color: var(--color-text);
  appearance: none;        /* moderní prohlížeče */
  -webkit-appearance: none; /* Safari/Chrome */
  -moz-appearance: none;    /* Firefox */
}

</style>
