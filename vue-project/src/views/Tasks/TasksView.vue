<script>
import { useBoardStore } from "@/stores/board";

const store = useBoardStore();

export default {
  data() {
    return {
      isBurgerActive: false,
      columns: store.columns,
    };
  },
  async mounted() {
    if (!this.columns) {
      await store.fetch();
      this.columns = store.columns;
    }
  },
  methods: {
    toogleBurger() {
      this.isBurgerActive = !this.isBurgerActive;
    },
  },
};
</script>

<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink class="navbar-item" to="/">Task App</RouterLink>
      <button
        :class="`navbar-burger ${isBurgerActive ? 'is-active' : ''}`"
        aria-label="menu"
        aria-expanded="false"
        @click="toogleBurger"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>
    <div :class="`navbar-menu ${isBurgerActive ? 'is-active' : ''}`">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <RouterLink class="navbar-item" to="/task">Task list</RouterLink>
            <RouterLink class="navbar-item" to="/task/create"
              >Create Task</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
  <progress
    v-if="!columns"
    className="progress is-small is-primary"
    max="100"
  ></progress>
  <router-view v-else></router-view>
</template>

<style>
</style>
