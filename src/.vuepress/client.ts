// import { defineClientConfig } from "vuepress/client";
// import ExampleGlobalComponent from "./components/ExampleGlobalComponent.vue";
// import ExampleRootComponent from "./components/ExampleRootComponent.vue";
// import { setupExampleCompositionAPI } from "./composables/exampleCompositionAPI";
// import ExampleLayout from "./layouts/ExampleLayout.vue";

// export default defineClientConfig({
//   // 客户端增强
//   enhance: ({ app, router }) => {
//     // 注册全局组件
//     app.component("ExampleGlobalComponent", ExampleGlobalComponent);

//     // 注册路由守卫
//     router.beforeEach((to) => {
//       console.log("before navigation");
//     });

//     router.afterEach((to) => {
//       console.log("after navigation");
//     });
//   },

//   // 全局注册
//   setup() {
//     // 注册全局组合式 API
//     setupExampleCompositionAPI();

//     // 在客户端中访问 DOM
//     onMounted(() => {
//       // 在挂在后 使用 DOM API
//       document.querySelector("#app");
//     });
//   },

//   // 添加或覆盖组件
//   layouts: {
//     ExampleLayout,
//   },

//   // 全局组件
//   rootComponents: [
//     "ExampleRootComponent",
//     //...
//   ],
// });