<template>
  <div class="main_content">
    <el-row :gutter="20" class="contest-module">
      <el-col :span="12">
        <div class="left__title">全国排位赛</div>
        <div class="left__card-list">
          <div class="contest-card" :style="{ backgroundImage: 'url(' + showPic('contest-card-bg1') + ')' }">
            <span class="contest-card__title">算法双周赛</span>
            <span class="contest-card__desc">综合测评个人能力</span>
          </div>
          <div class="contest-card" :style="{ backgroundImage:'url('+showPic('contest-card-bg2')+')'}">
            <span class="contest-card__title">编程实战赛</span>
            <span class="contest-card__desc">模拟实际工作场景</span>
          </div>
          <div class="contest-card" :style="{ backgroundImage:'url('+showPic('contest-card-bg3')+')'}">
            <span class="contest-card__title">百楼挑战赛</span>
            <span class="contest-card__desc">30天，用代码丈量你的成长</span>
          </div>
          <div class="contest-card" :style="{ backgroundImage:'url('+showPic('contest-card-bg4')+')'}">
            <span class="contest-card__title">蓝桥杯备赛专区</span>
            <span class="contest-card__desc">充电备考，6月夺冠</span>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="right__title">当前赛事</div>
        <div class="right__current-contest">
          <router-link to="/lanqiao">
            <img src="../assets/img/now_contest.png" alt="" class="contest-image">
          </router-link>
        </div>
      </el-col>
    </el-row>
    <div class="popular-picks">
      <div class="left">
        <div class="left__top">
          <div class="left__top-title">热门精选</div>
          <div class="left__top-tabs">
            <div class="course-tabs">
              <div class="options-wrap">
                <div @click="selectTab(v.id)" v-for="v in popular_tabs" :key="v.id"
                  :class="['course-tab', course_tab_active == v.id ? 'active' : '']">
                  {{ v.name }}
                </div>
              </div>
            </div>
          </div>
          <router-link to="/course" class="view-all left__view-all">
            <span>全部课程</span>
            <img src="../assets/icon/icon-arrow.png" alt="" class="icon-arrow">
          </router-link>
        </div>
        <div class="left__bottom">
          <div v-for="item in popular_tabs[course_tab_active - 1].content" :key="item.id" class="course-card">
            <div class="course" :style="{ backgroundImage: 'url('+showPic(item.bg)+')' }">
              <h3 class="course__title">{{ item.title }}</h3>
              <p class="course__desc">{{ item.info }}</p>
              <span class="course__level">
                {{ item.level }}·{{ item.num }}人学过
              </span>
            </div>
            <div v-show="item.vip" class="icon-member-free study-member-free"></div>
          </div>
        </div>
      </div>
      <div class="right">
        <img src="../assets/img/icon-hot.png" alt="" class="icon-hot">
        <img src="../assets/img/hot-list-title.png" alt="" class="icon-hot-list-title">
        <div class="hot-courses">
          <div class="hot-course-item">
            <img src="../assets/img/1.png" alt="" class="icon-index-1">
            <span class="name name--bold">
              oeasy 教您玩转 python
            </span>
          </div>
          <div class="hot-course-item">
            <img src="../assets/img/2.png" alt="" class="icon-index-2">
            <span class="name name--bold">
              夏令营：算法与数据结构
            </span>
          </div>
          <div class="hot-course-item">
            <img src="../assets/img/3.png" alt="" class="icon-index-3">
            <span class="name name--bold">
              软件设计师（软考中级）
            </span>
          </div>
          <div class="hot-course-item">
            <span class="index">4</span>
            <span class="name">
              第十五届蓝桥杯（软件测试）模拟赛 1 期题目
            </span>
          </div>
          <div class="hot-course-item">
            <span class="index">5</span>
            <span class="name">
              操作系统原理与实践
            </span>
          </div>
          <div class="hot-course-item">
            <span class="index">6</span>
            <span class="name">
              15届蓝桥杯备赛公开课回放
            </span>
          </div>
        </div>
        <div class="">
          <button type="button" class="btn-view-all ant-btn">
            <span>查看全部课程</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,inject,onBeforeMount } from 'vue'
import { showPic } from '@/utils/tools';

