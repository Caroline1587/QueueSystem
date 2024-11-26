import router from "./router";
import { getAccessToken } from "@/utils/auth"; // 获取 token
// import NProgress from "nprogress"; // 进度条
// import "nprogress/nprogress.css"; // 进度条样式

// NProgress.configure({
//   minimum: 0.1, // 最小百分比，默认 0.08
//   easing: "ease", // CSS easing 字符串，默认 'ease'
//   speed: 500, // 进度条速度，默认 200ms
//   trickle: true, // 自动递增，默认 true
//   trickleSpeed: 200, // 自动递增间隔时间，默认 200ms
//   showSpinner: false, // 是否显示旋转器，默认 true
// }); // 配置 NProgress

// const protectedRoutes = ["/clock", , "/data-control"]; // 需要登录访问的页面

// router.beforeEach((to, from, next) => {
//   NProgress.start();
//   console.log(to.path);

//   const token = getAccessToken();

//   if (to.path === "/login" && token) {
//     next({ path: "/home" }); // 如果已登录且访问登录页，跳转到首页
//     NProgress.done();
//   } else if (protectedRoutes.includes(to.path) && !token) {
//     console.log(to.path);
//     console.log("panduan zhong ");
//     next(`/login?redirect=${to.fullPath}`); // 如果访问受保护的页面且未登录，跳转到登录页
//     //这样的写法可以确保用户在成功登录后被重定向回他们最初想要访问的页面，而不是直接跳转到一个固定的页面（例如首页）
//     NProgress.done();
//   } else {
//     next(); // 继续前往目标页面
//   }
// });

// router.afterEach(() => {
//   NProgress.done(); // 结束进度条
// });

export default router;
