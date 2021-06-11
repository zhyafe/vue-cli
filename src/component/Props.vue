<template>
  <div>
    <p>获取props属性和非props属性</p>
  </div>
</template>

<script>
export default {
  props: ["listData"],
  data() {
    return {};
  },
  mounted() {
    console.log("props-data", this.listData, this, this.$attrs.notProps);
  },
};
</script>

<style>
.defaultClass {
  color: #666;
}
.darkClass {
  color: #000;
}
</style>
