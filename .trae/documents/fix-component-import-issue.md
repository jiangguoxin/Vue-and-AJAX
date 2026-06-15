# 修复组件导入问题

## 问题总结

`App.vue` 中导入了 `search` 组件，但**未在 `components` 选项中注册**，导致 `<search>` 标签无法渲染。

## 当前状态分析

**`App.vue` 当前代码：**
```js
import search from "@/components/search.vue";
// 缺少 export default 和 components 注册
```

在 Vue 2 中，仅 `import` 组件是不够的，必须在 `components` 选项中显式注册才能在模板中使用。

## 修复方案

### 修改文件：`src/App.vue`

将 `<script>` 部分改为：

```js
import search from "@/components/search.vue";

export default {
  components: {
    search
  }
}
```

## 验证步骤

1. 启动开发服务器，确认页面无 Vue 警告
2. 确认 `<search>` 组件正常渲染（搜索框、logo、热门搜索等内容可见）
3. 确认路由切换功能正常
