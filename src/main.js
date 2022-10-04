import { createApp } from 'vue'
// import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import Notifications from '@kyvg/vue3-notification'

import UserMaster from './components/UserMaster.vue'

const app = createApp(UserMaster)

app.component('user-master', UserMaster)

app.use(Notifications)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
