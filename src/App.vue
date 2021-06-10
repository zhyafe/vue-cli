<template>
  <div id="app">
    <!-- <HelloWorld msg="props data"/> -->
    <!-- <Statement /> -->
    <!-- <Template /> -->
    <!-- <ComputedWatch /> -->
    <ClassStyle />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import HelloWorld from "./components/HelloWorld";
import Template from "./template/Index";
import ComputedWatch from "./computedWatch/Index";
import ClassStyle from "./classStyle/Index";

export default {
  name: "App",
  components: {
    HelloWorld,
    Template,
    ComputedWatch,
    ClassStyle,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
