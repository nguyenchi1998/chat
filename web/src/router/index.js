import Home from './../components/Home';
import Login from './../components/Login';
import auth from './../auth';
import VueRouter from 'vue-router';

const requireAuth = (to, from, next) => {
    if (!auth.loggedIn()) {
        next({
            path: '/login',
            // query: { redirect: to.fullPath }
        })
    } else {
        next()
    }
};

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

export default router;
