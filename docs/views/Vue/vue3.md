---
title: vue3 基础篇
date: 2022-2-11
categories:
  - Vue
---

## 一、基础Api
### 1、响应式Api
#### reactive
```typescript
// 
reactive 将解包所有深层的 refs，同时维持 ref 的响应性。
返回响应是对象
const count = ref(1)
const obj = reactive({ count })

// ref 会被解包
console.log(obj.count === count.value) // true

// 它会更新 `obj.count`
count.value++
console.log(count.value) // 2
console.log(obj.count) // 2

// 它也会更新 `count` ref
obj.count++
console.log(obj.count) // 3
console.log(count.value) // 3
```
#### readonly
```typescript
//reactive 一样，如果任何 property 使用了 ref，当它通过代理访问时，则被自动解包：	
const raw = {
  count: ref(123)
}

const copy = readonly(raw)

console.log(raw.count.value) // 123
console.log(copy.count) // 123
```
#### 响应式Api的判断

- isRef: 检查一个值是否为一个 ref 对象
- isReactive: 检查一个对象是否是由 reactive 创建的响应式，如果该代理是 readonly 创建建的，但包裹了由 reactive 创建的另一个代理，它也会返回 true
- isReadonly: 检查一个对象是否是由 readonly 创建的只读代理
- isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理
### 2、Refs Apl 集合
#### ref
```typescript
const count = ref(0)
console.log(count.value) // 0
count.value++
console.log(count.value) // 1
```
#### toRef/toRefs
```javascript

// toRef 解构reactive响应式某个属性成员
const state = reactive({a:1,b:2})


const bRef = toRef(state,'b')

bRef.value++
console.log(state.foo) // 3

state.b++
console.log(bRef.value) // 4


// toRefs 解构reactive成员转成ref     
const state = reactive({
  a: 1,
  b: 2
})

const stateAsRefs = toRefs(state)

state.b++
console.log(stateAsRefs.foo.value) // 3

stateAsRefs.foo.value++
console.log(state.foo) // 4

```
#### toRaw / markRaw

- toRaw： 
   - 作用：将一个由reactive生成的**响应式对象**转为**普通对象**。
   - 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。
- markRaw： 
   - 作用：标记一个对象，使其永远不会再成为响应式对象。
   - 应用场景: 
      1. 有些值不应被设置为响应式的，例如复杂的第三方类库等。
      1. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。
### 3、computed/watch
#### computed 
```javascript
const count = ref(0)
const countTitle = computed(()=> count.value + 1)

```
#### watch 
```javascript
//---->监听单个
const num = ref('')

watch(num, (newValues, prevValues) => {
  console.log(newValues, prevValues)
})

//---->监听多个数据


const firstName = ref('')
const lastName = ref('')

watch([firstName, lastName], (newValues, prevValues) => {
  console.log(newValues, prevValues)
})

firstName.value = 'John' // logs: ["John", ""] ["", ""]
lastName.value = 'Smith' // logs: ["John", "Smith"] ["John", ""]

//--->监听响应式对象

const state = reactive({ 
  id: 1,
  attributes: { 
    name: '',
  }
})

watch(
  () => state,
  (state, prevState) => {
    console.log('deep', state.attributes.name, prevState.attributes.name)
  },
  { deep: true }
)

```
## 二、组件通信  

