<template>
  <div>
    <h3>插槽slot</h3>
    <p>header插槽:</p>
    <slot name="header">header插槽显示默认内容</slot>
    <p>默认插槽:</p>
    <slot>默认插槽显示默认内容</slot>
    <p>footer插槽:</p>
    <slot name="footer">footer插槽显示默认内容</slot>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {},
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
