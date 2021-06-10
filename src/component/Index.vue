<template>
  <div>
    <h3>组件</h3>
    <Props :listData="listData" :notProps="listData" />
    <p>------------</p>
    <CustomEvent v-bind:count="count" @on-setcount="setCount" />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import utils from "../utils";
import Props from "./Props.vue";
import CustomEvent from "./CustomEvent.vue";
export default {
  data: function() {
    return {
      listData: utils.getList(),
      count: 23,
    };
  },
  components: {
    Props,
    CustomEvent,
  },

  methods: {
    setCount: function(count) {
      this.count = count;
    },
  },
};
</script>

<style></style>
