<template>
  <section v-if="project">
    <div class="projects-index container">
      <h2>SHOW projects:</h2>
      <div class="row ">

        <div class="col-md-9 ">
          <div class="card overflow-hidden shadow d-flex">
            <div
                class="card-id position-absolute rounded-circle d-flex justify-content-center align-items-center fs-3 fw-bold m-1 end-0 top-0 me-2">
              {{ project.id }}</div>

            <img :src="store.backedRootUrl + '/storage/' + project.cover_img" :alt="project.title" class="card-img"
                alt="{{ project.cover_img }}">
            <div class="card-body ">

              <div class="project-info">

                <div class="d-flex shadow-sm">
                  <h2 class="card-title flex-fill text-uppercase">{{ project.title }}</h2>

                  <small class="fw-bold text-end">
                    <span class="type">{{ project.type.name }}</span><br>
                    <span class="level">{{ project.level.name }}</span>
                  </small>
                </div>
                <div> {{ getVotes }}</div>
                <small class="tecnology fw-bold text-end"> tecnologie Impiegte =>
                  {{ getTecnologies }}</small>
                <p class="card-text pt-3">{{ project.description }}<small
                      class="d-block text-end p-1 border-top">last update:
                    {{ project.updated_at }}</small></p>

                <small class="tecnology fw-bold text-end"> Commenti : {{ project.posts.length }}</small>

                <div v-if="project.posts">
                  <p v-for="post in project.posts">
                    <small class="d-block"> dall'utente: {{ /*!!!!chiamata axios user.show*/post.user_id }}</small><!-- _________________ -->
                    {{ post.text }}
                    <small class="d-block text-end">aggiornato al:{{ post.updated_at }}</small>
                  </p>
                </div>

                <a href="#" class="btn mr-2"><i class="fas fa-link"></i> leave Comment!</a>
                <a href="{{ project.github_link }}" class="btn "><i class="fab fa-github"></i>
                  Github</a>


                <router-link v-slot="{ PrevBtn }" :to="{ name: 'projects.index' }">
                  <PrevBtn :is="PrevBtn" />
                </router-link>

                <router-link v-slot="{ DestroyForm }" :to="{ name: 'Projects' }">
                  <DestroyForm :is="DestroyForm" />
                </router-link>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { store } from '../../../store';
import PrevBtn from "../../functionality/PrevBtn.vue";
import DestroyForm from "../../functionality/DestroyForm.vue";


export default {
  components: { PrevBtn, DestroyForm },
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

      axios.get(`${apiUrl}`, {
      })
        .then((resp) => {
          this.project = resp.data;
          this.GetPageTitle(this.project.title);
        });
    },
    /* TITOLO */
    GetPageTitle(p) {
      document.title = "project: " + p
    },
  },
  mounted() {
    this.fetchProject(this.$route.fullPath);
  },
  computed: {
    getTecnologies() {
      if (this.project.tecnologies) {
        return this.project.tecnologies.map(function (tecnology) { return tecnology.name }).join(",")
      } else {

        return "nessun risultato";
      }
    },
    getVotes() {
      /* deve ritornare lo schema a stelle sulla base della media dei voti che voglio passare direttamente dal db */
    },
    getPosts() {

    }
  },
  created() {
  }
}
</script>
<style lang="scss" scoped>
@use "../../../styles/generic.scss";
@use "../../../styles/partials/variables" as *;
@import 'bootstrap/scss/_functions';
@import 'bootstrap/scss/_variables';
@import 'bootstrap/scss/mixins/_breakpoints';

.card {
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