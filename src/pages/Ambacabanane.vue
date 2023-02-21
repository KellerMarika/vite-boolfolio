<template>
  

  <!-- JUMBO -->

  <div class="container">
    <h1 class="text-center">AMBACABANANE</h1>

    <router-view v-slot="{ Component }">
<!-- la transizione non c'è ma si fa cosi -->
      <transition name="fade">

        <component :is="Component" :projects="projects" />

      </transition>

    </router-view>

  </div>

</template>

<script>
import axios from "axios";
import { store, fetch } from '../store';


export default {
  components: {  },
  data() {
    return {
      store,
      projects: [],
      backedRootUrl: store.backedRootUrl,
      routeKey: "/api/projects",
      params: {
        /*  paginate: "3", */
        /*  last:"5" */
      }
    }
  },
  methods: {
    /**FUNZIONE RECUPERA PROGETTI e PAGINAZIONE
       * 
       * @param {array} categoriesList 
       * 
       */
    fetchProjectLists() {


      axios.get(`${this.store.backedRootUrl}/api/projects`, {

      })
        .then((resp) => {
          this.projects = resp.data.data;

        });

    },
  },
  mounted() {
    fetch(this.backedRootUrl, this.routeKey, this.params);
    
    console.log(this.$route)
  },
  created() {
    this.fetchProjectLists(1)
  }
}
</script>
<style lang="scss" scoped>
@use "../styles/generic.scss";
@use "../styles/partials/variables" as *;


// importa Bootstrap
@use "bootstrap/scss/bootstrap";

// importa font awesome
@use "@fortawesome/fontawesome-free/css/all.min.css";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}


</style>