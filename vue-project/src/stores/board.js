import { defineStore } from "pinia";

import { BoardApiService } from "../api/board.api";

export const useBoardStore = defineStore({
  id: "board",
  state: () => ({
    columns: null,
    fetching: false,
  }),
  actions: {
    async fetch() {
      this.fetching = true;
      this.columns = await BoardApiService.fetch();
      this.fetching = false;
    },
    async create(task) {
      this.fetching = true;
      this.columns.todo.push(task);
      this.columns = await BoardApiService.put(this.columns);
      this.fetching = false;
    },
    async remove(task) {
      this.fetching = true;
      Object.keys(this.columns).forEach((key) => {
        const item = this.columns[key].find((item) => item.name === task.name);
        if (null !== item) {
          this.columns[key].splice(this.columns[key].indexOf(item), 1);
        }
      });
      this.columns = await BoardApiService.put(this.columns);
      this.fetching = false;
    },
  },
});
