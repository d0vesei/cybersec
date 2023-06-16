import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Intro from '../views/Intro.vue'
import Cyberdef from '../views/Cyberdef.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/intro',
    name: 'Intro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Intro.vue')
  },
    {
        path: '/cyberdefence',
        name: 'Cyberdef',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Cyberdef.vue')
    }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
