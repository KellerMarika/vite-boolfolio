<template>
 <TheHeaderVue />
<h1 class="text-uppercase">abaut me</h1>

</template>

<script>
import axios from "axios";
import { store } from '../store';
import TheHeader from "../components/layout/TheHeader.vue"

export default {
 components: { TheHeader },
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