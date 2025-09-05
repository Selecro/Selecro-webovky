<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import NewsBar from '@/pages/Homepage/Components/NewsBar.vue'

const { t } = useI18n()
</script>

<template>
  <div class="welcome-text">
    <div style="display: block;">
      <h1>{{ t('message.welcomeTitle') }}</h1>
      <p>{{ t('message.welcomeText') }}</p>
      <p>njj</p>
    </div>
  </div>
  <div class="content-bar">
    <div>

    </div>
    <div>
      <NewsBar></NewsBar>
    </div>
  </div>
</template>

<style scoped>
div {
  margin-top: 2em;
  margin-bottom: 2em;
}

.welcome-text {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 70vh;
  background-color: #FFB1C7;
}

.content-bar {
  display: flex;
}

.content-bar div {
  width: 50%;
}
</style>
