import Vue from 'vue'
import App from './App.vue'
import router from './router'      //在这里挂载/router/index.js中的router
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
