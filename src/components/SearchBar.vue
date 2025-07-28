<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const showSearch = ref(false)

function openSearchBar() {
  showSearch.value = !showSearch.value
}
</script>

<template>
  <div class="search-container">
    <button class="material-icons" @click="openSearchBar">search</button>

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
  font-size: 26px;
  cursor: pointer;
  color: var(--color-text);
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
  background-color: #ffffff;
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

