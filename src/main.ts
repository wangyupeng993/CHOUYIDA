import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './customize/index'
import './assets/css/index.css'
import './ElementUI'
import './permission'
import './pixclPatio'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
