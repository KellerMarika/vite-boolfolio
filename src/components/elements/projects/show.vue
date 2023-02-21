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
    /**FUNZIONE RECUPERA PROGETTI e PAGINAZIONE
       * 
       * @param {array} categoriesList 
       * 
       */
       fetchProject(apiRoute,apiParam, filterParams) {
      
  /*     console.log(`${this.store.backedRootUrl}${apiRoute}`)
      console.log(`${this.store.backedRootUrl}${apiRoute}${ this.$route.params.id}`) */
     // axios.get(`${this.store.backedRootUrl}${apiRoute}${ this.$route.params.id}`,
      axios.get(`${this.store.backedRootUrl}${apiRoute}${apiParam}`, {
       
        params: filterParams


      })
        .then((resp) => {
          this.projects = resp.data;
      /*     this.pagination = this.omitKey(resp.data, "data"); */
          console.log(resp)

        });
    }
  },
  mounted() {
    console.log(this.$route.params)
     this.fetchProject(this.$route.meta.apiRoute,this.$route.params.id,this.$route.params); 
  },
  created() {
  }
}
</script>
<style lang="scss" scoped>
@use "../../../styles/generic.scss";
@use "../../../styles/partials/variables" as *;
</style>