import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import FromMeToGmail from '../views/FromMeToGmail.vue'
import FromMeToNonGmail from '../views/FromMeToNonGmail.vue'
import ToMeFromGmail from '../views/ToMeFromGmail.vue'
import ToMeFromNonGmail from '../views/ToMeFromNonGmail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // () => import('../views/About.vue') for lazy loading
  },
  {
    path: '/graphs/frommetogmail',
    name: 'From Me To Gmail',
    component: FromMeToGmail
  },
  {
    path: '/graphs/frommetonongmail',
    name: 'From Me To Non-Gmail',
    component: FromMeToNonGmail
  },
  {
    path: '/graphs/tomefromgmail',
    name: 'To Me From Gmail',
    component: ToMeFromGmail
  },
  {
    path: '/graphs/tomefromnongmail',
    name: 'To Me From Non-Gmail',
    component: ToMeFromNonGmail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
