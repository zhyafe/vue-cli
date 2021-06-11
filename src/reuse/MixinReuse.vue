<template>
  <div>
    <h3>mixin混入复用</h3>
    <button @click="add">调用add</button>
    <button @click="del">调用del</button>
    <button @click="getName">调用getName</button>
  </div>
</template>

<script>
import config from "./commonConfig";
export default {
  mixins: [config],
  data() {
    return {
      name: "组件 name",
    };
  },
  methods: {
    add() {
      console.log("组件：add");
    },
    getName() {
      console.log(this.age);
    },
  },
  mounted() {
    console.log("组件mounted");
  },
};
</script>

<style></style>
