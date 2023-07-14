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
  { path: '/dashboard', name: 'dashboard', component: Home},

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
    meta: { layout: 'auth',
            needsUser: false
   },
  },

  {
    path: "/portfolio",
    name: "portfolio",
    // route level code-splitting
    // this generates a separate chunk (Portfolio.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Portfolio.vue"),
    meta: {
      needsUser: true
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
      needsUser: true
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
      needsUser: true
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
      needsUser: true
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
      needsUser: true
    },
  },
  {
    path: "/adminpanel",
    name: "adminpanel",
    // route level code-splitting
    // this generates a separate chunk (Calculator.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/adminpanel.vue"),
    meta: {
      needsUser: true
    },
  }    
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

router.beforeEach((to, from, next) => {
  // Check if user information exists in userinfo object
  if (userinfo.useremail && userinfo.userpassword) {
    // User information exists
    if (to.name === 'login') {
      // User is already logged in, redirect to dashboard or appropriate page
      next({ name: 'dashboard' });
    } else {
      // Proceed to next route
      next();
    }
  } else {
    // User information doesn't exist, redirect to login page
    if (to.name === 'login' || to.path === '/') {
      // Prevent redirection if already on the login page or home page
      next();
    } else {
      next({ name: 'login' });
    }
  }
});

// Add an event listener to store user information in localStorage on route navigation
router.afterEach((to, from) => {
  if (userinfo.useremail && userinfo.userpassword) {
    localStorage.setItem('useremail', userinfo.useremail);
    localStorage.setItem('userpassword', userinfo.userpassword);
  }
});


export default router;
