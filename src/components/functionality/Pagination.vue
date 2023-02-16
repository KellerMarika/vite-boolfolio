<template>
 <nav aria-label="...">
  <ul class="pagination">

   <!--    <li class="page-item disabled">
            <a class="page-link" href="{{ pagination.first_page_url }}">last</a>
           </li> -->

   <!--    <li class="page-item disabled">
       <a class="page-link" href="{{ pagination.prev_page_url }}">Previous</a>
      </li>

    -->

   <li v-for="link in pagination.links" class="page-item" @click="fetchProjectLists(link.label)">
    <a class="page-link ">{{ link.label }}</a>
    <span class="sr-only"></span>
   </li>

   <!--    <li class="page-item">
       <a class="page-link" href="{{ pagination.next_page_url }}">Next</a>
      </li> -->

   <!--   <li class="page-item disabled">
            <a class="page-link" href="{{ pagination.last_page_url }}">last</a>
           </li> -->

  </ul>
</nav>
</template>
<script>
import axios from "axios";
import { store } from '../../store';
export default {
 props: {
  /**
    *@param {int} current_page
     *@param {int} from
     *@param {int} last_page
     *@param {string} first_page_url
    *@param {string} last_page_url
    *@param {string||null} next_page_url
    *@param {string||null} prev_page_url
    *@param {int} per_page
    *@param {int} to
    *@param {int} total
    
    *@param {array} links
       */
  pagination: {
   required: true,
   type: Object
  }
 },
 data() {
  return {
   store,
   current: null,
  }
 },
 methods: {
  fetchProjectLists(page) {
   this.$emit("fetchProjectLists", page)
  },
 },
 mounted() {

 }
}
</script>