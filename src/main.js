import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap.css'; // 부트스트랩 스타일시트를 import

const app = createApp(App)

// Vue Router를 Vue 앱에 연결
app.use(router)

app.mount('#app')

