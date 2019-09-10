import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const vuexStudy = resolve => require(['@/components/vuexStudy.vue'], resolve)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: 'vuexStudy',
      name: '测试',
      component: vuexStudy
    }
  ]
})
