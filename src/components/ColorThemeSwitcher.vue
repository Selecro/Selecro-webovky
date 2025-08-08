<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const isDark = ref(false)

  const toggleTheme = (event: Event) => {
    const checked = (event.target as HTMLInputElement).checked
    isDark.value = checked
    document.documentElement.setAttribute('data-theme', checked ? 'dark' : 'light')
    localStorage.setItem('theme', checked ? 'dark' : 'light')
  }

  onMounted(() => {
    const saved = localStorage.getItem('theme')
    isDark.value = saved === 'dark'
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  })
</script>

<template>
  <div>
    <label class="theme-switch">
      <input type="checkbox" :checked="isDark" @change="toggleTheme" />
      <span class="slider">
        <span class="second-mode material-icons left">
          light_mode
        </span>
        <span class="second-mode material-icons right">
          dark_mode
        </span>

        <span class="icon material-icons">
          {{ isDark ? 'dark_mode' : 'light_mode' }}
        </span>
      </span>
    </label>
  </div>
</template>

<style scoped>
div {
  margin-top: -49px;
}

.theme-switch {
  display: inline-block;
  width: 60px;
  height: 35px;
}

.theme-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  background-color: var(--color-switch-backround);
  border: #181818 2px solid;
  border-radius: 90px;
  cursor: pointer;
  display: block;
  height: 100%;
  width: 100%;
  position: relative;
}

.icon {
  position: absolute;
  top: 0;
  left: 0;
  height: 99%;
  width: 54%;
  border-radius: 60%;
  background-color: var(--color-switch-light);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background-color 0.3s;
  font-size: 18px;
  transform: translateX(0);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

input:checked + .slider .icon {
  transform: translateX(26px);
}

.second-mode {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: gray;
  pointer-events: none;
  z-index: 1;
}

.second-mode.left {
  left: 5px;
}

.second-mode.right {
  right: 5px;
}
</style>
