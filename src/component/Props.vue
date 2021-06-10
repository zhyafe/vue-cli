<template>
  <div>
    <p>props</p>
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
