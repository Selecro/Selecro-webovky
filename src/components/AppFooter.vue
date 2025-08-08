<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <v-footer>
    <div class="left-part">
      <a href="https://www.instagram.com/_selecro_/"><img src="/public/instagram.svg" alt="Instagram" class="icon-link icon-circle" /></a>
      <a href="mailto:info@selecro.cz" target="_blank" rel="noopener"><img src="/public/email.svg" alt="Email" class="icon-link icon-rectangle" /></a>
      <a href="https://cz.pinterest.com/selecro/_created/"><img src="/public/pinterest.svg" alt="Pinterest" class="icon-link icon-circle" /></a>
      <a href="https://www.youtube.com/@Selecro-v"><img src="/public/youtube.svg" alt="Youtube: selecro" class="icon-link icon-rectangle" /></a>
    </div>
    <div class="slogan-part">
      <h2>{{ t('message.slogan') }}</h2>
    </div>
  </v-footer>
</template>

<style scoped>
v-footer {
  display: flex;
  margin-top: auto;
  margin-bottom: 0;
  align-content: center;
  padding: 1.25em;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 60px;
  background: var(--primary-color);
  z-index: 1000;
}

.icon-circle {
  padding: 0.5em;
  height: 46px;
}

.icon-rectangle {
  padding: 0.5em;
  height: 40px;
  margin-top: 3px;
}

.left-part {
  display: flex;
  width: 20%;
}

.slogan-part {
  width: 60%;
  text-align: center;
}

a:hover {
  background: none !important;
}
</style>
