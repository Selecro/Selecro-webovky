<script setup lang="ts">

import { RouterLink } from 'vue-router'
import ColorThemeSwitcher from '@/components/ColorThemeSwitcher.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import SearchBar from '@/components/SearchBar.vue'
</script>

<template>
  <div class="header-container">
    <div class="left-part">
      <RouterLink to="/" class="home-router">
        <img src="/public/logo-without-bg.png" alt="Logo" class="logo-in-header" />
        <h1>Selecro</h1>
      </RouterLink>
    </div>

    <div class="right-part">
      <SearchBar/>
      <LanguageSwitcher/>
      <ColorThemeSwitcher/>
      <RouterLink to="/card"><span class="mt-3 material-icons ">shopping_cart</span></RouterLink>
      <RouterLink to="/profile"><span class="material-icons">account_circle</span></RouterLink>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
}

.left-part,
.right-part {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.right-part .material-icons {
  margin-top: 5px;
}

.logo-in-header {
  width: 50px;
  height: auto;
  cursor: pointer;
}

.home-router {
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: var(--color-text);
}

a:hover {
  background: none !important;
}

a {
  color: var(--color-text);
}
</style>
