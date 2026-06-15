import Vue from 'vue'
import App from './App.vue'

import router from './router/index.js'
Vue.config.productionTip = false

//两个核心步骤：
// 1.建组件，配规则
// 2.准备导航链接，配置路由出口
new Vue({
  render: h => h(App),
  router,
  mode:'history'
}).$mount('#app')


