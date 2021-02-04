import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css';
import http from '../http'
import {Toast} from 'vant'
// import { prototype } from 'vue/types/umd'
Vue.prototype.$http = http
Vue.prototype.$msg=Toast
Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
