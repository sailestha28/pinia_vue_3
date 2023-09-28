import { createApp } from 'vue';
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives
});

import router from './router'
import store from './store/store'
import App from './App.vue'


// tailwind css
import './assets/styles/css/tailwind.css'
import './assets/styles/scss/vuetify-custom.scss';
import './assets/styles/scss/v-select-custom.scss';
import './assets/styles/scss/v-text-field-custom.scss';
import './assets/styles/scss/vue-date-picker-custom.scss';

const app = createApp(App);

app.use(router).use(vuetify).use(store).use(createPinia()).mount('#app')
