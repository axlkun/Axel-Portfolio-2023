import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Work from './views/Work.vue';
import Blog from './views/Blog.vue';
import Project from './views/Project.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/work', component: Work },
  { path: '/blog', component: Blog },
  { path: '/work/project', component: Project },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;