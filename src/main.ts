import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import cs from './locales/cs.ts'
import en from './locales/en.ts'

const messages = {
  cs,
  en,
}

const i18n = createI18n({
  legacy: false, // musi zustat kvuli ts
  locale: 'cs',
  fallbackLocale: 'en',
  messages,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
