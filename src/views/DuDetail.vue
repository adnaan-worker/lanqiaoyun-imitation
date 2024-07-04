<template>
  <div class="du">
    <div class="course-page-top-section-container" v-show="top_ad">
      <div class="section-ad-wrap">
        <router-link to="/index">
          <img src="../assets/img/topbannerpc.png" class="ad-pic">
        </router-link>
        <el-icon @click="top_ad = false" class="icon-close">
          <Close />
        </el-icon>
      </div>
    </div>
    <Header :headerTheme="headerTheme"></Header>
    <div class="course-page-wrap">
      <div class="common-course-detail">
        <div class="fixed-tabs" v-show="nav_show" :style="{ top: top_ad ? '70px' : '0px' }">
          <div class="tabs-content">
            <div class="left">
              <div class="tabs">
                <div class="tab-item active">
                  课程介绍
                </div>
                <div class="tab-item">
                  章节目录
                </div>
                <div class="tab-item">
                  课程问答&amp;报告
                </div>
                <div class="tab-item">
                  课程评价
                  <span class="tab-comments-count">
                    {{ course_detail.comments_count }}
                  </span>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="base-btns">
                <el-button type="primary" size="large" round>
                  加入课程
                </el-button>
              </div>
            </div>
          </div>
        </div>
        <div class="mask"></div>
        <div class="common-course-detail__content">
          <div class="top">
            <div class="operation-items operations">
              <div class="operation-item">
                <el-icon class="lq-icon">
                  <Star />
                </el-icon>
                <span class="text">
                  关注
                </span>
              </div>
              <div class="operation-item">
                <el-icon>
                  <Share />
                </el-icon>
                <span class="text">分享</span>
              </div>
            </div>
            <div class="course-meta-wrap"><!---->
              <div class="name-wrap">
                <span :title="course_detail.name" class="course-name">{{ course_detail.name }}</span>
                <span v-show="course_detail.fee_type == 'free'" class="course-fee-type">免费</span>
              </div>
              <div class="course-tags">
                <span v-for="v in course_detail.tags" :key="v" class="course-tag-item">
                  {{ v }}
                </span>
              </div>
              <div class="bottom-wrap">
                <div class="course-other-info">
                  <span>{{ course_detail.students_count }}人学过</span>
                  <span>{{ course_detail.comments_count }} 次评价</span>
                  <span>难度: {{ course_detail.level }}</span>
                  <span>综合评分：
                    <img src="../assets/icon/star.svg" class="icon-star">
                    {{ course_detail.average_score }}
                  </span>
                  <span>
                    {{ $dayjs(course_detail.updated_time).format('YYYY-MM-DD') }} 更新
                  </span>
                </div>
              </div>
            </div> <!---->
          </div>
          <div v-if="course_detail.fee_type == 'free' || course_detail.fee_type == 'limit_free'" class="common-panel">
            <div class="free-info">
              <span class="free-tag">免费</span>
              <span class="free-tip"> 所有用户皆可免费学习该课程</span>
            </div>
            <div class="base-btns">
              <el-button type="primary" size="large" round>加入课程</el-button>
            </div>
          </div>
          <div v-else class="common-panel common-panel">
            <div class="left">
              <div class="left-top">
                <div class="discount-tag">
                  限时优惠
                </div>
                <div class="price-info">
                  <div class="real-price"><span class="digit">¥</span>
                    {{ course_detail.real_price }}
                  </div> <span class="origin-price"> ¥{{ course_detail.price }} </span>
                </div> <img src="../assets/icon/plus-vip.png" alt="" class="icon-premium-discount">
              </div>
              <div class="activity-countdown"><img src="../assets/icon/time.png" alt="" class="icon-countdown"> <span>
                  还剩 {{ date.day }} 天 {{ date.hour }}:{{ date.minutes }}:{{ date.seconds }} 结束
                </span></div>
            </div>
            <div class="right">
              <div class="base-btns">
                <el-button type="danger" size="large" disabled round>
                  立即报名
                </el-button>
                <el-button type="danger" size="large" round>
                  拼团购买 ¥{{ course_detail.real_price-10 }}
                </el-button>
              </div>
            </div>
          </div>
          <div>
            <div id="course-tabs-wrap" class="course-tabs-wrap">
              <div class="course-tab-item active">课程介绍</div>
              <div class="course-tab-item">章节目录</div>
              <div class="course-tab-item">课程问答&amp;报告</div>
              <div class="course-tab-item">课程评价<span class="tab-comments-count">{{ course_detail.comments_count
                  }}</span></div>
            </div>
          </div>
          <div class="common-course-introduction">
            <div class="content-box">
              <div class="title-wrap">
                <img src="../assets/icon/icon-title.png" class="icon-title">
                <span class="text">你将学到的</span>
              </div>
              <div class="content">
                <div class="points-wrap">
                  <div class="point" v-for="v in course_detail.points" :key="v">
                    <img src="../assets/icon/yes.png" class="icon-point">
                    <span :title="v" class="text">{{ v }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-box">
              <div class="title-wrap">
                <img src="../assets/icon/icon-title.png" class="icon-title">
                <span class="text">详细介绍</span>
              </div>
              <div class="content">
                <div class="long-description">
                  <div>
                    <div class="markdown-body">
                      <h3 id="先学知识">先学知识</h3>
                      <ul>
                        <li>需要了解蓝桥云课的基本操作，推荐学习 <span>新手入门指南</span>；</li>
                        <li>如果你没有接触过 PHP 编程语言，推荐学习 <span>PHP 编程入门</span>。</li>
                      </ul>
                      <h3 id="课程难度">课程难度</h3>
                      <ul>
                        <li>本课程难度为简单。</li>
                      </ul>
                      <h3 id="面向用户">面向用户</h3>
                      <ul>
                        <li>本课程为 JavaScript 的入门课程，面向完全没有经验的新手，但推荐先学习 HTML 基础课和 CSS 基础课。</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { onMounted, ref, inject, onBeforeMount } from 'vue'

const axios = inject('$axios')
const headerTheme = ref('white')
const props = defineProps(["id"])
const top_ad = ref(true)
const nav_show = ref(false)
const course_detail = ref({})
const date = ref({
  day: 0,
  hour: 0,
  minutes: 0,
  seconds: 0
})
let diff = ref(30 * 24 * 60 * 60 * 1000);



onBeforeMount(() => {
  axios.get('/api/courses?id=' + props.id).then(res => {
    course_detail.value = res.data[0];
  }).catch(err => {
    console.log(err);
  });
})
onMounted(() => {
  window.addEventListener('scroll', scroll)
  setInterval(() => {
    diff.value -= 1000;
    if (diff.value > 0) {
      const day = Math.floor(diff.value / (1000 * 60 * 60 * 24))
      const hour = Math.floor((diff.value / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff.value / (1000 * 60)) % 60)
      const seconds = Math.floor((diff.value / 1000) % 60)
      date.value.day = day
      date.value.hour = hour
      date.value.minutes = minutes
      date.value.seconds = seconds
    } else {
      date.value.day = 0
      date.value.hour = 0
      date.value.minutes = 0
      date.value.seconds = 0
      clearInterval()
    }

  }, 1000)
})
const scroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 450) {
    nav_show.value = true
  } else {
    nav_show.value = false
  }
}
</script>

