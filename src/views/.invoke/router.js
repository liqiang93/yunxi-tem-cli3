import {
  createRouter,
  createWebHistory
} from 'vue-router';

export const routerHistory = createWebHistory();
export const router = createRouter({
  history: routerHistory,

  routes: [

    {
      name: 'index',
      path: '/',
      component: () => import('Invoke/index.vue'),
    },
    {
      name: 'demo',
      path: '/demo',
      component: () => import('Invoke/demo/index.vue'),

      meta: {
        "number": 123,
        "string": "string",
        "boolean": true
      },
    },
  ],
});