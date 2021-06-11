<template>
  <div>
    <p>transition</p>
    <transition name="fade">
      <p v-if="flag">fade</p>
    </transition>
    <button @click="changShow">显示/隐藏</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
    };
  },
  methods: {
    changShow() {
      this.flag = !this.flag;
    },
  },
  mounted() {
    console.log("munted");
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
