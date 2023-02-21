<template>
  <h1 class="text-uppercase">SHOW</h1>

  <div class="card mb-3">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
      priject: null
    }
  },
  methods: {

/* WRAPPERAXIOS.Show(RouteRoot/apiRoute/apiParam) accetta 3 argomenti */
  
    /**FUNZIONE RECUPERA PROGETT0 e PAGINAZIONE
       * 
       * @param {array} categoriesList 
       * 
       */
       fetchProject(apiRoute,apiParam, apiParam) {
      axios.get(`${this.store.backedRootUrl}${apiRoute}${apiParam}`, {

        params: filterParams


      })
        .then((resp) => {
          this.project = resp.data;
          console.log(resp)

        });
    }
  },
  mounted() {
    console.log(this.$route.params)
     this.fetchProject(this.$route.meta.apiRoute,this.$route.params.id,this.$route.params.id); 
  },
  created() {
  }
}
</script>
<style lang="scss" scoped>
@use "../../../styles/generic.scss";
@use "../../../styles/partials/variables" as *;
</style>