const axios = inject('$axios')
const course_tab_active = ref(1)
const popular_tabs = ref([
{
      "id": 1,
      "name": "春招急救指南",
      "content": [
        {
          "id": 1,
          "bg": "popular1.png",
          "title": "春招急救指南：前端开发",
          "info": "课程将对前端开发工程师在面试中遇到的问题逐一展开讲解，内容涵盖 HTML 及 CSS 基础到前端主流的 Vue / React 框架，总结前端面试中的常见知识点，同时提升应聘者的面试成功率（课程还包括如何与 HR 谈薪拿 offer)。",
          "level": "初级",
          "num": 454,
          "vip": 1
        },
        { 
          "id": 2,
          "bg": "popular2.png",
          "title": "春招急救指南：Java 开发",
          "info": " 春招在即，本课程教你3天搞定一份完美简历。Java 面试的第一轮和第二轮往往会以基础知识点为主，面试官通过问Java 基础、Java 虚拟机、Java 多线程、Java 框架以及 MySQL 等常见面试知识点，来考察应聘者的基础能力，这两轮的面试结果会极大地影响最终的面试结果。本次课程的目的是通过总结 Java 面试中的常见知识点，提升应聘者的面试成功率。",
          "level": "中级",
          "num": 642,
          "vip": 1
        },
        {
          "id": 3,
          "bg": "popular3.png",
          "title": "春招急救指南：Python 开发",
          "info": "春招在即，本课程教你3天搞定一份完美简历。Python 面试的第一轮和第二轮往往会以基础知识点为主，面试官通过问Python 基础、Python 虚拟机、Python 多线程、Python 框架以及 MySQL 等常见面试知识点，来考察应聘者的基础能力，这两轮的面 试结果会极大地影响最终的面试结果。本次课程的目的是通过总结 Python 面试中的常见知识点，提升应聘者的面试成功率。",
          "level": "高级",
          "num": 123,
          "vip": 1
        },
        {
          "id": 4,
          "bg": "popular4.png",
          "title": "春招急救指南：JavaScript 开发",
          "info": "春招在即，本课程教你3天搞定一份完美简历。JavaScript 面试的第一轮和第二轮往往会以基础知识点为主，面试官通过问JavaScript 基础、JavaScript 虚拟机、JavaScript 多线程、JavaScript 框架以及 MySQL 等常见面试知识点，来考察应聘者的基础能力，这两轮的面 试结果会极大地影响最终的面试结果。本次课程的目的是通过总结 JavaScript 面试中的常见知识点，提升应聘者的面试成功率。",
          "level": "高级",
          "num": 123,
          "vip": 1
        },
        {
          "id": 5,
          "bg": "popular5.png",
          "title": "算法工程师面试通关营",
          "info": "算法工程师面试通关营，通过算法面试的技巧和技巧，让你通过算法面试，轻松拿到offer。",
          "level": "高级",
          "num": 123,
          "vip": 1
        },
        {
          "id": 6,
          "bg": "popular6.png",
          "title": "前端工程师面试通关营",
          "info": "前端工程师面试通关营，通过前端面试的技巧和技巧，让你通过前端面试，轻松拿到offer。",
          "level": "高级",
          "num": 123,
          "vip": 1
        }
      ]
}
])
const selectTab = (id) => {
  course_tab_active.value = id;
}
onBeforeMount(() => {
  axios.get('/api/popular_courses').then(res => {
    popular_tabs.value = res.data
  })
})
</script>

<style scoped>
.main_content {
  margin: 0 auto;
  width: 1200px
}

.contest-card {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 88px;
  padding: 21px 0 21px 12px;
  -webkit-text-decoration: none;
  text-decoration: none;
  transition: all .2s;
  width: 288px;
  box-sizing: border-box;
}

.contest-card:hover {
  box-shadow: 0 4px 8px 0 rgba(21, 23, 26, .08)
}

.contest-card:hover .contest-card__title {
  color: #00a8eb
}

.contest-card__title {
  color: #000;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px
}

.contest-card__desc {
  color: #6b7986;
  font-size: 14px;
  font-weight: 400
}

.contest-module {
  margin-top: 88px
}

.contest-module .right {
  margin-left: 20px;
  width: 589px
}

.contest-module .left__title {
  color: #000;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px
}

.contest-module .left__card-list {
  grid-gap: 16px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto
}

.contest-module .right {
  margin-left: 20px;
  width: 589px
}

.contest-module .right__title {
  color: #000;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px
}

.contest-module .right__current-contest {
  background: #fff;
  border-radius: 8px;
  height: 192px;
  padding: 12px;
  width: 100%
}

.contest-module .right__current-contest .contest-image {
  border-radius: 8px;
  height: 100%;
  width: 100%
}


.popular-picks {
  display: flex;
  margin-top: 60px
}

