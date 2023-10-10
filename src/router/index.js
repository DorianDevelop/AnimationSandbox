import { createRouter, createWebHistory } from 'vue-router';
import ButtonsPage from '@/views/ButtonsPage.vue';
import CardsPage from '@/views/CardsPage.vue';
import OthersPage from '@/views/OthersPage.vue';
import HomePage from '@/views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: ButtonsPage
  },
  {
    path: '/cards',
    name: 'Cards',
    component: CardsPage
  },
  {
    path: '/others',
    name: 'Others',
    component: OthersPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
