<template>
    <div class="banner">
        <div class="banner-content">
          <el-carousel ref="carousel" v-model="currentIndex" :initial-index="currentIndex" height="460px"
            class="custom-carousel" arrow="never" :interval="4000" :autoplay="true" indicator-position="none"
            @change="changeHandle">
            <ul class="category-list course-navigation">
              <li class="menu" v-for="v in categoryList" :key="v.id">
                <div class="content-box">
                  <span class="tag parent">{{ v.title }}:</span>
                  <span class="child">
                    <span class="tag text" v-for="item in v.subtypes" :key="item">{{ item }}</span>
                  </span>
                </div>
                <div class="menu-detail">
                  <div class="menu-detail__content">
                    <div class="block-wrap"><router-link to="/index" class="title link">
                        {{ v.title }}
                      </router-link>
                      <div class="menu-detail__tags">
                        <span class="tag menu-detail-tag" v-for="item in v.subtypes" :key="item">
                          {{ item }}
                        </span>
                      </div>
                    </div>
                    <div class="block-wrap recommend-block">
                      <div class="title">一周热门推荐</div>
                      <div class="recommend-block__list">
                        <router-link to="/index" class="recommend-wrap" v-for="v in recommend_courses" :key="v.id">
                          <img :src="v.picture_url" alt="course" class="picture">
                          <div class="name">
                            <div :title="v.name" class="course-title">{{ v.name }}</div>
                            <div class="detail"><span>{{ v.level }}｜</span> <span>{{ v.students_count }}人学过</span></div>
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="view-all">
                <router-link to="course">
                  <span>全部课程</span> 
                  <img src="../assets/icon/icon-arrow.png" alt="" class="icon-arrow">
                </router-link>
                </li>
            </ul>
            <el-carousel-item v-for="v in bannerList" :key="v.id">
              <img style="min-width: 100%;height: 100%;object-fit: cover;" :src="v.img" alt="">
            </el-carousel-item>
            <div class="navigation">
              <div class="navigation__titles">
                <div :class="['navigation-item', currentIndex == k.id ? 'navigation-active' : '']"
                  v-for="k in bannerList" :key="k.id" @mouseover="changeIndicator(k.id)">
                  <span class="navigation-item__title">
                    {{ k.title }}
                  </span>
                  <span class="navigation-item__subtitle">
                    {{ k.subtitle }}
                  </span>
                </div>
              </div>
            </div>
          </el-carousel>
          <div class="quick-entrance-bar quick-entrance-box">
            <div v-for="v in quick_entrance_list" :key="v.id" class="quick-entrance">
              <img :src="showIcon(v.pic)" alt="" class="quick-entrance__icon">
              <div class="quick-entrance__meta">
                <div class="meta-top">
                  <span class="meta-top__title">{{ v.title }}</span>
                  <span v-show="v.free" class="meta-top__tag">免费</span>
                  <img src="../assets/icon/icon-arrow.png" alt="" class="meta-top__icon-arrow">
                </div>
                <div class="meta-desc">{{ v.num }}+课程</div>
              </div>
              <div class="quick-entrance__popover">
                <div class="quick-entrance__popover-inner">
                  <div v-for="item in v.sub" :key="item.id" class="">
                    <div class="common-entrance-item">
                      <img :src="showIcon(item.pic)" alt="" class="common-entrance-item__icon">
                      <span class="common-entrance-item__name">{{ item.title }}</span>
                    </div>
                  </div>
                  <router-link to="course" class="btn-view-all">
                    <span class="btn-view-all__name">全部课程</span>
                    <img src="../assets/icon/icon-arrow.png" alt="" class="icon-arrow">
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import { ref, inject, onBeforeMount } from 'vue'
import {showPic,showIcon} from '../utils/tools'

const axios = inject('$axios')
const carousel = ref()
const currentIndex = ref(0)
const props = defineProps({bannerList: Array})

const changeHandle = (e) => {
  currentIndex.value = parseInt(e)
  document.querySelector('.banner').style.backgroundColor = props.bannerList[e].backGround
}
const changeIndicator = (index) => {
  carousel.value.setActiveItem(index)
  currentIndex.value = parseInt(index)
}
const recommend_courses= ref([])
const categoryList = ref([])
const quick_entrance_list = ref([
  {
    id: 0,
    title: '入门课',
    num: 176,
    pic: 'free',
    free: 1,
    sub: [
      {
        id: 0,
        title: 'Linux 基础入门',
        pic: 'Linux'
      },
      {
        id: 1,
        title: 'oeasy 教您玩转 python免费',
        pic: 'python'
      },
      {
        id: 2,
        title: 'C 语言简明教程',
        pic: 'c'
      },
    ]
  },
  {
    id: 1,
    title: '项目库',
    num: 176,
    pic: 'project',
    free: 0,
    sub: [
      {
        id: 0,
        title: 'SpringBoot + Vue 打造大病保险管理系统 ',
        pic: 'Linux'
      }
  ]
  },
  {
    id: 2,
    title: '学习路径',
    num: 176,
    pic: 'entrance',
    free: 0,
    sub: [
      {
        id: 0,
        title: 'Python研发工程师',
        pic: 'python'
      }
    ]
  },
  {
    id: 3,
    title: '在线实训班',
    num: 176,
    pic: 'class',
    free: 0,
    sub: [
      {
        id: 0,
        title: 'Java工程师面试通关营',
        pic: 'Java'
      }
    ]
  },
  {
    id: 4,
    title: '图书',
    num: 176,
    pic: 'book',
    free: 0,
    sub: [
      {
        id: 0,
        title: '程序设计竞赛专题挑战教程',
        pic: 'book_1'
      }
    ]
  }
])

