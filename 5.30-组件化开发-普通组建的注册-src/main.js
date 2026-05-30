// 文件核心作用：导入APP.vue，基于APP.vue创建结构渲染index.html
import Vue from 'vue'
import App from './App.vue'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
