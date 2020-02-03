import Vue from 'vue';
import Home from './components/Home';
import Login from './components/Login';
import Router from 'vue-router';
import store from './stores/auth';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true,
      }
    }, {
      path: '/login',
      component: Login
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return
    }
    next('/login')
  } else {
    next();
  }
});

export default router;
