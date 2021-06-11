<template>
  <div>
    <p>自定义事件 model：{{ demo }}</p>
    <input
      v-bind:value="valuea"
      v-on:input="valuea = $event.target.value"
    /><br />
    <button @click="aa">更新model</button>
    <!-- v-model -->
  </div>
</template>

<script>
export default {
  props: ["demo"],
  model: {
    event: "setdemo",
    prop: "demo",
  },
  data: function() {
    return {
      dataClass: "defaultClass",
      unitPrice: 2,
      valuea: "22",
    };
  },
  computed: {
    total: function() {
      return this.count * this.unitPrice;
    },
  },
  methods: {
    aa: function() {
      console.log("v-model实质", this.valuea);
      this.$emit("setdemo", Date.now());
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
