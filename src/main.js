import Vue from 'vue'
import {Lazyload} from 'vant'
import App from './App.vue'
import router from './router'
import Icon from 'vue-svg-icon/Icon.vue'

import '@/assets/styles/style.scss'

Vue.config.productionTip = false

Vue.use(Lazyload)
Vue.component('icon', Icon)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
