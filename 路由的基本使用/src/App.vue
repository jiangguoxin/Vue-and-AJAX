<template>
  <div id="app">
    <!-- <div class="link">
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/friend">朋友</router-link>
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/home">首页</router-link>
      <router-link to="/search">搜索页</router-link>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

#app {
  width: 100%;
}

.link {
  height: 50px;
  line-height: 50px;
  background-color: #495150;
  display: flex;
}

.link a {
  flex: 1;
  text-align: center;
  color: white;
  text-decoration: none;
}

.link .router-link-active {
  background-color: #8b4513;
}
</style>