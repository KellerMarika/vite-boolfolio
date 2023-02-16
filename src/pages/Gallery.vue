<template>

<h1 class="text-uppercase">gallery</h1>

</template>

<script>
import axios from "axios";
import { store } from '../store';


export default {
 components: {},
 data() {
   return {
     store,
     router:store.router,
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
<style lang="scss" scoped>
@use "../styles/generic.scss";
@use "../styles/partials/variables" as *;

</style>