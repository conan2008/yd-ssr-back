<template>
  <div>
    <div class="widget-course w128">
        <div class="title">
            <p class="course_outline">课程大纲</p>
            <div class="spliter"></div>
        </div>
     <div class="csshub-loading-icon"  v-show="course"></div>
        <div class="list">
             <div class="item" :key="ind" v-for="(item,ind) in courseInfo.course"  v-cloak>
                <div class="category gray-center" :class="[item.imgsrc,{'gray':item.videourl==''}]">
                    <div class="course-box">
                        <div class="course-info">
                            <div class="btn-group" role="group">
                                <a class="btn btn-default" :href="item.videourl">预习课程</a>
                                 <a class="btn btn-default" :href="item.classourl">线下课堂</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    <div class="widget-exam w128">
        <div class="title">
            <p class="course_outline">成果测评</p>
            <div class="spliter"></div>
        </div>
         <div class="csshub-loading-icon"  v-show="results"></div>
        <div class="exam-content">
            <div class="task" :key="ind" v-for="(list,ind) in courseInfo.result" :class="{ 'active':list.score>=80 }" v-cloak>
                <div class="task-title"> <a target="_blank" :href="list.paperid" >{{list.index}}</a></div>
                <div class="task-score" >{{list.score}}</div>
            </div>
        </div>
    </div>
    <div class="widget-task w128">
        <div class="title">
             <p class="course_outline">实战任务</p>
            <div class="spliter"></div>
        </div>
                <div class="csshub-loading-icon"  v-show="results"></div>
    <div class="task-content">
        <div class="task" :key="ind" v-for="(list,ind) in courseInfo.result" :class="{ 'active':list.score>=80 }" v-cloak>
            <a :href="list.idurl" style="display: inline-block;width: 100%;height: 100%;color:white" target="_blank" >{{ list.index}}</a>
        </div>
    </div>
</div>
</div>

</template>

<script>
import { mapGetters } from "vuex";

const fetchCourseData = ({ store }) => {
  return store.dispatch("getCourseData");
};

export default {
  data() {
    return {
      course: true,
      results: true,
      isShow: false,
      msg: "课程大纲"
    };
  },
  asyncData: fetchCourseData,
  computed: {
    ...mapGetters({
      courseInfo: "getCourseData"
    })
  },
  methods: {
    init() {
      console.log(this.courseInfo);
      if (this.courseInfo.course) {
        this.course = false;
      }
      if (this.courseInfo.result) {
        this.results = false;
      }
    }
  },
  mounted() {
    fetchCourseData({ store: this.$store });
    this.init();
  }
};
</script>

<style scoped>
@import "./styles/task.css";
@import "./styles/examine.css";

:root {
  --cupSize: 200px;
  --cupBeforeSize: 100px;
}

[v-cloak] {
  display: none;
}

.csshub-loading-icon {
  margin: 10px auto;
  padding: 10px;
  width: 10px;
  height: 10px;
  border-top: 20px solid #ed5548;
  border-right: 20px solid #599cd3;
  border-bottom: 20px solid #5cbd5e;
  border-left: 20px solid #fdd901;
  background: transparent;
  -webkit-animation: csshub-rotate-right-round 1200ms ease-in-out infinite
    alternate;
  animation: csshub-rotate-right-round 1200ms ease-in-out infinite alternate;
}

@-webkit-keyframes csshub-rotate-right-round {
  0% {
    -webkit-transform: rotate(0deg);
  }

  50% {
    -webkit-transform: rotate(180deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    -webkit-border-radius: 50%;
  }
}

@keyframes csshub-rotate-right-round {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
    border-radius: 50%;
  }
}

.widget-course {
  .gray {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray;
  }

  padding-top: 40px;

  .js {
    background-image: url("images/es6.png");
  }

  .node {
    background-image: url("images/node.png");
  }

  .engineering {
    background-image: url("images/engineering.png");
  }

  .performance {
    background-image: url("images/perman.png");
  }

  .mvvm {
    background-image: url("images/mvvm.png");
  }

  .algorithm {
    background-image: url("images/algorithm.png");
  }

  .circuit {
    background-image: url("images/circuit.png");
  }

  .css {
    background-image: url("images/css.png");
  }

  .graphics {
    background-image: url("images/graphics.png");
  }

  .safe {
    background-image: url("images/safe.png");
  }

  .bat {
    background-image: url("images/bat.png");
  }

  .a1 {
    background-image: url("images/1.png");
  }

  .a2 {
    background-image: url("images/2.png");
  }

  .a3 {
    background-image: url("images/3.png");
  }

  .a4 {
    background-image: url("images/4.png");
  }

  .a5 {
    background-image: url("images/5.png");
  }

  .a6 {
    background-image: url("images/6.png");
  }

  .a7 {
    background-image: url("images/7.png");
  }

  .a8 {
    background-image: url("images/8.png");
  }

  .a9 {
    background-image: url("images/9.png");
  }

  .a10 {
    background-image: url("images/10.png");
  }

  .a11 {
    background-image: url("images/11.png");
  }

  .a12 {
    background-image: url("images/12.png");
  }

  .a13 {
    background-image: url("images/13.png");
  }

  .a14 {
    background-image: url("images/14.png");
  }

  .a15 {
    background-image: url("images/15.png");
  }

  .a16 {
    background-image: url("images/16.png");
  }

  .category {
    background-repeat: no-repeat;
    background-position: 6px 8px;
    background-size: 335px;
    height: 274px;
    width: 357px;
  }

  .course-box {
    height: 100%;
    background-image: url("images/course_frame.png");
    position: relative;
  }

  .category-left {
    float: left;
  }

  .category-center {
    margin: 0 auto;
  }

  .category-right {
    float: right;
  }

  .course-info {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 90px;
    text-align: center;
  }

  .btn-group {
    margin-top: 15px;
  }

  .list {
    overflow: hidden;
  }

  .item {
    float: left;
    width: 33.33%;
    margin: 10px 0;
  }
}
</style>


