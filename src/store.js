
/* STORE:VARIABILI GOLOBALI CHE SERVONO OVUNQUE NEL SITO: */
import axios from "axios";
import { router } from "./router";
import { reactive } from "vue";

export const store = reactive({

 //parametri 
 router: null,
 isAdmin: false,

 backedRootUrl: 'http://127.0.0.1:8000',

});

export function fetch(backedRootUrl, routeKey, my_params,return1,return2=null) {

 /*  console.log(my_params)
  let route = `${backedRootUrl}${routeKey}`
  console.log(route) */
 axios.get(`${backedRootUrl}${routeKey}`, {

  params: my_params
  /*   params: {
      ...my_params,
      a:"2" 
    }, */
 })
  .then((resp) => {
   console.log(my_params)

   console.log(resp.config.params)
   console.log(resp)

 
  });
}