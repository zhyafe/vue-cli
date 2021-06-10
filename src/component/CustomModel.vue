<template>
  <div>
    <p>自定义事件 count：{{ count }}</p>
    <button @click="onClickBtn">更新count</button>
  </div>
</template>

<script>
export default {
  props: ["count"],
  data: function() {
    return {
      dataClass: "defaultClass",
      unitPrice: 2,
    };
  },
  computed: {
    total: function() {
      return this.count * this.unitPrice;
    },
  },
  methods: {
    onClickBtn: function() {
      this.$emit("on-setcount", Date.now());
    },
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
