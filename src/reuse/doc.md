## 复用

### mixin

可复用组件选项

可以将常用的组件选项提取出一个对象，通过 mixins:[] 传入

### minix 和组件中的选项有相同的话 选项的合并 规则

- 钩子：minix 的钩子先被调用，组件的钩子后被调用
- methods,components 中有相同的话 组件中的生效，mixin 中的忽略
- data: 组件中的生效，mixin 中的忽略
