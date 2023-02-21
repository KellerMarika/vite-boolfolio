<template>
 <h1>SONO A</h1>

 <div class="row">
  <div class="col-md-8 p-5">show</div>
  <div v-for="project in projects" class="col-md-4 p-5">
  </div>
 </div>

 <router-link to="/b" class="btn btn-primary m-3">  Vai a B  </router-link>
 <button class="btn btn-primary m-3">crea</button>
</template>

<script>
import axios from "axios";
import { store, fetch } from '../store';

export default {
 components: {},
 props: {
  projects: {
   required: true,
  }
 },
 data() {
  return {
  }
 },
 methods: {
 },
 mounted() {
 
 },
 created() {

 }
}
</script>