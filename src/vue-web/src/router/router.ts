import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// import Home from "../views/student/Home.vue";
import LayoutVue from "@/components/Layout.vue";
import Login from "@/views/Login.vue";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "layout",
  //   component: LayoutVue,
  //   // redirect: "/take-number",
  // },
  {
    path: "/",
    // component: Login,
    redirect: "/login",
  },
  {
    path: "/home",
    name: "home",
    // component: Home,
    redirect: "/take-number",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/take-number",
    name: "takeNumber",
    component: () => import("../views/student/TakeNumber.vue"),
  },
  {
    path: "/queueRecord/:id",
    name: "QueueDetail",
    component: () => import("../views/student/QueueDetail.vue"),
  },
  {
    path: "/myRecords",
    name: "myRecords",
    component: () => import("../views/student/MyRecords.vue"),
  },
  {
    path: "/manage",
    name: "manage",
    component: () => import("../components/LayoutStaff.vue"),
    children: [
      {
        path: "page1",
        name: "page1",
        component: () => import("../views/manage/Page1.vue"),
      },
      {
        path: "page2",
        name: "page2",
        component: () => import("../views/manage/Page2.vue"),
      },
      {
        path: "page3",
        name: "page3",
        component: () => import("../views/manage/Page3.vue"),
      },
      {
        path: "page4",
        name: "page4",
        component: () => import("../views/manage/Page4.vue"),
      },
    ],
  },
];

// 防止连续点击多次路由报错

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
