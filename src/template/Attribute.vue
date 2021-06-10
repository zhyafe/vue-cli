<template>
  <div>
    <h3>属性 v-bind 或 :</h3>
    <p :class="theme" @click="changTheme">修改class</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      theme: "light",
    };
  },
  methods: {
    changTheme: function() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
  },
};
</script>

<style>
.light {
  background: #fff;
  color: #666;
}
.dark {
  background: #666;
  color: #fff;
}
</style>
