<template>
  <div>
    <h3>计算属性 监听器</h3>
    <Computed />
    <p>-----------------------------------</p>
    <Watch />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Computed from "./Computed.vue";
import Watch from "./Watch.vue";
export default {
  components: {
    Computed,
    Watch,
  },
};
</script>

<style></style>
