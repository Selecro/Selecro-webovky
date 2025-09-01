import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import cs from './locales/cs.ts'
import en from './locales/en.ts'

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
}
else {
  locale = localStorage.getItem('locale') || 'cs'
  theme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
}

const i18n = createI18n({
  legacy: false, // musi zustat kvuli ts
  locale,
  fallbackLocale: 'en',
  messages,
})

document.documentElement.setAttribute('data-theme', theme)

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
