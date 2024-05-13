import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { global_lazyLoad_directive } from '@/directives/lazyLoad'

const app = createApp(App)

app.directive('lazyload', global_lazyLoad_directive)

app.use(router).mount('#app')
