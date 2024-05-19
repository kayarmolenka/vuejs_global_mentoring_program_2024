import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { global_lazyLoad_directive } from '@/directives/lazyLoad'

const app = createApp(App)
const pinia = createPinia()

app.directive('lazyload', global_lazyLoad_directive)

app.use(pinia).use(router).mount('#app')
