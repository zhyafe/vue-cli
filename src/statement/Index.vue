<template>
  <div>
    <h2>流程语句</h2>
    <IfElse />
    <For />
  </div>
</template>

<script>
import IfElse from "./IfElse";
import For from "./For";
export default {
  name: "Statement",
  components: {
    IfElse,
    For,
  },
};
</script>

<style></style>
