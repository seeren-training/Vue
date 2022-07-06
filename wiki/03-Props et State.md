# Props et State

*  🔖 **Props**
*  🔖 **State**

___

## 📑 Props

Les props doivent être déclarés dans la propriété `props` de l'objet représentant le composant.

[Props](https://fr.reactjs.org/docs/components-and-props.html)

```js
<script>
export default {
  props: ["count"],
};
</script>

<template>
  <section class="hero is-primary mb-4">
    <div class="hero-body">
      <p class="title">Task List</p>
        {{ count }} Task
      </p>
    </div>
  </section>
</template>
```

[Props](https://vuejs.org/guide/components/props.html)

Le passage se fait à l'affichage de l'enfant.  dans le template du parrent.

```js
<TaskCountView count="3" />
```

Pour qu'un parent puisse utiliser il enfant il doit le déclarer.

```js
export default {
  components: { TaskCountView },
};
```
___

## 📑 State

Un composant peut déclarer un état qui lui est propre et s'en servir dans le template.

```js
export default {
  data() {
    return {
      columns: {
        todo: [],
        doing: [],
        done: [],
      },
    };
  },
};
```

```html
<ul v-bind:key="index" v-for="(column, index) in columns">
  <h2>{{ index }}</h2>
</ul  
```

### 🏷️ **Getters**

Pour fournir des shortcut syntaxiques sur l'état il est possible de déclarer des gettets.

```js
computed: {
  countTask() {
    return (
      this.columns.todo.length +
      this.columns.doing.length +
      this.columns.done.length
    );
  },
},
```

```js
<TaskCountView :count="countTask" />
```

### 🏷️ **Methods**

Les évènements ont accès aux méthodes.

```js
methods: {
  remove(task) {
    store.remove(task);
  },
},
```

```html
<button
  :disabled="fetching"
  @click="() => remove(task)"
>
```

### 🏷️ **Watch**

Pour réagir au changement d'un état souvent dans le cas de formulaires il faut utiliser watch.

```js
data() {
  return {
    name: null,
    errorName: false
  };
},
watch: {
  name(value) {
    this.errorName = boardFormService.validateName(value);
  },
},
```

```html
<div v-if="errorName">
  {{ errorName }}
</div>
<input placeholder="Task Name" v-model="name"/>
```

### 🏷️ **Lifecycle**

Pour lancer une action quand un composant est monté il y a un hook pour cela.

```js
async mounted() {
  if (!this.columns) {
    await store.fetch();
    this.columns = store.columns;
  }
},
```