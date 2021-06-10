<template>
  <div id="app">
    <!-- <HelloWorld msg="props data"/> -->
    <!-- <Statement /> -->
    <Template />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Template from "./template/Index";

export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
    Template,
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
