import PageHome from "@/pages/Home";
import PageThreadShow from "@/pages/ThreadShow";
import PageNotFound from "@/pages/NotFound";
import PageForum from "@/pages/Forum";
import PageCategory from '@/pages/Category';
import { createRouter, createWebHistory } from 'vue-router';
import sourceData from '@/data.json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: PageForum,
    props: true,
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: PageCategory,
    props: true,
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      // check if thread id exists
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      // if exists show thread
      if (threadExists) {
        return next();
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash
        })
      }
      // if not exists, show not found page
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
