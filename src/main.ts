import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import App from './App.vue'
import './assets/base.css'
import router from './router'
import cs from './locales/cs'
import en from './locales/en'

const messages = { cs, en }

let locale: string
let theme: 'light' | 'dark'

const firstOpen = !localStorage.getItem('appFirstOpen')

if (firstOpen) {
  locale = navigator.language.split('-')[0] || 'cs'
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  theme = prefersDark ? 'dark' : 'light'

  localStorage.setItem('locale', locale)
  localStorage.setItem('theme', theme)
  localStorage.setItem('appFirstOpen', 'true')
} else {
  locale = (localStorage.getItem('locale') as string) || 'cs'
  theme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
}

// *i18n* - bez ikonových nastavení!
const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'en',
  messages,
})

// vytvoření Vuetify instance a přidání ikonového setu
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
// @ts-ignore
app.use(vuetify)
app.mount('#app')
