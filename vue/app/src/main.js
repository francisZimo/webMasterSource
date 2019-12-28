import Vue from 'vue'
import App from './App.vue'
import {ROUTERS} from './router/index'
import VueRouter from 'vue-router'
import BusDemo1 from './components/01/Bus.js'
Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.prototype.$BusDemo1=new BusDemo1()

const router=new VueRouter(ROUTERS)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
