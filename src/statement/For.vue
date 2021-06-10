<template>
  <div>
    <h3>for 循环语句</h3>
    <div v-for="item in data" v-bind:key="item.id" v-on:click="onClickItem">
      {{ item.name }}
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
      data: data.listData,
    };
  },

  methods: {
    onClickItem: function(a) {
      console.log("sss", a);
    },
  },
};
</script>

<style></style>
