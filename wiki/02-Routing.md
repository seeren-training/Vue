# Routing

*  🔖 **Routes**
*  🔖 **Enfants**

___

## 📑 Routes

Les routes sont ajoutées à la création du router vue.


```js
import { createRouter, createWebHistory } from "vue-router";
const NotFound = "@/views/NotFound.vue";

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
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
```

[Routing](https://router.vuejs.org/guide/)

Nottez les syntaxes de redirection et de wild card.

### 🏷️ **Lazy**

SI l'application est sous forme de bundle il peut être interessant de les charger dynamiquement. L'avantage également c'est qu'au moment de leur chargement le store est prêt.
```js
component: () => import("../views/Tasks/TasksView.vue"),
```
[Lazy](https://router.vuejs.org/guide/advanced/lazy-loading.html)

### 🏷️ **Navigation**

Il ne reste plus qu'à déclarer l'élément contenant les routes.

```js
<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>
```

Il faudra utiliser RouterLink pour formuler desl liens.

```js
<RouterLink class="navbar-item" to="/task">Task list</RouterLink>

```
___

## 📑 Enfants

Nous pouvons déclarer des routes sur plusieurs niveaux. L'avantage est de pouvoir factoriser les éléments de présentation communs.

```js
const tasksRoutes = [
  {
    path: "",
    component: () => import("../views/Tasks/TaskListView.vue"),
  },
  {
    path: ":id",
    component: () => import("../views/Tasks/TaskView.vue"),
  },
  {
    path: "create",
    component: () => import("../views/Tasks/TaskCreateView.vue"),
  },
];
export default tasksRoutes;

```

Il n'y a plus qu'à utiliser la propriété children.

```js
{
  path: "/task",
  name: "tasks",
  component: () => import("../views/Tasks/TasksView.vue"),
  children: tasksRoutes,
},
```

Sur ces exemples nous avons observé la déclaration de routes imbriquées et leur découpage, les routes par défaut et le passage de paramètre de façon implicite, le reste est correctement documenté!