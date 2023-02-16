<template>
 <nav aria-label="...">
  <ul class="pagination">

   <!--    <li class="page-item disabled">
        <a class="page-link" href="{{ pagination.first_page_url }}">last</a>
       </li> -->

   <li class="page-item disabled">
    <a class="page-link" href="{{ pagination.prev_page_url }}">Previous</a>
   </li>



   <li v-for="link in pagination.links" class="page-item">
    <a class="page-link {{ link.active===true? 'active sr-only':'' }}" href="{{ link.url }}">{{ link.label }}</a>
    <span class="sr-only">(current)</span>
   </li>

   <li class="page-item">
    <a class="page-link" href="{{ pagination.next_page_url }}">Next</a>
   </li>

   <!--   <li class="page-item disabled">
        <a class="page-link" href="{{ pagination.last_page_url }}">last</a>
       </li> -->

  </ul>
</nav>
</template>
<script>
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
  }
 },
 methods: {

  fetchLists(page=2) {
   /* axios.get(`${this.store.rootApi_Url}${index}` */
   axios.get(`${this.store.backedRootUrl}/api/projects?page=${page}`, {
    /*      params: {
           //	query: , 
         } */
   })
    .then((resp) => {
     this.store.projects = resp.data.data;
     this.store.pagination = this.omitKey(resp.data, "data");
     this.store.pagination = this.omitKey(this.pagination, "path");
     console.log(this.pagination);
    });
  }
  /*  onChange(genresToActivate, gender) {
     if (this.activeAll === true) {
       this.activeAll = false
       genresToActivate = 0
       genresToActivate.push(gender)
     }
     console.log("All", this.activeAll, "lista", this.category.genresList.length, "filter", genresToActivate.length)
   },
   setAllGenresActive(genresToActivate) {
     if (this.activeAll === true) {
       genresToActivate = this.category.genresList
     } else {
       genresToActivate.length = 0
     }
     console.log("All", this.activeAll, "lista", "filter", genresToActivate.length)
   }, */
 },
 mounted() {
 }
}
</script>