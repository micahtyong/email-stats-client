import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import FromMeToGmail from '../views/graphs/FromMeToGmail.vue'
import FromMeToNonGmail from '../views/graphs/FromMeToNonGmail.vue'
import ToMeFromGmail from '../views/graphs/ToMeFromGmail.vue'
import ToMeFromNonGmail from '../views/graphs/ToMeFromNonGmail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/docs',
    name: 'Docs',
    component: About
    // () => import('../views/About.vue') for lazy loading
  },
  {
    path: '/graphs/from-me-to-gmail',
    name: 'From Me To Gmail',
    component: FromMeToGmail
  },
  {
    path: '/graphs/from-me-to-non-gmail',
    name: 'From Me To Non-Gmail',
    component: FromMeToNonGmail
  },
  {
    path: '/graphs/to-me-from-gmail',
    name: 'To Me From Gmail',
    component: ToMeFromGmail
  },
  {
    path: '/graphs/to-me-from-non-gmail',
    name: 'To Me From Non-Gmail',
    component: ToMeFromNonGmail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
