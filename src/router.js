import { createRouter, createWebHistory } from "vue-router";


import Ambacabanane_Pg from "./pages/Ambacabanane.vue";
import Home_Pg from "./pages/Home.vue";
import projectsIndex_Pg from "./pages/Gallery.vue";
import ProjectsShow_Pg from "./components/elements/projects/Show.vue";
import Contacts_Pg from "./pages/Contacts.vue";
import About_Pg from "./pages/About.vue";
import NotFound_Pg from "./pages/NotFound.vue";

import A from "./pages/A.vue";
import B from "./pages/B.vue";

const router = createRouter({
  // Serve ad indicare come gestire l'url al cambio pagina
  history: createWebHistory(),
  routes: [

    {
      path: "/",
      name: "home",
      component: Home_Pg,
      /*       meta: { requiresAuth: false }, */
    },
    {
      path: "/",
      name: "home",
      component: Ambacabanane_Pg,
      /*       meta: { requiresAuth: false }, */
      children: [
        {
          //metto '' perchè di default vedo a
          path: '',
          component: A,
        },
        //ma se scrivo "vedo b"
        {
          path: 'b',
          component: B,
        },],
    },
    {
      path: "/about",
      name: "about",
      component: About_Pg,
      meta: { requiresAuth: false },
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts_Pg,
      meta: { requiresAuth: false }
    },
    {

      path: "/projects",
      name: "Projects.index",
      component: projectsIndex_Pg,
      meta: { requiresAuth: false }
    },
    {
      path: "/projects/:id",
      name: "projects.show",
      component: ProjectsShow_Pg,
      meta: { requiresAuth: false }
    },
    {
      // Cattura qualsiasi altra rotta non definita sopra.
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound_Pg,
    }
  ]
});

export { router };