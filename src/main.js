import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/custom.scss'
import './assets/scss/style.scss'
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
