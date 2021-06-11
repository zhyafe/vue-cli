## 组件

- 代码复用

### props

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

### 插槽 slot

插槽实现内容分发的 api;

1. 默认使用
   - 在组件内添加`<slot></slot>`
   - 父组件中添加的内容会替代 slot
2. 添加默认显示：可以在<slot>默认值</slot>内写默认值，父组件不传值时显示
3. 具名插槽
   - 在字组件中 <slot name:header>default</slot>
   - 在父组件中是使用 template 标签包括内容，template 标签加 v-slot:header 属性指定插槽

### 动态组件

1. <component :is="">
2. :is 的值取自 data; 要定义 data
3. 可通过计算属性获取组件名
4. 如果要保留组件的状态，可以用 <keep-alive></keep-alive>包裹动态组件

### 异步组件

优化选项：用到组件时再从服务器加载
