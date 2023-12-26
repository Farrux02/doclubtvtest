import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/LoginPage/LoginPage.vue"),
    name: "login",
    meta: {
      layout: "auth",
      auth: false,
    },
  },
  {
    path: "/main",
    component: () => import("@/pages/MainPage/MainPage.vue"),
    name: "main",
    meta: {
      layout: "main",
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "is-active",
  linkExactActiveClass: "is-active",
});

export default router;
