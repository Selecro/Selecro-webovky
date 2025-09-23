<script setup lang="ts">
import NewsBar from '@/pages/Homepage/Components/NewsBar.vue'
import InstagramPost from "@/pages/Homepage/Components/InstagramPost.vue"
import BasicBanner from "@/pages/Homepage/Components/BasicBanner.vue"

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="d-flex align-center justify-center">
    <BasicBanner/>
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
.content-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.content-bar div {
  width: 100%;
}

</style>
