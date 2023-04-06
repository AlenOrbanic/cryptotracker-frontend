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
      // route level code-splitting
      // this generates a separate chunk (Portfolio.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Portfolio.vue"),
    },
    {
      path: "/news",
      name: "news",
      // route level code-splitting
      // this generates a separate chunk (Portfolio.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/News.vue"),
    },
   
  ],
});

export default router;
