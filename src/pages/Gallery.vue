<template>
  <section class="my-5">
    <!-- CARDS CONTAINER PROJECTS INDEX -->
    <div class="projects-index container cards-container">
      <h1 class="pb-3 text-uppercase">gallery: </h1>

      <!-- PAGINAZIONE SOPRA -->
      <Pagination :pagination="pagination" @fetchProjectLists="fetchProjectLists"></Pagination>



      <div class="card-columns mt-2 mb-5">


        <!-- COMPONENTE CREATE PROJECT-->
        <!-- href="{{ route('admin.projects.create') }}" -->
        <a class="add-project-btn card my-4 p-3 text-uppercase  overflow-hidden shadow">
          <h2 class=" m-0"><i class="fa fa-plus"></i> add new</h2>
        </a>


        <!-- CARD -->
        <ProjectsCard v-for="project in projects" :project='project '></ProjectsCard>

      </div>
      <!-- PAGINAZIONE SOPRA -->
      <Pagination :pagination="pagination" @fetchProjectLists="fetchProjectLists"></Pagination>
    </div>
</section>
</template>

<script>
import axios from "axios";
import { store } from '../store';

import Pagination from "../components/functionality/Pagination.vue";
import ProjectsCard from "../components/elements/projects/ProjectsCard.vue";


export default {
  components: { Pagination, ProjectsCard },
  data() {
    return {
      store,
      router: [],
      projects: [],
      pagination: [],
    }
  },
  methods: {

    /* FUNZIONE ESCLUDI CHIAVE DA OGGETTO */
    /** omit({ a: 1, b: 2, c: 3 }, 'c')  // {a: 1, b: 2}
     * 
     * @param {object} obj 
     * @param {string} omitKey 
     */
    omitKey(obj, omitKey) {
      return Object.keys(obj).reduce((result, key) => {
        if (key !== omitKey) {
          result[key] = obj[key];
        }
        return result;
      }, {});
    },

    /**FUNZIONE RECUPERA PROGETTI e PAGINAZIONE
       * 
       * @param {array} categoriesList 
       * 
       */
    fetchProjectLists(page) {
      /* axios.get(`${this.store.rootApi_Url}${index}` */
      if(!page){page=1}
      axios.get(`${this.store.backedRootUrl}/api/projects?page=${page}`, {
  
      })
        .then((resp) => {
          this.projects = resp.data.data;
          this.pagination = this.omitKey(resp.data, "data");
        });
    }
  },
  mounted() {
    this.fetchProjectLists()
  },
  created() {
  }
}
</script>
<style lang="scss" scoped>
@use "../styles/generic.scss";
@use "../styles/partials/variables" as *;
@import 'bootstrap/scss/_functions';
@import 'bootstrap/scss/_variables';
@import 'bootstrap/scss/mixins/_breakpoints';

/* ADMIN/PROJECTS */
.projects-index.container {

  .card-columns {
    @include media-breakpoint-up(md) {
      column-count: 3;
    }

    @include media-breakpoint-up(xl) {
      column-count: 4;
    }
  }
}
</style>