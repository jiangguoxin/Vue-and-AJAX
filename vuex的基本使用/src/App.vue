<template>
  <div class="app">
    <h1>{{ count }}</h1>
    <input type="text" :value="count" @input="handInput">
    <br><br>
    <button @click="handleAdd">数字 + 1</button>
    <h1>{{ title }}</h1>
    <sonBa></sonBa>
  </div>
</template>

<script>
import sonBa from '@/components/sonBa.vue'
import { mapState } from 'vuex'
export default {
  methods: {
    handleAdd () {
      this.$store.commit('addCount')
    },
    handInput (e) {
      // 实时获取输入框的值
      console.log(+e.target.value)
      // 提交mutation，调用mutation函数
      const num = +e.target.value
      this.$store.commit('changeCount', num)
    }
  },
  data () {
    return {
    }
  },
  created () {
    console.log(this.$store.state.count)
  },
  computed: {
    ...mapState(['count', 'title'])
  },
  components: {
    sonBa
  }
}
</script>

<style>
.app {
  color: blue;
}
</style>
