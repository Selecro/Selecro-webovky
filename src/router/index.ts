import { createRouter, createWebHistory } from 'vue-router'
import ManualPage from '@/pages/ManualPage.vue'
import ToolPage from '@/pages/ToolPage.vue'
import DictionaryPage from '@/pages/DictionaryPage.vue'
import EducationPage from '@/pages/EducationPage.vue'
import HomePage from '@/pages/Homepage/HomePage.vue'
import EshopPage from '@/pages/EshopPage.vue'
import CardPage from '@/pages/CardPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage, },
    { path: '/tool', name: 'tool', component: ToolPage, },
    { path: '/dictionary', name: 'dictionary', component: DictionaryPage, },
    { path: '/education', name: 'education', component: EducationPage, },
    { path: '/manuals', name: 'manuals', component: ManualPage, },
    { path: '/eshop', name: 'eshop', component: EshopPage, },
    { path: '/card', name: 'card', component: CardPage, },
    { path: '/profile', name: 'profile', component: ProfilePage, },
    /*{ path: '/eshop', name: 'eshop', component: EshopPage, },
  */],
})

export default router

/*https://stackoverflow.com/questions/77690587/how-can-i-change-the-language-in-my-vue-js-app-using-a-query-parameter-such-as*/
/*https://vuejs.org/examples/#timer*/
