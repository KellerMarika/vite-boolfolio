import { createRouter, createWebHistory } from "vue-router";


import Home_Pg from "./pages/Home.vue";
import projectsIndex_Pg from "./pages/Gallery.vue";
import ProjectsShow_Pg from "./components/elements/projects/Show.vue";
import Contacts_Pg from "./pages/Contacts.vue";
import About_Pg from "./pages/About.vue";
const router = createRouter({
  // Serve ad indicare come gestire l'url al cambio pagina
  history: createWebHistory(),
  routes: [

    {
      path: "/",
      name: "home",
      component: Home_Pg
    },
    {
      path: "/about",
      name: "about",
      component: About_Pg
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts_Pg
    },
    {

      path: "/projects",
      name: "Projects.index",
      component: projectsIndex_Pg
    },
    {
      path: "/projects/:id",
      name: "projects.show",
      component: ProjectsShow_Pg
    }
  ]
});

export { router };