import { createApp } from 'vue'
import App from './App'
import router from './router'
import './index.css'
import './style/reset.scss'
const app = createApp(App);

app
.use(router)
.mount('#app')
