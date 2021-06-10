<template>
  <div>
    <h3>组件</h3>
    <Props :listData="listData" />
    <!-- <Style /> -->
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import utils from "../utils";
import Props from "./Props.vue";
// import Style from "./Style.vue";
export default {
  data: function() {
    return {
      listData: utils.getList(),
    };
  },
  components: {
    Props,
    // Style,
  },
};
</script>

<style></style>
