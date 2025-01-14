import { createApp } from 'vue'
import App from './App.vue'
import AppButton from './components/ui/appButton/AppButton.vue'
import FormField from './components/ui/formField/FormField.vue'
import AppModal from './components/appModal/AppModal.vue'
import '@/assets/styles/style.scss'

const app = createApp(App)

app.component('AppButton', AppButton)
app.component('FormField', FormField)
app.component('AppModal', AppModal)

app.mount('#app')
