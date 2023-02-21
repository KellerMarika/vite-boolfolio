
<template><!-- SHOW PROJECT-->
   <!-- href="{{ route('admin.projects.show', $project->id) }}"  -->

   <router-link :to="{ name: 'projects.show', params: { id: project.id } }"
      class="card  my-4 overflow-hidden shadow">
      
      <div
         class="card-id position-absolute rounded-circle d-flex justify-content-center align-items-center fs-3 fw-bold m-1 end-0 top-0 me-4 mt-4 me-md-3 mt-md-2">
         {{ project.id }}</div>

      <img :src="store.backedRootUrl + '/storage/' + project.cover_img"
         class="card-img-top " alt="{{ project.cover_img }}">

      <!--      <h1> {{ project.cover_img ? 'a' : 'b' }}</h1> -->

      <div class="card-body p-0">

         <h2 class="card-title flex-fill text-uppercase shadow-sm py-2 px-3">{{ project.title }}
         </h2>

         <small class="fw-bold d-flex justify-content-between py-2 px-3">
            <span class="type">{{ project.type?.name }}</span><br>
            <span class="level">{{ project.level?.name }}</span>
            <!--     <div v-if ="project.tipologies"  v-for="tipology in project?.tipologies" :key="tipology.id">{{ tipology.name }}</div> -->
         </small>

      </div>
   </router-link>
</template>
<script>
import { store } from '../../../store';

export default {
   props: {
      /**
       *@param {int} id
       *@param {string} title
       *@param {boolean} description
       *@param {string} cover_img    
       *@param {string} github_link
       *@param {boolean} completed
       *@param {object} type_id  
       *@param {object} type_id  
       *@param {object} level_id  
       *@param {object} user_id  
       */
      project: {
         required: true,
         type: Object
      }
   },
   data() {
      return {
         store,
      }
   },
   methods: {
   },
   mounted() {
   }
}
</script>

<style lang="scss" scoped>
@use "../../../styles/generic.scss";
@use "../../../styles/partials/variables" as *;
@import 'bootstrap/scss/_functions';
@import 'bootstrap/scss/_variables';
@import 'bootstrap/scss/mixins/_breakpoints';

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
</style>