import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'//เติม

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())//เติม
app.use(router)

app.mount('#app')
