import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import Error from '../views/Error.vue'
import Choose from '../views/Choose.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/choose',
    name: 'Choose',
    component: Choose
  }, {
    path: '*',
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  routes
})

export default router