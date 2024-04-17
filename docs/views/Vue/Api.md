---
title: 全局 api
date: 2022-1-19e
categories:
  - Vue
---

## vue3

```javascript
import App from "./App";
import { createApp } from "vue";
import { createPinia } from "pinia";
import ELementUI from "element-plus";


const app = createApp(App);
const pinia = createPinia();

app.component("button-counter", {
  data: () => ({
    count: 0,
  }),
  template: '<button @click="count++">Clicked {{ count }} times.</button>',
});

app.directive("focus", {
  mounted: (el, bind) => el.focus(),
});

app.provide('name', 'it_rare')

app
  .use(ELementUI) // 插件实现机制  内部install 方法
  .use(pinia)
  .mount("#app");
```

### 工厂模式

```javascript
import { createApp } from "vue";
import Foo from "./Foo.vue";
import Bar from "./Bar.vue";

const createMyApp = (options) => {
  const app = createApp(options);
  app.directive("focus" /* ... */);
  return app;
};

createMyApp(Foo).mount("#foo");
createMyApp(Bar).mount("#bar");
```

### 全局方法 globalProperties

```javascript
// 之前 (Vue 2.x)
Vue.prototype.$http = () => {};

// 之后 (Vue 3.x)
const app = createApp({});
app.config.globalProperties.$http = () => {};
```

### 异步组件

```javascript
import { createApp, defineAsyncComponent } from "vue";

createApp({
  // ...
  components: {
    AsyncComponent: defineAsyncComponent(() =>
      import("./components/AsyncComponent.vue")
    ),
  },
});
```
