import { createRouter, createWebHistory } from 'vue-router';
import userinfo from '../stores/userinfo'
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
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/news",
    name: "news",
    // route level code-splitting
    // this generates a separate chunk (News.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/News.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/profile",
    name: "profile",
    // route level code-splitting
    // this generates a separate chunk (Profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Profile.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/settings",
    name: "settings",
    // route level code-splitting
    // this generates a separate chunk (Settings.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Settings.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/calculator",
    name: "calculator",
    // route level code-splitting
    // this generates a separate chunk (Calculator.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Calculator.vue"),
    meta: {
      needsUser: true,
    },
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

setTimeout(() => {
  router.beforeEach((to, from, next) => {

    const store = useLayoutStore();
    if (to.meta && to.meta.layout && to.meta.layout == 'auth') {
        store.setLayout('auth');
    } else {
      store.setLayout('app');
    }

    console.log(
      "Stara ruta",
      from.name,
      " -> ",
      to.name,
      "korisnik",
      userinfo.currentUser
    );
    const noUser = userinfo.currentUser === null;
    if(!noUser){
      console.log(to.name, "aaaaa");
    }
    if(to.name==="adminpanel"){
      if(userinfo.admin){
        next();
      }
      else{ next(false);
      console.log("Nemas admin perms");
      }
    }
    if (noUser && to.meta.needsUser) {
      // ako korisnik nije logiran, a stranica zahtjeva login
      console.log("Logiraj se prvo!");
      next("login");
    } else {
      next();
    }
    if (!noUser && !to.meta.needsUser) {
      // ako je korisnik logiran, a stranica ne zahtjeva login
      console.log(userinfo.currentUser);
      next("Home");
    }
  });
}, 2000);

export default router;
