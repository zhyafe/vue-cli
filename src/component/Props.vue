<template>
  <div>
    <p>class</p>
  </div>
</template>

<script>
export default {
  props: ["listData"],
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

  mounted() {
    console.log("data", this.listData, this, this.$attrs.notProps);
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
