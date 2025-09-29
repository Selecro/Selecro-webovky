<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n()
const showSearch = ref(false)

function openSearchBar() {
  showSearch.value = !showSearch.value
}
</script>

<template>
  <div class="search-container">
    <button @click="openSearchBar">
      <Icon icon="ic:outline-search" width="32" />
    </button>

    <transition name="slide-fade">
      <div v-if="showSearch" class="search-panel">
        <input type="text" :placeholder="t('message.searchText')" />
      </div>
    </transition>
  </div>
</template>

<style scoped>
button {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text);
  padding-top: 8px;
  padding-right: -5px;
}

input {
  border: none;
  width: 250px;
}

input:focus {
  outline: none;
}

.search-container {
  position: relative;
  display: flex;
  align-items: center;
}

.search-panel {
  position: absolute;
  left: -270px;
  background-color: var(--color-background);
  padding: 0.5em;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>

