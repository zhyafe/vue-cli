## 过渡动画

> 插入，更新，移除 dom 时提供过度效果

1. 使用 transition 组件包裹进行动画的组件
2. 通过属性 name 设置过渡类名 默认是 'v'
3. 在 style 进行过渡类的具体实现

### 过渡类名

- v-enter
- v-enter-active
- v-enter-to
- v-leave
- v-leave-active
- v-leave-to

### 自定义过渡类名

可以在 transition 中设置 属性来修改过渡类名
