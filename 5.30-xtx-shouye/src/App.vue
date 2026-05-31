<template>
  <div class="App">
    <!-- 快捷链接 -->
    <XtxShortCut></XtxShortCut>
    <!-- 顶部导航 -->
    <XtxHeaderNav></XtxHeaderNav>
    <!-- 轮播区域 -->
    <XtxBanner></XtxBanner>
    <!-- 新鲜好物 -->
    <XtxNewGoods></XtxNewGoods>
    <!-- 热门品牌 -->
    <XtxHotBrand></XtxHotBrand>
    <!-- 最新专题 -->
    <XtxTopic></XtxTopic>
    <!-- 版权底部 -->
    <XtxFooter></XtxFooter>
  </div>
</template>

<script>
import JiangXtxShortCut from './components/JiangXtxShortCut.vue';
import JiangXtxHeaderNav from './components/JiangXtxHeaderNav.vue';
import JiangXtxBanner from './components/JiangXtxBanner.vue';
import JiangXtxNewGoods from './components/JiangXtxNewGoods.vue';
import JiangXtxHotBrand from './components/JiangXtxHotBrand.vue';
import JiangXtxTopic from './components/JiangXtxTopic.vue';
import JiangXtxFooter from './components/JiangXtxFooter.vue';
export default {
  components: {
    XtxShortCut: JiangXtxShortCut,
    XtxHeaderNav: JiangXtxHeaderNav,
    XtxBanner: JiangXtxBanner,
    XtxNewGoods: JiangXtxNewGoods,
    XtxHotBrand: JiangXtxHotBrand,
    XtxTopic: JiangXtxTopic,
    XtxFooter: JiangXtxFooter
  }
}
</script>

<style>

</style>