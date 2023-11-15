import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Work from './views/Work.vue';
import Blog from './views/Blog.vue';
import Project from './views/Project.vue';
import Article from './views/Article.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Axel Cruz | Fullstack Developer'
    }
  },

  {
    path: '/proyectos',
    name: 'work',
    component: Work,
    meta: {
      title: 'Axel Cruz | Proyectos'
    }
  },

  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    meta: {
      title: 'Axel Cruz | Blog'
    }
  },

  { 
    path: '/blog/:slug', 
    name: 'articleDetail', 
    component: Article, 
    props: true, 
    meta: {
      title: 'Axel Cruz | Artículo'
    }
  },

  { 
    path: '/proyectos/:slug', 
    name: 'project', 
    component: Project, 
    props: true, 
    meta: {
      title: 'Axel Cruz | Proyecto'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'Axel Cruz | Fullstack Developer'
});

export default router;