const getCourseTypes = () => {
  axios.get('/api/course_types').then(res => {
    categoryList.value = res.data
  }).catch(err => {
      console.log(err)
    }
  )
}
const getRecommendCourses = () => {
  axios.get('/api/courses?recommend='+1).then(res => {
    recommend_courses.value = res.data
  }).catch(err => {
      console.log(err)
    }
  )
}
onBeforeMount(() => {
  getCourseTypes()
  getRecommendCourses()
})
</script>

<style scoped>
.banner {
  width: 100%;
  height: 480px;
  padding-top: 20px;
  position: relative;
  background-color: #857CFB;
}


.tag:hover {
  color: #00a8eb !important
}

.tag.text:after {
  content: "/";
  margin: 0 5px;
  color: #e0e7ee;
  font-size: 14px;
}

.banner-content {
  margin: 0 auto;
  position: relative;
  width: 1200px;
  z-index: 2
}

.custom-carousel {
  width: 100%;
}

.el-carousel__item {
  transition: none !important;
}

.banner .navigation {
  height: 460px;
  margin: 0 auto;
  position: relative;
  width: 1200px
}

.banner .navigation__titles {
  position: absolute;
  right: 0;
  top: 77px;
  z-index: 2
}

.banner .navigation .navigation-item {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: right;
  width: 217px
}

.banner .navigation .navigation-item:not(:last-child) {
  margin-bottom: 16px
}

.banner .navigation .navigation-item.navigation-active {
  padding: 9px 8px 9px 0
}

.banner .navigation .navigation-item.navigation-active:after {
  background: linear-gradient(270deg, rgba(0, 0, 0, .36), hsla(0, 0%, 100%, 0));
  bottom: 0;
  content: "";
  left: 0;
  opacity: .45;
  position: absolute;
  right: 0;
  top: 0
}

.banner .navigation .navigation-item.navigation-active .navigation-item__title {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  opacity: 1
}

.banner .navigation .navigation-item.navigation-active .navigation-item__subtitle {
  color: #e0e7ee;
  display: block;
  font-size: 12px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 2px 4px rgba(0, 0, 0, .5);
  white-space: nowrap
}

.banner .navigation .navigation-item__title {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  opacity: .5;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 2px 4px rgba(0, 0, 0, .5);
  white-space: nowrap
}

.banner .navigation .navigation-item__subtitle {
  display: none
}

.banner .carousel__titles {
  background: rgba(0, 0, 0, .5);
  bottom: 0;
  height: 60px;
  left: 0;
  position: absolute;
  width: 100%
}

.banner .category-list {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background: rgba(12, 17, 31, .25);
  border-radius: 8px;
  box-sizing: border-box;
  height: 338px;
  list-style: none;
  padding-top: 10px;
  position: relative;
  width: 230px;
  z-index: 3
}

.banner .category-list.course-navigation {
  position: absolute;
  top: 77px;
  left: 0;
}

.banner .menu {
  height: 42px;
  padding: 0 5px;
}

.banner .menu:not(:last-child) {
  margin-bottom: 7px
}

.banner .menu .content-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 11px
}

.banner .menu:hover .content-box {
  background: rgba(0, 0, 0, .24);
  border-radius: 4px
}

.banner .menu:hover .menu-detail {
  display: block
}

.banner .menu .content-box .parent {
  color: #fff;
  font-size: 13px;
  font-weight: 500
}

.banner .menu .content-box .child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.banner .menu .content-box .child .text,
.banner .menu .content-box .child {
  color: #e0e7ee;
  font-size: 12px;
  font-weight: 400
}

.banner .category-list .view-all {
  border-top: 1px solid hsla(0, 0%, 100%, .25);
  height: 30px;
  line-height: 30px;
  padding-left: 16px;
  padding-top: 2px;
}

.banner .category-list .view-all a {
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  -webkit-text-decoration: none;
  text-decoration: none
}

.banner .category-list .view-all .icon-arrow {
  height: 16px;
  margin-left: 6px;
  width: 16px
}

.banner .menu .menu-detail {
  display: none;
  left: 230px;
  padding-left: 13px;
  position: absolute;
  top: 0
}

.banner .menu .menu-detail__content {
  background: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  height: 338px;
  padding: 24px 24px 42px 20px;
  width: 957px
}

