<template>
  <div>
    <p>class</p>
    <p class="defaultClass">defaultClass</p>
    <p :class="dataClass">dataClass</p>
    <button v-on:click="onChangeClass">chang class</button>
  </div>
</template>

<script>
export default {
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
    onChangeClass: function() {
      this.dataClass = "darkClass";
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
