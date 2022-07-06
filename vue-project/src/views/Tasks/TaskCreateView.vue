<script>
import { useBoardStore } from "@/stores/board";
import { boardFormService } from "@/services/boardForm.service";
import { storeToRefs } from "pinia";
import router from "../../router";

const store = useBoardStore();

export default {
  data() {
    const { fetching } = storeToRefs(store);
    return {
      name: "",
      description: "",
      errorName: null,
      errorDescription: null,
      fetching,
    };
  },
  methods: {
    async create() {
      this.errorName = boardFormService.validateName(this.name);
      this.errorDescription = boardFormService.validateDescription(
        this.description
      );
      if (!this.errorName && !this.errorDescription) {
        await store.create({ name: this.name, description: this.description });
        router.push("/task");
      }
    },
  },
  watch: {
    name(value) {
      this.errorName = boardFormService.validateName(value);
    },
    description(value) {
      this.errorDescription = boardFormService.validateDescription(value);
    },
  },
};
</script>

<template>
  <section className="hero is-fullheight-with-navbar is-dark">
    <div className="hero-body">
      <div className="column is-full">
        <p className="title mb-6">New Task</p>
        <div className="subtitle columns">
          <form className="column is-two-thirds" @submit.prevent="create">
            <div className="field">
              <label htmlFor="name" className="label has-text-white">
                Name
              </label>
              <div className="notification is-danger" v-if="errorName">
                {{ errorName }}
              </div>
              <div className="control">
                <input
                  id="name"
                  className="input"
                  placeholder="Task Name"
                  v-model="name"
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="description" className="label has-text-white">
                Description
              </label>
              <div className="notification is-danger" v-if="errorDescription">
                {{ errorDescription }}
              </div>
              <div className="control">
                <input
                  id="description"
                  className="input"
                  placeholder="Task Description"
                  v-model="description"
                />
              </div>
            </div>
            <div className="field mt-4">
              <div className="control">
                <button className="button is-link" :disabled="fetching">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
