import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithubSquare, faHtml5, faCss3Alt, faJs, faGitAlt, faPhp, faVuejs, faLaravel, faTrello } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { QuillEditor } from '@vueup/vue-quill'

library.add(faLinkedin, faGithubSquare, faHtml5, faCss3Alt, faJs, faGitAlt, faPhp, faVuejs, faLaravel, faTrello, faEnvelope, faFileArrowDown, faPaperPlane)
const app = createApp(App)

app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('QuillEditor', QuillEditor)
app.use(router)
app.mount('#app')