- props  ✅
- $emit  ✅
- v-model  ✅
- provide/inject ✅ 
- vuex/pinia  ✅
- $attrs
- expose/ref  ✅
### 1、v-model
```typescript
// Parent.vue
<child v-model:key="key" v-model:value="value"></child>
<script setup>
    import child from "./child.vue"
    import { ref, reactive } from "vue"
    const key = ref("1111")
    const value = ref("2222")
</script>

// Child.vue
<template>
    <button @click="handlerClick">按钮</button>
</template>
<script setup>
    
    // 方法一  不适用于 Vue3.2版本，该版本 useContext()已废弃
    import { useContext } from "vue"
    const { emit } = useContext()
    
    // 方法二 适用于 Vue3.2版本，不需要引入
    // import { defineEmits } from "vue"
    const emit = defineEmits(["key","value"])
    
    // 用法
    const handlerClick = () => {
        emit("update:key", "新的key")
        emit("update:value", "新的value")
    }
</script>

```
### 2、arrts
```typescript
// Parent.vue 传送
<child :msg1="msg1" :msg2="msg2" title="3333"></child>
<script setup>
    import child from "./child.vue"
    import { ref, reactive } from "vue"
    const msg1 = ref("1111")
    const msg2 = ref("2222")
</script>

// Child.vue 接收
<script setup>
    import { defineProps, useContext, useAttrs } from "vue"
    // 3.2版本不需要引入 defineProps，直接用
    const props = defineProps({
        msg1: String
    })
    // 方法一 不适用于 Vue3.2版本，该版本 useContext()已废弃
    const ctx = useContext()
    // 如果没有用 props 接收 msg1 的话就是 { msg1: "1111", msg2:"2222", title: "3333" }
    console.log(ctx.attrs) // { msg2:"2222", title: "3333" }
    
    // 方法二 适用于 Vue3.2版本
    const attrs = useAttrs()
    console.log(attrs) // { msg2:"2222", title: "3333" }
</script>
```
### 3、provide/inject
⚠️绑定不具有响应式、可以传响应式对象、业务组件不推荐使用
provide：可以让我们指定想要提供给后代组件的数据或
inject：在任何后代组件中接收想要添加在这个组件上的数据，不管组件嵌套多深都可以直接拿来用
```typescript
// Parent.vue
<script setup>
    import { provide } from "vue"
    provide("name", "沐华")
</script>

// Child.vue
<script setup>
    import { inject } from "vue"
    const name = inject("name")
    console.log(name) // 沐华
</script>

```
### 4、expose/ref
父组件获取子组件的属性或者调用子组件方法
```typescript
// Child.vue
<script setup>
    // 方法一 不适用于Vue3.2版本，该版本 useContext()已废弃
    import { useContext } from "vue"
    const ctx = useContext()
    // 对外暴露属性方法等都可以
    ctx.expose({
        childName: "这是子组件的属性",
        someMethod(){
            console.log("这是子组件的方法")
        }
    })
    
    // 方法二 适用于Vue3.2版本, 不需要引入
    // import { defineExpose } from "vue"
    defineExpose({
        childName: "这是子组件的属性",
        someMethod(){
            console.log("这是子组件的方法")
        }
    })
</script>

// Parent.vue  注意 ref="comp"
<template>
    <child ref="comp"></child>
    <button @click="handlerClick">按钮</button>
</template>
<script setup>
    import child from "./child.vue"
    import { ref } from "vue"
    const comp = ref(null)
    const handlerClick = () => {
        console.log(comp.value.childName) // 获取子组件对外暴露的属性
        comp.value.someMethod() // 调用子组件对外暴露的方法
    }
</script>

```
## 三、 compostion Api
### setup
#### callback 参数

- props 组件传入的参数
- context  执行上下文 arrts、slot、emit， 可以理解为相当于vue2当中this用途
#### 编码规范
```javascript

import {	defineComponnent, getcurrentInstance } from 'vue'

// 1、代码块组件
import Message from '@/components/Messages'

// 2、hooks代码块
import tableBox from '@/hooks/tableBox'

// 3、代码块插件
import lodash from 'lodash'

// 4 获取全局方法
const { proxy:{ $api, $wxCache } } = getcurrentInstance()

export default defineComponent({
	name: 'vite',
  components:{
  	Message,
  }
  setup(props,	context){
  	
  	// 数据状态
 		const state = reactive({name:'' ,count: '' })
    
    
    // 逻辑A
    const linkFuns = {
    	openUrl(){
      wdinow.herf = ......
      },
      setLinkName(y){
      	state.name = y 
      }
    }
    
      
    linkeFuns.openUrl()
    return {
    ...toRefs(state) //  解构出 toRefs 解构reactive成员转成ref  
    }
  	
	}
})
```
​

