<template>
  <h1 class="text-uppercase">SHOW</h1>

  <div class="card mb-3" v-if="project">
    <!-- <img :src="store.backedRootUrl + '/storage/' +"
    class="card-img-top" alt="..."> -->
    <div class="card-body">
      <h5 class="card-title"><!-- {{ project.title }} --></h5>
      <p class="card-text"><!-- {{ project.description }} --></p>
      <p class="card-text"><small class="text-muted">Last updated <!-- {{ project.updated_at }} --></small></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { store } from '../../../store';


export default {
  components: {},
  data() {
    return {
      store,
      project: null
    }
  },
  methods: {
    /* WRAPPERAXIOS.Show(RouteRoot/apiRoute/apiParam) accetta 3 argomenti */

    /**FUNZIONE RECUPERA PROGETT0 e PAGINAZIONE
       * 
       * @param {array} categoriesList 
       * 
       */
    fetchProject(apiRoute) {

      let apiUrl = `${this.store.backedRootUrl}/api${apiRoute}`

      console.log(apiUrl)
      axios.get(`${apiUrl}`, {
      })
        .then((resp) => {
          this.project = resp.data;
          console.log(this.project)
          console.log(this.project.title)

        });
    }
  },
  mounted() {
    this.fetchProject(this.$route.fullPath);
  },
  created() {

  }
}
</script>
<style lang="scss" scoped>
@use "../../../styles/generic.scss";
@use "../../../styles/partials/variables" as *;
</style>