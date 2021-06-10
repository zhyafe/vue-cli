<template>
  <div>
    <h3>组件</h3>
    <Props :listData="listData" :notProps="listData" />
    <p>------------</p>
    <CustomEvent v-bind:count="count" @on-setcount="setCount" />
    <p>----------</p>
    <CustomModel />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import utils from "../utils";
import Props from "./Props.vue";
import CustomEvent from "./CustomEvent.vue";
import CustomModel from "./CustomModel.vue";
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
    CustomModel,
  },

  methods: {
    setCount: function(count) {
      this.count = count;
    },
  },
};
</script>

<style></style>
