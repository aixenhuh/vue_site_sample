import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index';
import { store } from './store/index'
import VueCookie from 'vue-cookie';

require('dotenv').config();

Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  router,
  store,
  VueCookie
}).$mount('#app')
