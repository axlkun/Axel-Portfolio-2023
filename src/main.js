import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router.js';
import { createHead } from '@unhead/vue'

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { VApp, VLazy, VSheet, VIcon, VImg, VCard, VCardTitle, VCardText, VChip, VFooter, VDivider, VCol, VRow } from 'vuetify/components';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';
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
    VDivider,
    VSkeletonLoader,
    VCol,
    VRow
  },
  // directives,
  colors
})

const app = createApp(App)

const head = createHead()
app.use(head)

app.use(router)
app.use(vuetify)
app.mount('#app')
