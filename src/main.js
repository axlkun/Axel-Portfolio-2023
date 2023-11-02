import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js';
import { MotionPlugin } from '@vueuse/motion';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VApp, VLazy, VSheet, VIcon, VImg, VCard, VCardTitle, VCardText, VChip, VFooter, VDivider } from 'vuetify/components'
// import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css';
import colors from 'vuetify/lib/util/colors'

const vuetify = createVuetify({
  components: {
    VApp,
    VLazy,
    VSheet,
    VIcon,
    VImg,
    VCard,
    VCardTitle,
    VCardText,
    VChip,
    VFooter,
    VDivider
  },
  // directives,
  colors
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(MotionPlugin)
app.mount('#app')