<style scoped>
.course-page-top-section-container {
  position: sticky;
  top: 0;
  z-index: 6;
}

.section-ad-wrap {
  position: relative
}

.section-ad-wrap .ad-pic {
  height: 70px;
  width: 100%
}

.section-ad-wrap .icon-close {
  color: #fff;
  cursor: pointer;
  height: 30px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px
}

.fixed-right {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 10px;
  z-index: 99
}

.fixed-right {
  margin-bottom: 10px
}

.fixed-tabs {
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(229, 235, 241, .5);
  height: 70px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 999
}

.fixed-tabs .tabs-content {
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  width: 1200px
}

.fixed-tabs .tabs-content .left .tabs,
.fixed-tabs .tabs-content {
  align-items: center;
  display: flex
}

.fixed-tabs .tabs-content .left .tabs .tab-item {
  color: #999;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  height: 100%;
  position: relative
}

.fixed-tabs .tabs-content .left .tabs .tab-item.active {
  color: #333
}

.fixed-tabs .tabs-content .left .tabs .tab-item:not(:last-child) {
  margin-right: 60px
}

.fixed-tabs .tabs-content .left .tabs .tab-item .tab-comments-count {
  color: #999;
  font-size: 12px;
  font-weight: 400;
  left: 80px;
  position: absolute;
  top: -6px
}

.fixed-tabs .tabs-content .left .tabs .tab-item .icon-trial {
  height: 18px;
  position: absolute;
  right: -36px;
  top: -9px;
  width: 36px
}

.fixed-tabs .tabs-content .right {
  align-items: center;
  display: flex
}

.fixed-tabs .tabs-content .right .price-info {
  align-items: center;
  display: flex;
  margin-right: 16px
}

.fixed-tabs .tabs-content .right .price-info .real-price {
  color: #e00;
  font-size: 20px;
  font-weight: 600
}

.fixed-tabs .tabs-content .right .price-info .origin-price {
  color: #898989;
  font-size: 14px;
  font-weight: 400;
  margin-left: 4px;
  -webkit-text-decoration: line-through;
  text-decoration: line-through
}

.course-page-wrap {
  min-height: calc(100vh - 263px);
  width: 100%
}

