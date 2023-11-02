import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Work from './views/Work.vue';
import Blog from './views/Blog.vue';
import Project from './views/Project.vue';
import Article from './views/Article.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/work', component: Work },
  { path: '/blog', component: Blog },
  { path: '/blog/:slug',name: 'articleDetail', component: Article, props: true, },
  { path: '/work/:slug',name: 'project', component: Project, props: true, },
];

// const routes = [
//   { path: '/', component: () => import('./views/Home.vue') },
//   { path: '/work', component: () => import('./views/Work.vue') },
//   { path: '/blog', component: () => import('./views/Blog.vue') },
//   {
//     path: '/blog/:slug',
//     name: 'articleDetail',
//     component: () => import('./views/Article.vue'),
//     props: true,
//   },
//   {
//     path: '/work/:slug',
//     name: 'project',
//     component: () => import('./views/Project.vue'),
//     props: true,
//   },
// ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;