import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Dashboard.vue';
import { useLayoutStore } from '../stores/layout';

// Vue.use(VueRouter);
// import { createApp } from 'vue';
// const app = createApp();
// app.use(createRouter);

const routes = [
  //dashboard
  { path: '/dashboard', name: 'dashboard', component: Home },

  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "pages-coming-soon" */ '../views/LandingPage.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "pages-error500" */ '../views/Login.vue'),
    meta: { layout: 'auth' },
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
    // this generates a separate chunk (News.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/News.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    // route level code-splitting
    // this generates a separate chunk (Profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    // route level code-splitting
    // this generates a separate chunk (Settings.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Settings.vue"),
  },
  {
    path: "/calculator",
    name: "calculator",
    // route level code-splitting
    // this generates a separate chunk (Calculator.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Calculator.vue"),
  },
    
];

const router = new createRouter({
    // mode: 'history',
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
  const store = useLayoutStore();
    if (to.meta && to.meta.layout && to.meta.layout == 'auth') {
        store.setLayout('auth');
    } else {
      store.setLayout('app');
    }
    next(true);
});

export default router;
