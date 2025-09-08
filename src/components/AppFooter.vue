<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n()
</script>

<template>
  <v-footer style="background-color: var(--primary-color)">
    <div class="left-part">
      <a href="https://cz.pinterest.com/selecro/_created/" target="_blank" rel="noopener">
        <Icon icon="meteor-icons:pinterest" height="38"/>
      </a>

      <a href="https://www.facebook.com/profile.php?id=61573272827000&locale=cs_CZ" target="_blank" rel="noopener">
        <Icon icon="fa6-brands:facebook" height="38"/>
      </a>

      <a href="mailto:info@selecro.cz" target="_blank" rel="noopener">
        <Icon icon="material-symbols:alternate-email-rounded" height="41" />
      </a>

      <a href="https://www.instagram.com/_selecro_/" target="_blank" rel="noopener">
        <Icon icon="simple-icons:instagram" height="33"/>
      </a>

      <a href="https://www.youtube.com/@Selecro-v" target="_blank" rel="noopener">
        <Icon icon="ant-design:youtube-outlined" height="48"/>
      </a>
    </div>

    <div class="slogan-part">
      <h2>{{ t('message.slogan') }}</h2>
      <p>© 2025 Selecro</p>
    </div>

    <div class="right-part">
      <a href="">
        <Icon icon="material-symbols:help-outline-rounded" height="42"/>
      </a>

      <a href="/about">
        <Icon icon="material-symbols:info-outline" height="42"/>
      </a>

      <a href="">
        <Icon icon="pajamas:documents" height="34" />
      </a>
    </div>
  </v-footer>
</template>

<style scoped>
v-footer {
  display: flex;
  align-items: center;
  margin-top: auto;
  align-content: center;
  padding: 1.25em;
  left: 0;
  right: 0;
  width: 100%;
  max-height: 60px;
  z-index: 1000;
}

.left-part {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  gap: 0.5em;
}

.left-part a {
  display: flex;
  align-items: center;
  justify-content: center;
}

.right-part {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  gap: 0.5em;
}

.slogan-part {
  width: 60%;
  text-align: center;
  color: var(--color-text);
}

a {
  color: var(--color-text);
}

a:hover {
  background: none !important;
  color: var(--color-background);
}
</style>
