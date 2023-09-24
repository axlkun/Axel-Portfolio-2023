import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Work from './views/Work.vue';
import Blog from './views/Blog.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/work', component: Work },
  { path: '/blog', component: Blog },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;