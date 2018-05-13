<template>
  <div>
      <headerComponent></headerComponent>
      <toolbar></toolbar>
      <course></course>
      <footerComponent></footerComponent>
  </div>
</template>

<script>
import headerComponent from "../../components/header/Header.vue";
import footerComponent from "../../components/footer/Footer.vue";
import toolbar from '../../components/toolbar/Toolbar';
import course from '../../components/course/Course';


export default {
  name: "Index",
  components: {headerComponent, footerComponent, toolbar, course},
};

</script>
<style>
@import './styles/headerbase.css';
</style>
