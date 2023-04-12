import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../views/Portfolio.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/News.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/Profile.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/Settings.vue"),
    },
    {
      path: "/calculator",
      name: "calculator",
      component: () => import("../views/Calculator.vue"), 
    },
  ],
});

export default router;
