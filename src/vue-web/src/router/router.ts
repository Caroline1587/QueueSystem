import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// import Home from "../views/student/Home.vue";
import LayoutVue from "@/components/Layout.vue";
import Login from "../views/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "layout",
    component: LayoutVue,
    // redirect: "/take-number",
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
    name: "TakeNumber",
    component: () => import("../views/student/TakeNumber.vue"),
  },
  {
    path: "/personal/:id",
    name: "PersonalQueue",
    component: () => import("../views/student/PersonalQueue.vue"),
  },
  {
    path: "/records",
    name: "QueueRecords",
    component: () => import("../views/student/QueueRecords.vue"),
  },
  {
    path: "/me/:id",
    name: "me",
    component: () => import("../views/student/Me.vue"),
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
