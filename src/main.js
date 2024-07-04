import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import dayjs from 'dayjs'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

const pinia = createPinia();


app.use(pinia);
pinia.use(piniaPluginPersistedstate);

app.use(router)
app.use(VueAxios, axios)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$dayjs = dayjs;
app.provide('$axios', axios);

app.mount('#app')
