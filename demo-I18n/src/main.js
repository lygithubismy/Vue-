// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueI18n from 'vue-i18n'
import i18n from './i18n/i18n'

import store from '@/vuex/store'

import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false
// Vue.use(VueI18n)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  i18n,
  store  //全局注册vuex
})