.common-course-detail {
  height: 100%;
  min-height: 100vh;
  position: relative;
  width: 100%
}

.common-course-detail:before {
  background-image: url("../assets/img/byscript-20211217.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  content: "";
  filter: blur(20px);
  height: calc(100vh - 100px);
  left: 0;
  opacity: 0.3;
  position: absolute;
  top: 0;
  width: 100%
}

.common-course-detail .mask {
  background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, .4) 9%, hsla(0, 0%, 100%, .5) 17%, hsla(0, 0%, 100%, .7) 32%, #f8f9f9 60%, #f8f9f9);
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1
}

.common-course-detail .common-course-detail__content {
  position: relative;
  z-index: 1
}

.common-course-detail .common-course-detail__content .top {
  margin: 0 auto;
  position: relative;
  width: 1200px
}

.common-course-detail .common-course-detail__content .top .operations {
  position: absolute;
  right: 0;
  top: 20px;
  z-index: 2
}

.common-course-detail .common-course-detail__content .top .user-study-progress {
  bottom: 0;
  position: absolute;
  right: 0
}

.common-course-detail .tab-comments-count {
  color: #999;
  font-size: 12px;
  font-weight: 400;
  left: 64px;
  position: absolute;
  top: -6px
}

.operation-items {
  position: absolute;
  right: 20px;
  top: 20px
}

.operation-items a {
  margin-right: 16px;
  -webkit-text-decoration: none;
  text-decoration: none
}

.operation-item {
  align-items: center;
  background: rgba(0, 0, 0, .2);
  border-radius: 13px;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  font-weight: 500;
  height: 26px;
  justify-content: center;
  padding: 0 8px
}

.operation-item:not(:last-child) {
  margin-right: 16px
}

.operation-item .text {
  margin-left: 3px
}

.common-course-detail .icon-trial {
  height: 18px;
  position: absolute;
  right: -36px;
  top: -9px;
  width: 36px
}

.course-page-wrap {
  min-height: calc(100vh - 263px);
  width: 100%
}

.course-bread-crumb .breadcrumb-item+.breadcrumb-item:before {
  content: "," !important
}

.course-bread-crumb .breadcrumb-item:last-child:before,
.course-bread-crumb .breadcrumb-item:nth-child(2):before {
  content: "/" !important
}

.bootcamp-fixed-coupon {
  bottom: 12%;
  left: 50px;
  position: fixed;
  z-index: 99
}

.course-meta-wrap {
  margin: 0 auto;
  padding-top: 64px;
  position: relative;
  width: 100%
}

