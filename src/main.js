import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { initTheme } from '@/composables/useTheme'

initTheme()

import 'bootstrap'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faLinkedin, faGithubSquare, faHtml5, faCss3Alt, faJs, faGitAlt, faVuejs, faLaravel, faDocker, faNodeJs, faMicrosoft
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope, faFileArrowDown, faSun, faMoon, faLayerGroup, faMobileScreen, faServer, faPlug, faDatabase,
  faMagnifyingGlass, faArrowsRotate, faFileCode, faFileInvoice, faArrowRightArrowLeft, faBell, faCode, faArrowLeft,
  faCloud, faPeopleGroup, faDiagramProject, faVial, faWrench, faFileLines, faLanguage
} from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { QuillEditor } from '@vueup/vue-quill'

library.add(
  faLinkedin, faGithubSquare, faHtml5, faCss3Alt, faJs, faGitAlt, faVuejs, faLaravel, faDocker, faNodeJs, faMicrosoft,
  faEnvelope, faFileArrowDown, faPaperPlane, faSun, faMoon,
  faLayerGroup, faMobileScreen, faServer, faPlug, faDatabase, faMagnifyingGlass,
  faArrowsRotate, faFileCode, faFileInvoice, faArrowRightArrowLeft, faBell, faCode, faArrowLeft,
  faCloud, faPeopleGroup, faDiagramProject, faVial, faWrench, faFileLines, faLanguage
)
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('QuillEditor', QuillEditor)
app.use(router)
app.mount('#app')
