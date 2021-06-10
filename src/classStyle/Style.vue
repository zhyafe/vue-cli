<template>
  <div>
    <p>style</p>
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
