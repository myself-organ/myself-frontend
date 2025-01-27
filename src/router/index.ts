// @ts-ignore
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../pages/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // Lazy-loaded route
  //   component: () => import('../pages/CVPage.vue')
  // }
];

const router = createRouter({
  history: createWebHistory('http://localhost:5137'),
  routes
});

export default router;