<template>
  <div>
    <h3>过滤器：文本格式</h3>
    <p>变大写：{{ data | upperCase }}</p>
    <p>加后缀：{{ data | addPostfix }}</p>
    <p :title="data | upperCase">ddd</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "aaaaa",
    };
  },
  filters: {
    upperCase(val) {
      return val.toUpperCase();
    },
    addPostfix(val) {
      return val + "postfix";
    },
  },
};
</script>

<style></style>
