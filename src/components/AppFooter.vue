<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n()
</script>

<template>
  <v-footer>
    <div class="left-part">
      <a href="https://www.instagram.com/_selecro_/" target="_blank" rel="noopener">
        <Icon icon="simple-icons:instagram" height="32"/>
      </a>

      <a href="mailto:info@selecro.cz" target="_blank" rel="noopener">
        <Icon icon="mdi:email-outline" height="42" />
      </a>

      <a href="https://cz.pinterest.com/selecro/_created/" target="_blank" rel="noopener">
        <Icon icon="bxl:pinterest-alt" height="42"/>
      </a>

      <a href="https://www.youtube.com/@Selecro-v" target="_blank" rel="noopener">
       <!-- <Icon icon="streamline-logos:youtube-clip-logo" height="45"/> -->
        <svg xmlns="http://www.w3.org/2000/svg"
             width="48" height="48"
             viewBox="0 0 24 24"
             class="youtube-icon">
          <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5">
            <path d="M1.5 12c0-1.477.071-2.87.164-4.038c.14-1.764 1.538-3.12 3.303-3.243C6.663 4.6 8.98 4.5 12 4.5s5.337.1 7.033.219c1.765.123 3.163 1.48 3.303 3.243c.093 1.169.164 2.56.164 4.038c0 1.53-.076 2.969-.174 4.163a3.374 3.374 0 0 1-3.166 3.121c-1.713.117-4.11.216-7.16.216s-5.447-.099-7.16-.216a3.374 3.374 0 0 1-3.166-3.121A52 52 0 0 1 1.5 12Z"/>
            <path d="M10 15V9l5.5 3z" fill="currentColor"/>
          </g>
        </svg>
      </a>
    </div>

    <div class="slogan-part">
      <h2>{{ t('message.slogan') }}</h2>
    </div>
  </v-footer>
</template>

<style scoped>
v-footer {
  display: flex;
  align-items: center;
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

.left-part {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.left-part a {
  display: flex;
  align-items: center;
  justify-content: center;
}

.slogan-part {
  width: 60%;
  text-align: center;
}

a {
  color: var(--color-text);
}

a:hover {
  background: none !important;
  color: var(--color-background);
}
</style>
