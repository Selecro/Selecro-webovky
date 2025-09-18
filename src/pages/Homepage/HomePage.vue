<script setup lang="ts">
import NewsBar from '@/pages/Homepage/Components/NewsBar.vue'
import InstagramPost from "@/pages/Homepage/Components/InstagramPost.vue"

import { useI18n } from 'vue-i18n'
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
      <InstagramPost />
    </div>
    <div>
      <NewsBar></NewsBar>
    </div>
  </div>
</template>

<style scoped>
.welcome-text {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 500px;
  width: 100%;
  background-color: #FFB1C7;
}

.content-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.content-bar div {
  width: 100%; /* nebo úplně vyhodit width */
}
</style>
