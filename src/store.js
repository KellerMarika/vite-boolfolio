
/* STORE:VARIABILI GOLOBALI CHE SERVONO OVUNQUE NEL SITO: */
import { router } from "./router";
import { reactive } from "vue";

export const store = reactive({

 //parametri 
 router: null,
 isAdmin: false,

 rootApi_Url: 'http://127.0.0.1:8000',

 currentRoute: null,//route.(cerca in istanza)
 currentPage: null,
 //api_key: '',

 //language: "it-",
 //queryId: null,



});

