<template>
  <div id="app">
    <headerComponent></headerComponent>
    <router-view/>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import headerComponent from "./components/header/Header.vue";
import footerComponent from "./components/footer/Footer.vue";

export default {
  name: "App",
  components: {headerComponent, footerComponent}
}
</script>

