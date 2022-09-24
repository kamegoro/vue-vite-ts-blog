import { createRouter,createWebHashHistory } from 'vue-router';
import Posts from "./pages/Posts.vue";

const routes = [
  { path: '/posts', name: "Posts", component: Posts },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;