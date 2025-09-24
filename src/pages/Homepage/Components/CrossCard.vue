<script setup lang="ts">
import { computed } from "vue";

interface Props {
  title: string;
  text: string;
  image: string;
  pictureSide?: "left" | "right";
  buttonAction: string;
}

const props = defineProps<Props>();

const isLeft = computed(() => props.pictureSide === "left");
</script>

<template>
  <v-card
    variant="flat"
    color="var(--primary-color)"
    class="pa-10 mt-5 mb-5"
    :class="isLeft ? 'ml-auto' : 'mr-auto' "
    rounded="xl"
    max-width="816"
    max-height="287"
  >
    <div class="d-flex align-center justify-center">
      <template v-if="isLeft">
        <div>
          <v-img
            :src="image"
            rounded="xl"
            height="200"
            width="200"
            cover
          />
        </div>
        <div>
          <v-card-title class="text-right">
            <h2>{{ title }}</h2>
          </v-card-title>
          <v-card-text class="pl-5 text-right">
            <h5 class="pt-0 pb-5">{{ text }}</h5>
            <v-btn
              :href=buttonAction
              class="custom-btn mr-auto"
              width="350"
            >
              Prozkoumat
            </v-btn>
          </v-card-text>
        </div>
      </template>

      <template v-else>
        <div>
          <v-card-title>
            <h2>{{ title }}</h2>
          </v-card-title>
          <v-card-text class="pr-5">
            <h5 class="pt-0 pb-5">{{ text }}</h5>
            <v-btn
              href="/education"
              class="custom-btn"
              width="350"
            >
              Prozkoumat
            </v-btn>
          </v-card-text>
        </div>
        <div>
          <v-img
            :src="image"
            rounded="xl"
            height="200"
            width="200"
            cover
          />
        </div>
      </template>
    </div>
  </v-card>
</template>

<style scoped>
</style>
