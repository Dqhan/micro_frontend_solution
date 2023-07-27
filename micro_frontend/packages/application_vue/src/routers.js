import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/Home.vue'),
  },
]

export function setupRouter(app, { history = createWebHistory() } = {}) {
  const router = createRouter({
    history,
    routes,
  })
  app.use(router)
}
