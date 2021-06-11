<template>
  <div>
    <h3>自定义指令</h3>
    <input type="text" v-demo />
  </div>
</template>

<script>
import Vue from "vue";

// 全局指令
Vue.directive("focus", {
  inserted(el) {
    el.focus();
  },
});
export default {
  // 局部指令
  directives: {
    demo: {
      inserted(el, binding, vnoe, oldVnode) {
        el.focus();
        console.log("arg", el, binding, vnoe, oldVnode);
      },
    },
  },
};
</script>

<style></style>
