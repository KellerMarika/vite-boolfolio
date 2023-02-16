<template>

<TheHeader></TheHeader>
  <router-view></router-view>

</template>

<script>
import axios from "axios";
import TheHeader from "./components/layout/TheHeader.vue";

import { router } from "./router"
import { store } from './store';


export default {
  components: { TheHeader },
  data() {
    return {
      store,
      router,
    }
  },
  methods: {

    /**FUNZIONE RECUPERA PROGETTI e PAGINAZIONE
     * 
     * @param {array} categoriesList 
     * 
     */
    fetchLists() {
      /* axios.get(`${this.store.rootApi_Url}${index}` */
      axios.get(`${this.store.rootApi_Url}/api/projects`, {
        /*      params: {
               //	query: , 
             } */
      })
        .then((resp) => {
          this.projects = resp.data.data;
          this.projectsLinks = resp.data.links;
          console.log(resp);

        });
    }

  },
  mounted() {
  },
  created() {
  }
}
</script>
<style lang="scss">
@use "./styles/generic.scss";
@use "./styles/partials/variables" as *;

</style>