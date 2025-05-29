import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { VueReCaptcha } from 'vue-recaptcha-v3'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons' // (fas)
import { faGithub, faLinkedin, faTelegram, faYoutube, faXTwitter, faDev } from '@fortawesome/free-brands-svg-icons' // (fab)

library.add(faBars, faTimes, faGithub, faLinkedin, faTelegram, faYoutube, faXTwitter, faDev)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(VueReCaptcha, {
  siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  loaderOptions: {
    useRecaptchaNet: true,
    autoHideBadge: true
  }
})
app.mount('#app')
