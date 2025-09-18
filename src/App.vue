<script setup lang="ts">
  import AppNavigationHeader from '@/components/AppNavigationHeader.vue'
  import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="layout">
    <AppNavigationHeader />

    <main class="content">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding-right: 6em;
  padding-left: 6em;
  padding-bottom: 2em;
}

.v-footer {
  margin-top: auto;
}
</style>
