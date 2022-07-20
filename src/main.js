import { createApp } from 'vue'
// import App from './App.vue'
import router from './router'

import UserMaster from './components/UserMaster.vue'

const app = createApp(UserMaster)

app.component('user-master', UserMaster)

app.use(router)

app.mount('#app')
