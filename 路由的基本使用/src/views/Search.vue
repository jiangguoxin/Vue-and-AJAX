<template>
  <div class="page-container">
    <div class="search-result-card">
      <!-- <p>搜索关键字: {{ $route.query.key}}</p> -->
      <!-- <p>搜索关键字: {{ $route.params.words}}</p>  -->
      <!-- <p>搜索关键字: {{ $route.query.key}}</p>  -->
      <!-- <p>搜索关键字: {{ $route.params.wordss}}</p>  -->
      <p>搜索关键字: {{ $route.params.words}}</p> 
      <p>搜索结果:</p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCard",
  created(){
    // 获取路由参数：this.$route.query.key
    // 查询参数获取：this.$route.query.key
    // 动态路由获取：this.$route.params.words}
  }
};
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
}

.search-result-card {
  width: 500px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.search-result-card p {
  margin: 0 0 10px 0;
  color: #333;
}

.search-result-card ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.search-result-card li {
  padding: 10px 0;
  border-bottom: 1px dashed #eee;
}

.search-result-card li:last-child {
  border-bottom: none;
}

.search-result-card li::before {
  content: "•";
  color: #999;
  margin-right: 8px;
}
</style>