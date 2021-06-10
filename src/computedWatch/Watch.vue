<template>
  <div>
    <p>监听器</p>
    <input type="text" v-model="inputText" />
    <p v-for="item in listData" v-bind:key="item.id">{{ item.title }}</p>
  </div>
</template>

<script>
import Mock from "mockjs";

let data = {
  getList: () => {
    return Mock.mock({
      "list|10": [{ id: "@id", title: "@ctitle" }],
    });
  },
};

export default {
  data() {
    return {
      inputText: "",
      listData: [1, 3],
    };
  },
  watch: {
    inputText(value) {
      this.getData(value);
    },
  },
  methods: {
    async getData(value) {
      console.log(value);
      this.listData = data.getList().list;
    },
  },
};
</script>

<style></style>
