<template>
  <div class="page-container">
    <div class="search-card">
      <div class="logo-area">
        <div class="logo">
          <span>HM</span>
        </div>
        <span class="logo-text">黑马程序员</span>
      </div>
      <div class="search-box">
        <input type="text" placeholder="输入搜索内容..." class="search-input" />
        <button class="search-btn">搜索一下</button>
      </div>
      <div class="hot-search">
        <span>热门搜索:</span>
        <!-- <router-link to="/search?key=黑马程序员">黑马程序员</router-link>
        <router-link to="/search?key=前端培训">前端培训</router-link>
        <router-link to="/search?key=如何成为前端大牛">如何成为前端大牛</router-link> -->
        <router-link to="/search/黑马程序员">黑马程序员</router-link>
        <router-link to="/search/前端培训">前端培训</router-link>
        <router-link to="/search/如何成为前端大牛">如何成为前端大牛</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexHome'
}
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  padding: 20px;
}

.search-card {
  width: 500px;
  background-color: #fff;
  padding: 30px;
  border: 1px solid #e4e4e4;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  text-align: center;
}

.logo-area {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
}

.logo {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.logo span {
  font-size: 12px;
  font-weight: bold;
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  letter-spacing: 2px;
}

.search-box {
  display: flex;
  height: 40px;
  margin-bottom: 15px;
}

.search-input {
  flex: 1;
  padding: 0 15px;
  border: 2px solid #ad2a26;
  border-right: none;
  border-radius: 2px 0 0 2px;
  outline: none;
  font-size: 14px;
}

.search-btn {
  width: 100px;
  background-color: #ad2a26;
  color: #fff;
  border: none;
  border-radius: 0 2px 2px 0;
  cursor: pointer;
  font-size: 14px;
}

.search-btn:hover {
  background-color: #92211e;
}

.hot-search {
  text-align: left;
  font-size: 13px;
  color: #666;
}

.hot-search span {
  font-weight: bold;
  margin-right: 10px;
}

.hot-search a {
  color: #666;
  text-decoration: none;
  margin-right: 12px;
}

.hot-search a:hover {
  color: #ad2a26;
  text-decoration: underline;
}
</style>