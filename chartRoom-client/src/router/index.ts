import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'demo',
    component: () => import( /* webpackChunkName: "demo" */ '../views/demo'),
  }
]
const router = createRouter({ 
  history: createWebHistory(process.env.BASE_URL),
  routes 
});
export default router;