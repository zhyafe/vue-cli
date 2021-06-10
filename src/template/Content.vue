<template>
  <div>
    <h3>内容 text html</h3>
    <p v-text="text"></p>
    <div v-html="html"></div>
    <p>{{ text }}</p>
    <p>{{ html }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      text: "测试文本",
      html: "<p>html内容</p>",
    };
  },
};
</script>

<style></style>
