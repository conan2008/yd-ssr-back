<template>
  <div>
      <toolbar></toolbar>
      <course></course>
  </div>
</template>

<script>
import toolbar from '../../components/toolbar/Toolbar';
import course from '../../components/course/Course';

const fetchMainData = ({ store }) => {
  return store.dispatch("getMainData");
};

const fetchCourseData = ({ store }) => {
  return store.dispatch("getCourseData");
};

export default {
  name: "Index",
  components: {toolbar},
  // asyncData: [fetchMainData, fetchCourseData],
  asyncData: fetchMainData,
  mounted() {
    fetchMainData({ store: this.$store });
    // fetchCourseData({ store: this.$store });
  }
};

</script>