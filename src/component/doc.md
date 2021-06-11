## props

1. 父组件：参数传递通过属性传递
2. 字组件：获取参数，定义 props
   - 为数组：数组里为父组件传入时的属性值
   - 为对象：可设置数据类型
   - 为对象，属性值也是对象：可设置数据类型，和默认值

### 非 props 的属性获取

可以在 `this.$attrs` 中获取到

### 自定义事件

1. 无区分大小写，最好使用中横线命名, 因为驼峰会自动转成中横线
2. 子组件调用父组件传入的自定义事件 this.\$emit(时间名,参数)
3. 父组件定义事件属性，实现函数调用获取参数

### 自定义 model

v-model 是 v-bind 和 v-on 配合使用的语法糖；

1. 在组件中定义 model, 注意 model 中的 prop 没有 's'

```js
  props: ["demo"],
  model: {
    event: "setdemo",
    prop: "demo",
  },
```

2. 设置 props 接收属性
3. 在组件内触发事件 `this.$emit("setdemo", Date.now());` 更新值
