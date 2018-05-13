<template>
  <div class="widget-tools">
    <div class="tips w128">
        <span class="tip-icon pull-left"></span>
        <span class="tip-text pull-left" id="tips" v-html="notice">
            	<!-- {% autoescape false %}[[notice]]{% endautoescape %} -->
        </span>
    </div>
</div>
</template>
<script>
import { mapGetters } from "vuex";

const fetchNoticeData = ({ store }) => {
  return store.dispatch("getNoticeInfo");
};

export default {
  computed: {
    ...mapGetters({
      notice: "getNoticeInfo"
    })
  },
  asyncData: fetchNoticeData,
  mounted() {
    fetchNoticeData({ store: this.$store });
  }
};
</script>
<style>
.widget-tools {
  .w128 {
    width: 85%;
    margin: 0 auto;
  }

  .tips {
    height: 40px;
    line-height: 40px;
    opacity: 0.8;
    font-size: 17px;
    margin-top: 20px;
    padding-left: 20px;
    border-radius: 5px;
    overflow: hidden;
    color: #fff;
    font-family: Mydance;
    background-image: url("images/bg.png");
  }

  .tip-text {
    margin-left: 5px;
    font-weight: 500;
    color: white;
    border-radius: 5px;
  }

  .tip-icon {
    height: 36px;
    width: 36px;
    background-image: url("images/speaker.png");
    background-size: 36px 36px;
    display: inline-block;
    margin-top: 2px;
  }
}
</style>


