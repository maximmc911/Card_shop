<script setup lang='ts'>

import Catalog from './pages/Catalog.vue';
import Loader from './components/UI/loader/Loader.vue';
import Favorites from './pages/Favorites.vue';
import { openLoader } from './data/url'
import Basket from './pages/Basket.vue';
import { ref } from 'vue';
import { useStore } from './store/store';
import { getDataMaterials } from './data/GetSelect';

// constants
const page = ref<string>(`catalog`);
const store = useStore();

// functions
const router = (e: string): void => { page.value = e };
getDataMaterials();
store.GetData();
</script>

<template>
   <div>
      <div v-if="openLoader">
         <Loader />
      </div>
      <div v-else>
         <section v-if="page === `catalog`">

            <Catalog @router="router" />
         </section>
         <section v-else-if="page === `favorites`">
            <Favorites @router="router" />
         </section>
         <section v-else-if="page === `basket`">
            <Basket @router="router" />
         </section>
      </div>
   </div>
</template>
