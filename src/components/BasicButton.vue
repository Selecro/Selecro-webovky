<template>
  <v-btn
    class="basic-button"
    @click="onClick"
    color="green"
    variant="outlined"
    rounded="xl"
  >
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
const props = defineProps({
  onClick: {
    type: Function,
    default: null,
  },
})
</script>

<style scoped>
.basic-button {
  background-color: #ca77e6;
  border: 1px solid #1644ff;
  border-radius: 20px;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  transition: 0.2s ease;
}

.basic-button:hover {
  background-color: #45a049;
}
</style>
