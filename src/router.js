import { createRouter, createWebHistory } from "vue-router";
// test 
import Ambacabanane_Pg from "./pages/Ambacabanane.vue";
import A from "./pages/A.vue";
import B from "./pages/B.vue";



import projects_Pg from "./pages/Projects.vue";
import projectsIndex_Pg from "./components/elements/projects/Index.vue";
import projectsCreate_Pg from "./components/elements/projects/create.vue";
import projectsShow_Pg from "./components/elements/projects/Show.vue";
import projectsEdit_Pg from "./components/elements/projects/Edit.vue";





import Home_Pg from "./pages/Home.vue";

import Contacts_Pg from "./pages/Contacts.vue";
import About_Pg from "./pages/About.vue";
import NotFound_Pg from "./pages/NotFound.vue";


const router = createRouter({
  // Serve ad indicare come gestire l'url al cambio pagina
  history: createWebHistory(),
  routes: [

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
      path: "/",
      name: "home",
      component: Home_Pg,
    },

    {

      path: "/projects",
      name: "Projects",
      component: projects_Pg,
      params: {/* in post */},
      meta: { },
      children: [

        //index        
        {
          path: "",
          name: "projects.index",
        component: projectsIndex_Pg,
        meta: { apiRoute: "/api/projects"}
        },
    //show
    {
      path: "/:id",
      name: "projects.show",
      component: projectsShow_Pg,
      meta: { apiRoute: "/api/projects/"}

    },
    //create
    {
      path: "create",
      name: "projects.create",
      component: projectsCreate_Pg,
      meta: { requiresAuth: false },

    },
    //edit
    {
      path: "/projects/:id/edit",
      name: "projects.edit",
      component: projectsEdit_Pg,
      meta: { requiresAuth: false },

    },
  ],
},
  {
    // Cattura qualsiasi altra rotta non definita sopra.
    path: "/:catchAll(.*)",
    name: "not-found",
    component: NotFound_Pg,
  },
   /*  {
      path: "/",
      name: "home",
      component: Ambacabanane_Pg,
      //       meta: { requiresAuth: false }, 
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
    }, */
  ]
});

export { router };