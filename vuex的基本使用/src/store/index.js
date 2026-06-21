import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 获取store
// 1.this.$store
// 2.import 导入 store

// 空仓库
// 创建仓库
export default new Vuex.Store({
  // 严格模式
  strict: true,
  state: {
    title: '大标题',
    count: 100
  },
  getters: {
  },
  mutations: {
    // vuex同样遵循单项数据流，组件中不能直接修改仓库的数据
    addCount (state) {
      state.count += 1
    },
    changeCount (state, newCount) {
      state.count = newCount
    }
  },
  actions: {
  },
  modules: {
  }
})
