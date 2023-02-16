<template>

<TheHeader></TheHeader>
  <router-view></router-view>

</template>

<script>
import axios from "axios";
import TheHeader from "./components/layout/TheHeader.vue";

import { router } from "./router"
import { store } from './store';


export default {
  components: { TheHeader },
  data() {
    return {
      store,
      router,
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
<style lang="scss">
@use "./styles/generic.scss";
@use "./styles/partials/variables" as *;

</style>