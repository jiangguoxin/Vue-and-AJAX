// 文件核心作用：导入APP.vue，基于APP.vue创建结构渲染index.html
import Vue from 'vue'
import App from './App.vue'
import JiangButton from './components/JiangButton.vue'
Vue.config.productionTip = false


// 进行全局注册
Vue.component('JiangButton',JiangButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
