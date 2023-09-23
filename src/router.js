import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Work from './views/Projects.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/work', component: Work }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;