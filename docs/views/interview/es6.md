---
title: es6 好的写法
date:  2022-1-18
tags:

- es6
categories:
- interview 
sticky: true

---
### 对象取值处理

```js

obj && obj.name

```

### 关于异步处理

```js
// 错误
const fn1 = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 300);
  });
}
const fn2 = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 600);
  });
}
const fn = () =>{
   fn1().then(res1 =>{
      console.log(res1);// 1
      fn2().then(res2 =>{
        console.log(res2)
      })
   })
}

// 改进
async function allReq(){
  const fn1 = await ReqAwait()
  const fn2 = await ReqAwait()                          

// 补充 并发请求
Promise.all([fn1,fn2).then(res=>) //   全部成功 then
Promise.race([fn1,fn2]).then(res=>)// 一个成功就返回
Promise.any([fn1,fn2]).then(res=>)//  全部是失败才reject
Promise.resolve([fn1,fn2]) // 没有返回值 undefined
Promise.reject([fn1,fn2]) // 没有返回值 undefined
Promise.catch() // reject he error 错误监听
Promise.finally() // 
Promise.allSettled() // 只有等到参数数组的所有 Promise 对象都发生状态变更（不管是fulfilled还是rejected）
```

### 数组处理

```js
// 错误
if(
    type == 1 ||
    type == 2 || 
    type == 3 ||
    type == 4 ||
){
   //...
}
// 改进
const condition = [1,2,3,4]
if(condition.includes(type)) {}


[].findIndex()
[].find()
[].map()
[].reduce()
[].some() // 
[].filter()
[].includes() 
[].values() 
[].keys() // 获取数组索引
Array.from() // 伪数组转数组
[...[111,222]] // 扩展运算符
Array.to(1,2,3,4,4)  // == [1,2,3,4,4]
for (let value of [])





```

### 关于数据扁平化书处理

```js

const deps = {
'采购部':[1,2,3],
'人事部':[5,8,12],
'行政部':[5,14,79],
'运输部':[3,64,105],
}

let member = []
for(let keys in deps) {
  const value = deps[keys]
  if(Array.isArray(value)) {
    member = [nember, ...value]
  }
}
member = [...new Set(member)]
//改进
let member = Object.values(deps).flat(1)
```
