<template>
  <div>
    <p>计算属性: price:{{ count }} unitPrice:{{ unitPrice }}</p>
    <p>总价:{{ total }}</p>
    <button @click="onChangePrice">切换价格</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      count: 22,
      unitPrice: 2,
    };
  },
  computed: {
    total: function() {
      return this.count * this.unitPrice;
    },
  },
  methods: {
    onChangePrice: function() {
      this.unitPrice = Math.floor(Math.random() * 10);
    },
  },
};
</script>

<style></style>
