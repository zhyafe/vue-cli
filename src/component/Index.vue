<template>
  <div>
    <h3>组件</h3>
    <!-- <Props :listData="listData" :notProps="listData" />
    <p>------------</p>
    <CustomEvent v-bind:count="count" @on-setcount="setCount" />
    <p>----------</p>
    <CustomModel v-model="demo" /><button @click="getCoustomModel">
      获取自定义model值
    </button>
    <p>----------</p>
    <SlotComponent>
      <p>xxxx</p>
      <template v-slot:header>header</template>
      <p>aaa</p>
    </SlotComponent> -->
    <DynamicAsync />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import utils from "../utils";
import Props from "./Props.vue";
import CustomEvent from "./CustomEvent.vue";
import CustomModel from "./CustomModel.vue";
import SlotComponent from "./Slot.vue";
import DynamicAsync from "./DynamicAsync.vue";
export default {
  data: function() {
    return {
      listData: utils.getList(),
      count: 23,
      demo: "xxx",
    };
  },
  components: {
    Props,
    CustomEvent,
    CustomModel,
    SlotComponent,
    DynamicAsync,
  },

  methods: {
    setCount: function(count) {
      this.count = count;
    },
    getCoustomModel() {
      console.log("cousomModel", this.demo);
    },
  },
};
</script>

<style></style>
