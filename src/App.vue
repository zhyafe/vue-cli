<template>
  <div id="app">
    <!-- <Template /> -->
    <!-- <ComputedWatch /> -->
    <!-- <ClassStyle /> -->
    <Components />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Template from "./template/Index";
import ComputedWatch from "./computedWatch/Index";
import ClassStyle from "./classStyle/Index";
import Components from "./component/Index";

export default {
  name: "App",
  components: {
    Template,
    ComputedWatch,
    ClassStyle,
    Components,
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
