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
      name: 'menu',
      path: '/menu',
      component: () => import('Invoke/menu/menu.vue'),

      children: [

        {
          name: 'menu-menu1',
          path: 'menu1',
          component: () => import('Invoke/menu/menu1/index.vue'),
        },
        {
          name: 'menu-menu1-menu11',
          path: 'menu1/menu11',
          component: () => import('Invoke/menu/menu1/menu1-1/index.vue'),
        },
        {
          name: 'menu-menu2',
          path: 'menu2',
          component: () => import('Invoke/menu/menu2/menu2.vue'),

          children: [

            {
              name: 'menu-menu2-menu22',
              path: 'menu22',
              component: () => import('Invoke/menu/menu2/menu2-2/index.vue'),
            },
          ],
        },
      ],
    },
  ],
});