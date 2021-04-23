import { createRouter, createWebHistory } from "vue-router"

export const routerHistory = createWebHistory()
export const router = createRouter({
  history: routerHistory,

  routes: [
    {
      name: "index",
      path: "/",
      component: () => import("Invoke/index.vue"),
    },
    {
      name: "menu",
      path: "/menu",
      component: () => import("Invoke/menu/menu.vue"),

      children: [],
    },
    {
      name: "nest",
      path: "/nest",
      component: () => import("Invoke/nest/nest.vue"),

      children: [
        {
          name: "nest-child",
          path: "child",
          component: () => import("Invoke/nest/child/index.vue"),
        },
        {
          name: "nest-inner",
          path: "inner",
          component: () => import("Invoke/nest/inner/index.vue"),
        },
      ],
    },
  ],
})
