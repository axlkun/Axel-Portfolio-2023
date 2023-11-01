import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('./views/Home.vue') },
  { path: '/work', component: () => import('./views/Work.vue') },
  { path: '/blog', component: () => import('./views/Blog.vue') },
  {
    path: '/blog/:slug',
    name: 'articleDetail',
    component: () => import('./views/Article.vue'),
    props: true,
  },
  {
    path: '/work/:slug',
    name: 'project',
    component: () => import('./views/Project.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;