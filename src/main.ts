import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faTelegram, faYoutube, faXTwitter, faDev } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faLinkedin, faTelegram, faYoutube, faXTwitter, faDev)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
