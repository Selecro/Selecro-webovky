<script setup lang="ts">

import { RouterLink } from 'vue-router'
import ColorThemeSwitcher from '@/components/ColorThemeSwitcher.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import SearchBar from '@/components/SearchBar.vue'
</script>

<template>
  <div>
    <div>
      <RouterLink to="/" class="home-router">
        <img src="/public/logo-without-bg.png" alt="Logo" class="logo-in-header" />
        <h1>Selecro</h1>
      </RouterLink>
    </div>

    <div>
      <SearchBar/>
      <LanguageSwitcher/>
      <ColorThemeSwitcher/>
      <RouterLink to="/card"> <span class="material-icons">shopping_cart</span> </RouterLink>
      <RouterLink to="/profile"> <span class="material-icons">account_circle</span> </RouterLink>
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
}

.logo-in-header {
  width: 50px;
  height: auto;
  cursor: pointer;
}

.home-router {
  display: flex;
  justify-content: center;
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
