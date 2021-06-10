<template>
  <div>
    <p>template 模板语法</p>
    <Content />
    <Attribute />
    <Statement />
  </div>
</template>

<script>
import Content from "./Content.vue";
import Attribute from "./Attribute.vue";
import Statement from "./Statement.vue";
export default {
  components: {
    Content,
    Attribute,
    Statement,
  },
};
</script>

<style></style>
