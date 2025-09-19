<script setup lang="ts">
import NewsBar from '@/pages/Homepage/Components/NewsBar.vue'
import InstagramPost from "@/pages/Homepage/Components/InstagramPost.vue"

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="welcome-text">
    <div style="display: block; width: 80%">
      <h1>{{ t('message.welcomeTitle') }}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.</p>
      <BasicButton :onClick="() => console.log('klik!')">Pokus</BasicButton>
    </div>
  </div>
  <BasicButton :onClick="() => console.log('klik!')">Pokus</BasicButton>
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
  height: 433px;
  margin: 2em 0em;
  width: 100%;
  background-image: url('/wel-test1.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 20px;
}
/*
.welcome-text {
  background-image: url('/wel-test1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 300px;
  padding: 20px;
  color: white;
}*/


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
