<template>
  <div>
    <h3>transition,animate</h3>
    <TransitionComp />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
// eslint-disable-next-line no-unused-vars
import utils from "../utils";
import TransitionComp from "./TransitionComp.vue";
export default {
  data: function() {
    return {
      flag: true,
    };
  },
  components: {
    TransitionComp,
  },

  methods: {},
};
</script>

<style></style>
