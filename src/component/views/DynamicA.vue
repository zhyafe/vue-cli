<template>
  <div>
    <p v-on:click="addCount">dynamicA count:{{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount() {
      this.count++;
    },
  },
};
</script>

<style></style>
