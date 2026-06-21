<template>
  <div class="div">
    <p>{{ count }}</p>
    <p>{{ title }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['count', 'title'])
  }
}
</script>

<style>
.div {
    width: 100px;
    height: 100px;
    background-color: skyblue;
}
</style>
