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
    <v-row>
      <v-col cols="8">
        <NewsBar />
      </v-col>

      <v-col cols="4">
        <InstagramPost />
      </v-col>
    </v-row>
  </div>

</template>

<style scoped>
.content-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
}

.content-bar div {
  width: 100%;
}

</style>
