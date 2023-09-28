import { createRouter, createWebHistory } from 'vue-router'
import {routes} from './routes'

const router = createRouter({
  history: createWebHistory(),
routes,
  mode: 'history',
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'exact-active'
})

export default router;
