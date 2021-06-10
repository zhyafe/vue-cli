<template>
  <div>
    <h3>流程语句</h3>
    <div>
      <h4>if else 条件语句</h4>
      <div v-if="flag == 1">flag 1:{{ flag }}</div>
      <div v-else-if="flag == 2">flag 2:{{ flag }}</div>
      <div v-else>flag other:{{ flag }}</div>
      <button v-on:click="onClick">flag1</button>
      <button v-on:click="onClick2">flag2</button>
      <button v-on:click="onClick3">other</button>
    </div>
    <div>
      <h4>for 循环语句</h4>
      <div v-for="item in data" v-bind:key="item.id" v-on:click="onClickItem">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import Mock from "mockjs";

let data = Mock.mock({
  "listData|10": [{ name: "@ctitle", "age|10-20": 12, id: "@id" }],
});

export default {
  data: function() {
    return {
      flag: true,
      data: data.listData,
    };
  },
  methods: {
    onClick: function() {
      this.flag = 1;
    },
    onClick2: function() {
      this.flag = 2;
    },
    onClick3: function() {
      this.flag = 0;
    },

    onClickItem: function(a) {
      console.log("sss", a);
    },
  },
};
</script>

<style></style>
