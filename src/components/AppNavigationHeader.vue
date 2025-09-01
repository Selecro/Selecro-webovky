<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'

import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <header>
    <AppHeader></AppHeader>
    <nav>
      <RouterLink to="/" class="icon-link"><Icon icon="ic:outline-home" class="icon-in-navigation"/>Selecro</RouterLink>
      <RouterLink to="/dictionary" class="icon-link"><Icon icon="ic:outline-book" class="icon-in-navigation"/>{{ t('message.dictionaryTitle') }}</RouterLink>
      <RouterLink to="/education" class="icon-link"><Icon icon="ic:outline-school" class="icon-in-navigation"/>{{ t('message.educationTitle') }}</RouterLink>
      <RouterLink to="/manuals" class="icon-link"><Icon icon="ic:outline-view-in-ar" class="icon-in-navigation"/>{{ t('message.manualTitle') }}</RouterLink>
      <RouterLink to="/eshop" class="icon-link"><Icon icon="ic:outline-shopping-bag" class="icon-in-navigation"/>{{ t('message.shopTitle') }}</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: var(--primary-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.25em;
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
  position: relative;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
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

a:not(:first-child)::before {
  content: '';
  position: absolute;
  left: 0;
  top: 20%;
  bottom: 20%;
  width: 1px;
  background-color: var(--color-text);
}

a:hover {
  background: var(--primary-hover-color);
}

.icon-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem; /* kontroluje výšku textu i ikon */
}

.icon-link .icon-in-navigation {
  width: 2em;
  height: 2em;
  flex-shrink: 0;
}

</style>