.course-meta-wrap .operation-tag {
  background: linear-gradient(180deg, #fdad30, #ec451a);
  border-radius: 0 12px 12px 0;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  height: 24px;
  left: 17px;
  line-height: 24px;
  padding-left: 15px;
  padding-right: 8px;
  position: absolute;
  top: 34px
}

.course-meta-wrap .operation-tag:before {
  background-image: url(../assets/img/icon-operation-tag.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  content: "";
  height: 28px;
  left: -17px;
  position: absolute;
  top: -2px;
  width: 28px
}

.course-meta-wrap .name-wrap {
  display: flex
}

.course-meta-wrap .name-wrap .course-name {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #000;
  display: -webkit-box;
  font-size: 40px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis
}

.course-meta-wrap .name-wrap .course-fee-type {
  background: #2e7eee;
  border-radius: 12px;
  color: #fff;
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 400;
  height: 24px;
  line-height: 24px;
  margin-left: 8px;
  margin-top: 16px;
  padding: 0 10px
}

.course-meta-wrap .course-tags {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px
}

.course-meta-wrap .course-tags .course-tag-item {
  background: hsla(0, 0%, 100%, .8);
  border-radius: 4px;
  color: #000;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 400;
  height: 28px;
  line-height: 28px;
  margin-bottom: 12px;
  padding: 0 10px
}

.course-meta-wrap .course-tags .course-tag-item:not(:last-child) {
  margin-right: 12px
}

.course-meta-wrap .bottom-wrap {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 48px
}

.course-meta-wrap .course-other-info {
  align-items: center;
  color: #333;
  display: flex;
  font-size: 14px;
  font-weight: 500
}

.course-meta-wrap .course-other-info span {
  align-items: center;
  display: flex
}

.course-meta-wrap .course-other-info span:not(:last-child):after {
  background: #333;
  content: "";
  display: inline-block;
  height: 14px;
  margin: 0 12px;
  width: 1px
}

.common-panel {
  align-items: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgba(230, 235, 240, .5);
  display: flex;
  height: 96px;
  justify-content: space-between;
  margin: 32px auto 0;
  padding: 0 40px;
  width: 1200px
}

.common-panel {
  height: 110px;
  position: relative
}

.left .left-top {
  align-items: center;
  display: flex;
  height: 50px
}

.left .left-top .price-info {
  align-items: baseline;
  display: flex
}

.left .left-top .icon-premium-discount {
  height: 22px;
  margin-left: 15px;
  width: 90px
}

.discount-tag {
  border: 1px solid #f64600;
  border-radius: 2px;
  color: #f64600;
  font-size: 14px;
  font-weight: 500;
  height: 26px;
  line-height: 26px;
  margin-right: 8px;
  padding: 0 8px;
  text-align: center
}

.real-price {
  color: #da1919;
  font-size: 40px;
  font-weight: 500;
  margin-right: 8px
}

.real-price .digit {
  font-size: 26px
}

.origin-price {
  color: #666;
  font-size: 14px;
  font-weight: 400;
  -webkit-text-decoration: line-through;
  text-decoration: line-through
}

.activity-countdown {
  align-items: center;
  background: #fff3f3;
  border-radius: 13px;
  color: #da1919;
  display: inline-flex;
  font-size: 14px;
  font-weight: 400;
  padding: 3px 12px
}

.activity-countdown .icon-countdown {
  height: 14px;
  margin-right: 6px;
  width: 14px
}

.free-info {
  align-items: center;
  display: flex
}

.free-info .free-tag {
  background: #80c269;
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  height: 21px;
  line-height: 21px;
  margin-right: 10px;
  text-align: center;
  width: 56px
}

.free-info .free-tip {
  color: #000;
  font-size: 16px;
  font-weight: 400
}

.free-info {
  align-items: center;
  display: flex;
  margin-bottom: 10px
}

.free-info .free-tag {
  background: #80c269;
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  height: 21px;
  line-height: 21px;
  margin-right: 10px;
  text-align: center;
  width: 56px
}

.free-info .free-tip {
  color: #000;
  font-size: 16px;
  font-weight: 400
}

.course-tabs-wrap {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 64px 0 32px;
  width: 100%
}

.course-tabs-wrap.fixed {
  left: 0;
  position: fixed;
  right: 0;
  top: 0
}

.course-tab-item {
  color: #090909;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  position: relative
}

.course-tab-item:not(:last-child) {
  margin-right: 60px
}

.course-tab-item.active {
  color: #0080f6
}

.course-tab-item.active:after {
  border: 2px solid #0080f6;
  bottom: -9px;
  content: "";
  height: 1px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 21px
}

.common-course-introduction {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 6px 16px 0 rgba(51, 51, 65, .05);
  margin: 0 auto;
  padding: 24px;
  width: 1200px
}

.content-box:not(:first-child) {
  margin-top: 40px
}

.content-box .title-wrap {
  align-items: center;
  display: flex
}

.content-box .title-wrap .icon-title {
  height: 11px;
  margin-right: 8px;
  width: 15px
}

.content-box .title-wrap .text {
  color: #333;
  font-size: 20px;
  font-weight: 500
}

.content-box .content {
  margin-top: 24px
}

.points-wrap {
  align-items: center;
  display: flex
}

.points-wrap {
  background-image: url(../assets/img/points-bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%
}

.points-wrap .point {
  flex: 0 0 33.33%;
  margin-top: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.points-wrap .point:first-child,
.points-wrap .point:nth-child(2),
.points-wrap .point:nth-child(3) {
  margin-top: 0
}

.points-wrap .point .icon-point {
  height: 16px;
  margin-right: 8px;
  width: 16px;
  display: inline-block;
}

.points-wrap .point .text {
  color: #333;
  font-size: 15px;
  font-weight: 400
}

.long-description {
  position: relative
}

.long-description .back-tip-wrap {
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 3px auto 0
}

.long-description .back-tip-wrap .text {
  color: #898989;
  font-size: 13px;
  font-weight: 400;
  margin-right: 4px
}

.long-description .back-tip-wrap .icon-arrow-up {
  height: 11px;
  transform: rotate(180deg);
  width: 11px
}

.long-description .mask {
  background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff);
  border-radius: 10px;
  bottom: 0;
  height: 96px;
  left: 0;
  position: absolute;
  right: 0;
  width: 100%;
  z-index: 3
}

.long-description .mask .mask__tip {
  align-items: center;
  bottom: 0;
  cursor: pointer;
  display: inline-flex;
  left: 50%;
  position: absolute;
  transform: translateX(-50%)
}

.long-description .mask .mask__tip .text {
  color: #898989;
  font-size: 13px;
  font-weight: 400;
  margin-right: 4px
}

.long-description .mask .mask__tip .icon-arrow {
  height: 11px;
  width: 11px
}

.long-description .markdown-body p {
  color: #333;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px
}

.markdown-body {
  padding: 10px;
}

.markdown-body ul {
  margin-left: 30px;
}

.markdown-body ul li {
  list-style: disc;
  padding: 10px 0;
}
</style>