<template>
  <div class="app">
    <!-- 头部组件 -->
    <JiangHeader></JiangHeader>
    <!-- 主体组件 -->
    <JiangMain></JiangMain>
    <!-- 底部组件 -->
    <JiangFooter></JiangFooter>
  </div>
</template>

<script>
import JiangHeader from './components/JiangHeader.vue';
import JiangMain from './components/JiangMain.vue';
import JiangFooter from './components/JiangFooter.vue';
export default {
  components:{
    JiangHeader,
    JiangMain,
    JiangFooter,
  }
}
</script>

<style>
.app {
  width: 600px;
  background-color: #f5f5f5;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
}
</style>