<script>
import { storeToRefs } from "pinia";
import { useBoardStore } from "@/stores/board";
import TaskCountView from "@/components/TaskCountView.vue";

const store = useBoardStore();

export default {
  data() {
    const { fetching } = storeToRefs(store);
    return {
      columns: store.columns,
      fetching,
    };
  },
  computed: {
    countTask() {
      return (
        this.columns.todo.length +
        this.columns.doing.length +
        this.columns.done.length
      );
    },
  },
  methods: {
    async remove(task) {
      await store.remove(task);
    },
  },
  components: { TaskCountView },
};
</script>

<template>
  <TaskCountView :count="countTask" />

  <div className="container">
    <div v-if="!countTask">
      <h2 className="is-size-2">Start by create a Task!</h2>
      <p className="mt-4">
        <Link to="create" className="button is-link">Create a Task</Link>
        <Link to="random" className="button is-link ml-2">
          Create a Random Task
        </Link>
      </p>
    </div>
    <div v-else className="columns mt-4">
      <ul
        v-bind:key="index"
        v-for="(column, index) in columns"
        className="column has-background-light mr-2 is-size-4"
      >
        <h2 className="has-text-centered mb-4">{{ index }}</h2>
        <li
          v-for="(task, index) in column"
          v-bind:key="index"
          className="is-danger notification"
        >
          <RouterLink :to="`/task/${index}`">
            <h6>{{ task.name }}</h6>
            <p className="is-size-6">{{ task.description }}</p>
          </RouterLink>
          <button
            :disabled="fetching"
            className="button is-small mt-2"
            @click="() => remove(task)"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
