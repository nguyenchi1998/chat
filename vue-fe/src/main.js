import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login';
import auth from '@/auth';
import Home from '@/components/Home';

Vue.use(VueRouter);
Vue.use(Vuex);

const requireAuth = (to, from, next) => {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      // query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', component: Home, beforeEnter: requireAuth
    },
    {
      path: '/login', component: Login
    },
    {
      path: '/logout',
      beforeEnter(to, from, next) {
        auth.logout();
        next('/')
      }
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
