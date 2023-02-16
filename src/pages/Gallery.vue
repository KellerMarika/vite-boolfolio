<template>

  <section class="my-5">

    <div class="projects-index container">
      <h1 class="pb-3 text-uppercase">gallery: </h1><!--  {{ $projects -> links() }} -->
      <div class="card-columns mt-2 mb-5">
        
        <!-- href="{{ route('admin.projects.create') }}" -->
        <a class="add-project-btn card my-4 p-3 text-uppercase  overflow-hidden shadow">
          <h2 class=" m-0"><i class="fa fa-plus"></i> add new</h2>
        </a>


        <!-- href="{{ route('admin.projects.show', $project->id) }}"  -->
        <a v-for="project in projects" class="card  my-4 overflow-hidden shadow">

          <div
              class="card-id position-absolute rounded-circle d-flex justify-content-center align-items-center fs-3 fw-bold m-1 end-0 top-0 me-4 mt-4 me-md-3 mt-md-2">
            {{ project.id }}</div>
          <!-- src="{{ asset('storage/' . $project->cover_img) }}" -->
          <img class="card-img-top "
              alt="{{ project.cover_img }}">
          <div class="card-body p-0">

            <h2 class="card-title flex-fill text-uppercase shadow-sm py-2 px-3">{{ project.title }}
            </h2>

            <small class="fw-bold d-flex justify-content-between py-2 px-3">
              <span class="type">{{ project.type?.name }}</span><br>
              <span class="level">{{ project.level?.name }}</span>
            </small>

          </div>

        </a>

      </div>
      <!--       {{ $projects -> links() }} -->
    </div>
</section>
</template>

<script>
import axios from "axios";
import { store } from '../store';


export default {
  components: {},
  data() {
    return {
      store,
      router: store.router,
      projects: [],
      projectsPaginationLinks: [],
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
          this.projectsPaginationLinks = resp.data.links;
          console.log(resp.data.links);

        });
    }
  },
  mounted() {
    this.fetchLists()
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

    a.card {
      text-decoration: none;

      &.add-project-btn {
        background-color: transparentize($primary_color_light, .5);
        color: $secondary_color;
        border: 2px dashed $secondary_color;
      }

      .card-img-top {
        max-height: 300px;
      }

      .card-id {
        width: 60px;
        aspect-ratio: 1/1;
        border: 3px solid $primary_color;
        color: $primary_color_dark;
        font-family: 'Raleway', sans-serif;
        transform: scale(200%) translateX(10px) translateY(-10px);
        z-index: 1;
        opacity: .8;

        @include media-breakpoint-only(md) {
          width: 50px;
          transform: translateX(10px) translateY(-10px);
        }

        @include media-breakpoint-up(lg) {
          transform: scale(150%) translateX(10px) translateY(-10px);
        }
      }
    }

  }
}
</style>