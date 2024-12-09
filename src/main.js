import { createApp } from 'vue'
import App from './App.vue'
import AppButton from './components/ui/appButton/AppButton.vue'
import '@/assets/styles/style.scss'

const app = createApp(App)

app.component('AppButton', AppButton)

app.mount('#app')
