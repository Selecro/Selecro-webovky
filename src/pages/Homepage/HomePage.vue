<script setup lang="ts">
import NewsBar from '@/pages/Homepage/Components/NewsBar.vue'
import InstagramPost from "@/pages/Homepage/Components/InstagramPost.vue"
import BasicBanner from "@/pages/Homepage/Components/BasicBanner.vue"

import { useI18n } from 'vue-i18n'
import CrossCard from '@/pages/Homepage/Components/CrossCard.vue'
const { t } = useI18n()
</script>

<template>
  <div class="d-flex align-center justify-center pb-3">
    <BasicBanner/>
  </div>
  <div class="content-bar pt-3 pb-3">
    <v-row>
      <v-col cols="12" md="7">
        <NewsBar />
      </v-col>

      <v-col cols="12" md="4" class="mr-3 ml-3">
        <InstagramPost />
      </v-col>
    </v-row>
  </div>
  <div class="pt-3 pb-3">
    <h1>Co u nás najdete?</h1>
    <div class="d-flex">
      <CrossCard
        title="Nauč se háčkovat"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsu"
        image="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
        side="right"
        buttonAction="/education"
      />
      <img src="/cross_left.svg" class="svg-road">
    </div>
    <div class="d-flex">
      <img src="/cross_left.svg" class="svg-road" style="transform: scaleX(-1);">
      <CrossCard
        title="Nauč se háčkovat"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsu"
        image="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
        pictureSide="left"
        buttonAction="/dictionary"
      />
    </div>
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

.svg-road {
  color: var(--color-text);
}
</style>
