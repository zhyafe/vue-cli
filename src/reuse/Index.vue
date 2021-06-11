<template>
  <div>
    <h3>复用</h3>
    <!-- <MixinReuse /> -->
    <CustomDirective />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import utils from "../utils";
import MixinReuse from "./MixinReuse.vue";
import CustomDirective from "./CustomDirective.vue";
export default {
  data: function() {
    return {
      listData: utils.getList(),
    };
  },
  components: {
    MixinReuse,
    CustomDirective,
  },

  methods: {},
};
</script>

<style></style>
