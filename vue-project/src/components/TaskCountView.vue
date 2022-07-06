<script>
export default {
  props: ["count"],
};
</script>

<template>
  <section class="hero is-primary mb-4">
    <div class="hero-body">
      <p class="title">Task List</p>
      <p class="subtitle" v-if="count">
        {{ count }}
      </p>
      <p class="subtitle" v-else>There is not tasks</p>
    </div>
  </section>
</template>

<style></style>
