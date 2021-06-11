<template>
  <div>
    <h3>复用</h3>
    <!-- <MixinReuse /> -->
    <!-- <CustomDirective /> -->
    <FilterFormat />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import utils from "../utils";
import MixinReuse from "./MixinReuse.vue";
import CustomDirective from "./CustomDirective.vue";
import FilterFormat from "./FilterFormat.vue";
export default {
  data: function() {
    return {
      listData: utils.getList(),
    };
  },
  components: {
    MixinReuse,
    CustomDirective,
    FilterFormat,
  },

  methods: {},
};
</script>

<style></style>
