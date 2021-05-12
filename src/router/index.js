import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DetailsVideo from '../views/DetailsVideo.vue'
import Dessins_animes from '../views/Dessins_animes.vue'
import Activites from '../views/Activites.vue'
import Musique from '../views/Musique.vue'
import Qui_sommes_nous from '../views/Qui_sommes_nous.vue'
import Contact from '../views/Contact'

const routes = [
  {
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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detailsvideo/:id',
    name: 'DetailsVideo',
    component: DetailsVideo
  },
  {
    path: '/Dessins_animes',
    name: 'Dessins_animes',
    component: Dessins_animes
  },
  {
    path: '/Activites',
    name: 'Activites',
    component: Activites
  },
  {
    path: '/Musique',
    name: 'Musique',
    component: Musique
  },
  {
    path: '/Qui_sommes_nous',
    name: 'Qui sommes nous',
    component: Qui_sommes_nous
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
