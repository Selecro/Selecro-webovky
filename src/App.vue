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
  margin-right: 134px;
  margin-left: 134px;
  padding: 1em 2em;
  background-color: white;
}

.v-footer {
  margin-top: auto;
}
</style>
