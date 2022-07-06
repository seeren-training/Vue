const tasksRoutes = [
  {
    path: "",
    component: () => import("../views/Tasks/TaskListView.vue"),
  },
  {
    path: "create",
    component: () => import("../views/Tasks/TaskCreateView.vue"),
  },
];
export default tasksRoutes;
