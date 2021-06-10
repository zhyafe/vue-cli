<template>
  <div>
    <h3>if else 条件语句</h3>
    <div v-if="flag == 1">flag 1:{{ flag }}</div>
    <div v-else-if="flag == 2">flag 2:{{ flag }}</div>
    <div v-else>flag other:{{ flag }}</div>
    <button v-on:click="onClick">flag1</button>
    <button v-on:click="onClick2">flag2</button>
    <button v-on:click="onClick3">other</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      flag: true,
    };
  },
  methods: {
    onClick: function() {
      this.flag = 1;
    },
    onClick2: function() {
      this.flag = 2;
    },
    onClick3: function() {
      this.flag = 0;
    },
  },
};
</script>

<style scoped></style>
