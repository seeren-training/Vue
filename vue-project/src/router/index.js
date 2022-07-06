import { createRouter, createWebHistory } from "vue-router";

import tasksRoutes from "./tasks";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/task",
    },
    {
      path: "/task",
      name: "tasks",
      component: () => import("../views/Tasks/TasksView.vue"),
      children: tasksRoutes,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
