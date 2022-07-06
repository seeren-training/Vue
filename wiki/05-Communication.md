# Communication

*  🔖 **Store**
*  🔖 **HTTP**
*  🔖 **Utilisation**

___

## 📑 Store

Pour que les composants partagent un état la notion de store est présente. Sur vue 3 et avec Vite, la solution utilisée est Pinia.

```js
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
  },
});
```

[Pinia](https://pinia.vuejs.org/)

### 🏷️ **Utilisation**


Si le state n'est pas une référence il ne faut pas l'utiliser directement.

```js
data() {
  const { fetching } = storeToRefs(store);
  return {
    fetching,
  };
},
```

Pour les types non primitifs aucun problème d'utilisation directe.

```js
data() {
  return {
    columns: store.columns,
  };
},
```

Quand un état est modifié alors les composants qui l'utilisent sont mis à jour.