.banner .menu .menu-detail__tags {
  grid-gap: 16px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 30px 30px 30px;
  height: 122px;
  margin-bottom: 24px
}

.banner .menu .menu-detail .recommend-block {
  margin-top: 24px
}

.banner .menu .menu-detail .recommend-block__list {
  grid-gap: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto
}

.banner .menu .menu-detail-tag {
  background: #f4f7fa;
  border-radius: 4px;
  color: #6b7986;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  height: 30px;
  line-height: 30px;
  margin-bottom: 0;
  text-align: center;
  width: 100px
}

.banner .menu .menu-detail .divider:after {
  background: #c7d2e2;
  content: "";
  display: inline-block;
  height: 10px;
  margin-left: 14px;
  width: 1px
}

.banner .menu:hover .content-box {
  background: rgba(0, 0, 0, .24);
  border-radius: 4px
}

.banner .menu:hover .menu-detail {
  display: block
}

.banner .block-wrap .title {
  color: #15171a;
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px
}

.banner .recommend-wrap {
  display: flex;
  -webkit-text-decoration: none;
  text-decoration: none
}

.banner .recommend-wrap .picture {
  background: #d8d8d8;
  border-radius: 6px;
  height: 40px;
  margin-right: 8px;
  width: 40px
}

.banner .recommend-wrap .name {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #565656;
  display: -webkit-box;
  font-size: 12px;
  line-height: 18px;
  width: 160px
}

.banner .recommend-wrap .name:hover {
  color: #2e7eee
}

.banner .recommend-wrap .name .course-title {
  color: #15171a;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 161px
}

.banner .recommend-wrap .name .detail {
  color: #a0abb5;
  font-size: 12px;
  font-weight: 400
}

.banner .recommend-wrap .name .fee-type {
  border-radius: 17px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  margin-right: 5px;
  padding: 0 7px 1px
}

.banner .recommend-wrap .name .fee-type.bootcamp {
  background: #2e7eee
}

.banner .recommend-wrap .name .fee-type.member {
  background: #f57e14
}

.banner .recommend-wrap .name .fee-type.free,
.banner .recommend-wrap .name .fee-type.limit_free {
  background: #80c269
}

.banner .recommend-wrap .name .icon-shape {
  fill: #999;
  margin: 0 5px 0 0
}



.quick-entrance {
  cursor: pointer;
  display: flex;
  padding: 16px 0
}

.quick-entrance:hover .quick-entrance__meta .meta-top__title {
  color: #00a8eb
}

.quick-entrance:not(:last-child) {
  margin-right: 64px
}

.quick-entrance__popover {
  display: none;
  left: 0;
  padding-top: 8px;
  position: absolute;
  top: 83px;
  width: 100%;
}

.quick-entrance__popover-inner {
  grid-gap: 16px 24px;
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px 0 rgba(21, 23, 26, .08);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  height: 100%;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
}

.quick-entrance__popover-inner a {
  -webkit-text-decoration: none;
  text-decoration: none
}

.quick-entrance:hover .quick-entrance__popover {
  display: block
}

.quick-entrance__icon {
  height: 50px;
  margin-right: 20px;
  width: 50px
}

.quick-entrance__meta .meta-top {
  align-items: center;
  display: flex
}

.quick-entrance__meta .meta-top__title {
  color: #15171a;
  font-size: 16px;
  font-weight: 500
}

.quick-entrance__meta .meta-top__tag {
  background: #00a8eb;
  border-radius: 8px;
  color: #fff;
  font-size: 10px;
  font-weight: 400;
  height: 15px;
  line-height: 15px;
  margin-left: 2px;
  text-align: center;
  width: 30px
}

.quick-entrance__meta .meta-top__icon-arrow {
  height: 20px;
  margin-left: 4px;
  width: 20px
}

.quick-entrance__meta .meta-desc {
  color: #6b7986;
  font-size: 14px;
  font-weight: 400;
  margin-top: 9px
}

.quick-entrance-bar {
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  height: 83px;
  padding: 0 21px 0 24px;
  position: relative;
  width: 100%;
}

.quick-entrance-box {
  position: absolute;
  left: 0;
  top: 430px;
  box-sizing: border-box;
}

.common-entrance-item {
  align-items: center;
  display: flex
}

.common-entrance-item:hover .common-entrance-item__name {
  color: #00a8eb
}

.common-entrance-item__icon {
  height: 40px;
  margin-right: 8px;
  width: 40px
}

.common-entrance-item__name {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #15171a;
  display: -webkit-box;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden
}

.btn-view-all {
  align-items: center;
  background: #f4f7fa;
  border-radius: 4px;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 201px
}

.btn-view-all:hover .btn-view-all__name {
  color: #00a8eb
}

.btn-view-all__name {
  color: #000;
  font-size: 14px;
  font-weight: 500
}

.btn-view-all .icon-arrow {
  height: 20px;
  margin-left: 6px;
  width: 20px
}
</style>