<template>
  <the-nav></the-nav>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheNav,
    TheFooter,
  },
};
</script>

<style>
.primary-font {
  font-family: "Nanum Pen Script", cursive;
  font-family: "Sometype Mono", monospace;
  font-family: "Space Mono", monospace;
}
</style>
