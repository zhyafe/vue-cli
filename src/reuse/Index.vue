<template>
  <div>
    <h3>复用</h3>
    <MixinReuse />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import utils from "../utils";
import MixinReuse from "./MixinReuse.vue";
export default {
  data: function() {
    return {
      listData: utils.getList(),
    };
  },
  components: {
    MixinReuse,
  },

  methods: {},
};
</script>

<style></style>
