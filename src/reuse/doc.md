## 复用

### mixin

> 组件选项的复用

- 全局混入：Vue.mixin api
- 局部混入：可以将常用的组件选项提取出一个对象，通过 mixins:[] 传入

### minix 和组件中的选项有相同的话 选项的合并 规则

- 钩子：minix 的钩子先被调用，组件的钩子后被调用
- methods,components, directives 中有相同的话 组件中的生效，mixin 中的忽略
- data: 组件中的生效，mixin 中的忽略

### 自定义指令

> 对 dom 进行底层操作

1. 自定义全局指令 Vue.directive api 进行定义 钩子
2. 自定义局部指令 组件配置项进行指令配置钩子

```js
{
  directives: {
    demo: {
      inserted(el) {
        el.focus()
      },
    },
  }
}
```

### 自定义指令钩子及参数

1. 钩子

   - bind
   - inserted
   - update
   - componentUpdate
   - unbind

2. 参数

   - el
   - binding
   - vnode
   - oldVnode

### 插件

> 添加全局功能

1. 全局的方法，属性
2. 添加 Vue 实例方法，Vue.prototype 上实现
3. 全局的资源：指令、过滤器，过渡
4. 全局混入

使用插件 Vue.use(plugin)
