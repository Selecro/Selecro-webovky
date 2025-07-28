<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ColorThemeSwitch from '@/components/ColorThemeSwitch.vue'
import AppHeader from '@/components/AppHeader.vue'

</script>

<template>
  <header>
    <AppHeader></AppHeader>
    <nav>
      <RouterLink to="/" class="icon-link"><span class="material-icons">home</span>Selecro</RouterLink>
      <RouterLink to="/dictionary" class="icon-link"><span class="material-icons">book</span>Slovník</RouterLink>
      <RouterLink to="/education" class="icon-link"><span class="material-icons">school</span>Výuka</RouterLink>
      <RouterLink to="/manual" class="icon-link"><span class="material-icons">view_in_ar</span>Návody</RouterLink>
      <RouterLink to="/eshop" class="icon-link"><span class="material-icons">shopping_bag</span>Obchod</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  background-color: var(--primary-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 12px;
  padding-bottom: 0;
}

header div {
  display: flex;
  justify-content: center;
  align-items: center;
}

header div :last-child {
  margin-left: auto;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

a {
  color: var(--color-text);
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  transition: background 0.3s;
  width: 20%;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
}

a:hover {
  background: var(--primary-hover-color);
  border-radius: 5px;
}

.icon-link {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
</style>
