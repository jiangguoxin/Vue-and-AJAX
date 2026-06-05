<template>
  <div class="page">
    <section class="case case-color">
      <h1 class="title">案例一：自定义指令 - 颜色</h1>

      <input v-focus class="search-input" type="text" />

      <div v-color="color1" class="color-block color-red">11111</div>
      <div v-color="color2" class="color-block color-green">22222</div>
    </section>

    <section class="case case-loading">
      <h2 class="subtitle">案例二：自定义指令 - v-loading</h2>

      <div class="loading-layout">
        <div class="loading-demo">
          <div class="loading-box">
            <div class="loading-spinner">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="article-card" v-loading="isLoading">
            <div class="article-line short"></div>
            <div class="article-line"></div>
            <div class="article-line"></div>
            <div class="article-line"></div>
            <div class="article-line"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      color1: 'red',
      color2: 'green',
      list:[],
      isLoading: true
    };
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
    color: {
      inserted(el, binding) {
        el.style.color = binding.value;
      },
      update(el, binding) {
        el.style.color = binding.value;
      },
    },
    loading: {
      inserted(el, binding) {
        binding.value ? el.classList.add('loading') : el.classList.remove('loading')
      },
      update(el, binding) {
        binding.value ? el.classList.add('loading') : el.classList.remove('loading')
      }
    }
  },


  // 案例二:
  async created(){
    this.isLoading = true;
    const res = await axios.get('http://hmajax.itheima.net/api/news')
    setTimeout(() => {
      this.list = res.data.data
      this.isLoading = false;
    }, 2000);
  }
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  padding: 24px 20px 40px;
  background: #fff;
  box-sizing: border-box;
}

.case {
  margin-bottom: 56px;
}

.case-loading {
  margin-bottom: 0;
}

.title {
  margin: 0 0 36px;
  font-size: 72px;
  line-height: 1;
  font-weight: 800;
  color: #111;
  letter-spacing: 1px;
}

.subtitle {
  margin: 0 0 24px;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 700;
  color: #b54f22;
}

.loading-layout {
  display: flex;
  align-items: flex-start;
  gap: 64px;
  flex-wrap: wrap;
}

.loading-copy {
  flex: 1 1 520px;
  min-width: 480px;
  color: #333;
}

.loading-copy h3 {
  margin: 0 0 12px;
  font-size: 26px;
  font-weight: 600;
  color: #222;
}

.loading-copy ol {
  margin: 0 0 34px;
  padding-left: 24px;
  font-size: 22px;
  line-height: 1.75;
}

.loading-copy li {
  margin-bottom: 6px;
}

.loading-demo {
  position: relative;
  flex: 0 0 430px;
  min-height: 360px;
}

.loading-box {
  width: 190px;
  height: 110px;
  margin: 28px 0 0 74px;
  border: 1px solid #e9ddb2;
  background: #fffef8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-spinner {
  display: grid;
  grid-template-columns: repeat(2, 16px);
  gap: 10px;
}

.loading-spinner span {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #d9eef3;
}

.loading-spinner span:nth-child(2) {
  background: #e9efc6;
}

.loading-spinner span:nth-child(3) {
  background: #c9e5f7;
}

.loading-spinner span:nth-child(4) {
  background: #f3eadf;
}

.search-input {
  display: block;
  width: 440px;
  height: 52px;
  margin: 0 0 28px;
  padding: 0 14px;
  border: 1px solid #8f8f8f;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  font-size: 18px;
}

.search-input:focus {
  border-color: #5f8cff;
  box-shadow: 0 0 0 3px rgba(95, 140, 255, 0.12);
}

.color-block {
  font-size: 88px;
  line-height: 1;
  font-weight: 500;
  margin-top: 24px;
}

.color-red {
  color: #eb1c15;
}

.color-green {
  color: #0e8f12;
}

.loading-panel {
  position: absolute;
  right: 36px;
  top: 26px;
  width: 360px;
  height: 300px;
  padding: 18px 18px 16px;
  background: #fff;
  box-sizing: border-box;
}

.article-card.loading::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.92);
}

.article-card.loading::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 64px;
  height: 64px;
  margin: -32px 0 0 -32px;
  border: 5px solid #ece4c6;
  border-top-color: #d5c189;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.article-line {
  height: 14px;
  margin-bottom: 16px;
  border-radius: 999px;
  background: linear-gradient(90deg, #d9d9d9, #efefef);
}

.article-line.short {
  width: 78%;
}

.article-line:nth-child(2) {
  width: 92%;
}

.article-line:nth-child(3) {
  width: 88%;
}

.article-line:nth-child(4) {
  width: 70%;
}

.article-line:nth-child(5) {
  width: 84%;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>