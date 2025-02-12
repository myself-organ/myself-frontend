// @ts-ignore
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Home from '../pages/HomePage.vue';
import Contacts from '../pages/ContactsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // Lazy-loaded route
  //   component: () => import('../pages/CVPage.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;