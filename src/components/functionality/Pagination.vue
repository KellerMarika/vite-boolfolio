<template>
  <nav aria-label="...">
    <ul class="pagination">



      <li v-for="link in pagination.links"

          @click="fetchProjectLists(getPageNumber(link, pagination))"

          class="page-item">

        <a class="page-link" :disabled="SetPageDisabled(link, pagination) ? 'disabled' : ''"
            :class="setPageActive(link)">{{
              getPageName(link) }}</a>

      </li>


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
      link_obj: {
        label: null,
        class: null,
      },

    }
  },
  methods: {

    /* EMIT */
    fetchProjectLists(page) {
      this.$emit("fetchProjectLists", page)
    },

    /* COMPUTED CHE NON VANNO COL THIS */

    getPageNumber(link, pagination) {

      if (isNaN(link.label)) {


        if (link.label.includes('Previous')) {
          if (pagination.current_page - 1 <= 1) {
            return 1

          } else {
            return pagination.current_page - 1
          }

        } else if (link.label.includes('Next')) {

          if (pagination.current_page + 1 < pagination.last_page) {
            return pagination.current_page + 1
          } else {
            return pagination.last_page
          }
        }
      } else {
        return link.label
      }
    },

    getPageName(link) {
      if (isNaN(link.label)) {
        if (link.label.includes('Previous')) {

          return 'previous'

        } else if (link.label.includes('Next')) {

          return 'next'
        }
      } else {
        return link.label
      }
    },

    SetPageDisabled(link, pagination) {

      if (isNaN(link.label)) {

        if (link.label.includes('Previous') && pagination.current_page <= 1) {
          return '1'

        } else if (link.label.includes('Next') && pagination.current_page >= pagination.last_page) {
          return '1'
        }
      }
    },
    setPageActive(link) {
      if (link.active === true)
        return "active"
    }



  },

  computed: {
    /*   getPageName() {
       if (isNan(this.link.label)) {
        if (this.link.label.includes('Previous')) {
    
         return 'previous'
        } else if (this.link.label.includes('Next')) {
         return 'next'
        } else {
         return this.link.label
        }
       }
      },
      SetPageDisabled() {
       if (this.pagination.current_page <= 1 || this.pagination.current_page >= this.pagination.last_page) {
        return 'true'
       }
    
      },
      setPageActive() {
       if (this.link.active === true)
        return "active"
      } */
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
@use "../../styles/generic.scss";
@use "../../styles/partials/variables" as *;


/* ADMIN/PROJECTS */
.pagination {
  li a.active {
    background-color: tomato;
  }


}
</style>