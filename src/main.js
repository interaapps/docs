import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import store from './store'

import { checkUser } from "interaappswebsite/src/auth";
checkUser(store)
require('interaappswebsite/src/assets/css/app.scss')
require('./assets/scss/app.scss')
console.log(store);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
