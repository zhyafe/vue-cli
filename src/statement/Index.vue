<template>
  <div>
    <p>流程语句</p>
    <p>------------</p>
    <IfElse />
    <p>------------</p>
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