.popular-picks .left {
  flex: 1 0 0
}

.popular-picks .left__top {
  align-items: center;
  display: flex;
  position: relative
}

.popular-picks .left__top-title {
  color: #000;
  flex-shrink: 0;
  font-size: 22px;
  font-weight: 600;
  margin-right: 40px
}

.popular-picks .left__top-tabs {
  width: 540px
}

.popular-picks .left__view-all {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%)
}

.course-tabs .options-wrap {
  align-items: center;
  display: flex;
  width: 100%
}

.course-tabs .options-wrap::-webkit-scrollbar {
  display: none
}

.course-tabs .course-tab {
  color: #6b7986;
  cursor: pointer;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 400
}

.course-tabs .course-tab:hover {
  color: #00a8eb
}

.course-tabs .course-tab+.course-tab {
  margin-left: 24px
}

.course-tabs .course-tab.active {
  background: #00a8eb;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding: 3px 8px
}

.view-all {
  align-items: center;
  color: #000;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  -webkit-text-decoration: none;
  text-decoration: none
}

.view-all:hover {
  color: #00a8eb
}

.view-all .icon-arrow {
  height: 21px;
  margin-left: 6px;
  width: 20px
}

.popular-picks .left__bottom {
  grid-gap: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  margin-top: 20px
}

.icon-member-free {
  background-image: url(../assets/icon/plus-vip-mini.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  height: 22px;
  width: 22px
}

.icon-member-free:after {
  content: "";
  display: block;
  height: 22px;
  transition: all .3s;
  width: 0
}

.icon-member-free:hover {
  background-image: none;
  height: 22px;
  width: 96px
}

.icon-member-free:hover:after {
  background-image: url(../assets/icon/plus-vip.png);
  background-size: 100% 100%;
  width: 96px
}

.course-card {
  background: #fff;
  border-radius: 8px;
  height: 180px;
  padding: 12px 11px;
  position: relative;
  -webkit-text-decoration: none;
  text-decoration: none;
  transition: all .2s;
  width: 288px
}

.course-card:hover {
  box-shadow: 0 4px 8px 0 rgba(21, 23, 26, .08)
}

.course-card:hover .course__title {
  color: #00a8eb
}

.course-card .course {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;
  padding-left: 11px;
  padding-right: 9px;
  padding-top: 14px;
  position: relative;
  width: 100%
}

.course-card .course__title {
  -webkit-line-clamp: 1;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px
}

.course-card .course__desc,
.course-card .course__title {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden
}

.course-card .course__desc {
  -webkit-line-clamp: 2;
  color: #6b7986;
  font-size: 14px;
  font-weight: 400;
  word-break: break-all
}

.course-card .course__level {
  bottom: 7px;
  color: #6b7986;
  font-size: 12px;
  font-weight: 400;
  left: 11px;
  position: absolute
}

.course-card .study-member-free {
  bottom: 17px;
  left: 250px;
  position: absolute;
  z-index: 1
}

.popular-picks .right {
  background-image: url(../assets/img/hot-bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 8px;
  height: 422px;
  margin-left: 16px;
  padding: 73px 18px 0 12px;
  position: relative;
  width: 288px
}

.popular-picks .right .btn-view-all {
  background: #f4f7fa;
  border: none;
  border-radius: 8px;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  margin-top: 25px;
  width: 259px
}

.popular-picks .icon-hot {
  height: 69px;
  left: 10px;
  position: absolute;
  top: -10px;
  width: 54px
}

.popular-picks .icon-hot-list-title {
  height: 23px;
  left: 70px;
  position: absolute;
  top: 23px;
  width: 109px
}

.popular-picks .hot-courses {
  position: relative;
  z-index: 4
}

.hot-course-item {
  align-items: center;
  color: #000;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  -webkit-text-decoration: none;
  text-decoration: none
}

.hot-course-item:not(:last-child) {
  margin-bottom: 16px
}

.hot-course-item .icon-index-1 {
  height: 29px;
  width: 14px
}

.hot-course-item .icon-index-2,
.hot-course-item .icon-index-3 {
  height: 17px;
  width: 14px
}

.hot-course-item .index {
  color: #b1bbc5;
  font-size: 22px;
  font-weight: 500
}

.hot-course-item .name {
  color: #6b7986;
  flex: 1;
  font-size: 16px;
  font-weight: 400;
  margin-left: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.hot-course-item .name:hover {
  color: #00a8eb
}

.hot-course-item .name--bold {
  color: #000;
  font-weight: 600
}
</style>