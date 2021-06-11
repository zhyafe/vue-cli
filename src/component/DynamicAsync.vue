<template>
  <div>
    <h3>动态组件 异步组件</h3>
    <keep-alive>
      <component :is="getComonent"></component>
    </keep-alive>
    <button @click="changeComps">修改动态组件</button>
  </div>
</template>

<script>
import DynamicA from "./views/DynamicA.vue";
import DynamicB from "./views/DynamicB.vue";
export default {
  data() {
    return {
      comArr: ["DynamicA", "DynamicB"],
      comIndex: 0,
    };
  },
  components: {
    DynamicA,
    DynamicB,
  },
  computed: {
    getComonent() {
      return this.comArr[this.comIndex];
    },
  },
  methods: {
    changeComps() {
      this.comIndex = this.comIndex ? 0 : 1;
    },
  },
};
</script>

<style></style>
