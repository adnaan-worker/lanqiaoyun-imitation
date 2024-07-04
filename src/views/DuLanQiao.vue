<template>
    <div :style="!openFlash?'height:100vh;overflow: hidden;':''" class="wrapper-content">
        <div :class="['wrapper', closeAd ? 'none' : '', openFlash ? 'animated' : '']">
            <div class="logo">
                <el-image style="width: 1200px;object-fit: cover;" :src="showPic('haibao')"></el-image>
            </div>
        </div>
        <Header :headerTheme="'white'"></Header>
            <div class="cup-sub-menu">
                <span class="sub-menu-item active">赛事专区</span>
                <span class="sub-menu-item">关于大赛</span>
                <span class="sub-menu-item">设计赛</span>
                <span class="sub-menu-item">学习资料</span>
                <span class="sub-menu-item">备赛专区</span>
                <span class="sub-menu-item">证书查询</span>
                <span class="sub-menu-item">大赛回顾</span>
                <span class="sub-menu-item">联系我们</span>
                <el-button type="primary" round>我是院校</el-button>
                <el-button type="primary" round>我是学生</el-button>
            </div>
            <div class="dasai-blessing-icon-wrap">
                <router-link class="dasai-blessing-icon" to="/index" target="_blank"></router-link>
            </div>
        <div class="top-content">
            
            <div class="banner">
                <el-carousel height="436px" trigger="click" motion-blur>
                    <el-carousel-item v-for="item in banner_list" :key="item">
                        <el-image style="width: 100%;height: 100%;" :src="showPic(item)"></el-image>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="main-content">
            <div class="section-news">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-card style="width: 100%;">
                            <template #header>
                                <div class="news-card-header"
                                    style="background: linear-gradient(rgb(62, 81, 255) 0%, rgb(125, 132, 255) 100%);">
                                    <span class="title">大赛通知</span>
                                    <router-link to="/index">查看更多 &gt;&gt; </router-link>
                                </div>
                            </template>
                            <ul>
                                <li>
                                    <div class="news-item">
                                        <span class="news-title"
                                            title="关于举办第十五届蓝桥杯大赛5G全网规划与建设决赛的通知">关于举办第十五届蓝桥杯大赛5G全网规划与建设决赛的通知</span>
                                        <span class="create-time">2024-06-03</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="news-item">
                                        <span class="news-title"
                                            title="第十五届蓝桥杯大赛5G全网规划与建设选拔赛获奖名单">第十五届蓝桥杯大赛5G全网规划与建设选拔赛获奖名单</span>
                                        <span class="create-time">2024-06-03</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="news-item"><span class="news-title"
                                            title="蓝桥暑期全国高校师资培训会通知">蓝桥暑期全国高校师资培训会通知</span><span
                                            class="create-time">2024-05-28</span></div>
                                </li>
                                <li>
                                    <div class="news-item"><span class="news-title"
                                            title="举办“蓝桥杯大赛十五周年暨第十五届蓝桥杯大赛全国总决赛颁奖典礼”系列活动的通知">举办“蓝桥杯大赛十五周年暨第十五届蓝桥杯大赛全国总决赛颁奖典礼”系列活动的通知</span><span
                                            class="create-time">2024-05-29</span></div>
                                </li>
                                <li>
                                    <div class="news-item"><span class="news-title"
                                            title="第十五届蓝桥杯大赛总决赛获奖名单">第十五届蓝桥杯大赛总决赛获奖名单</span><span
                                            class="create-time">2024-06-02</span></div>
                                </li>
                                <li>
                                    <div class="news-item"><span class="news-title"
                                            title="第十五届蓝桥杯大赛总决赛（软件赛）个人线上比赛手册（网络安全赛项）">第十五届蓝桥杯大赛总决赛（软件赛）个人线上比赛手册（网络安全赛项）</span><span
                                            class="create-time">2024-05-27</span></div>
                                </li>
                                <li>
                                    <div class="news-item"><span class="news-title"
                                            title="开放第十五届蓝桥杯大赛个人赛省赛获奖证书下载的通知">开放第十五届蓝桥杯大赛个人赛省赛获奖证书下载的通知</span><span
                                            class="create-time">2024-05-27</span></div>
                                </li>
                                <li>
                                    <div class="news-item"><span class="news-title"
                                            title="第十五届蓝桥杯大赛个人赛全国总决赛准考证下载的通知">第十五届蓝桥杯大赛个人赛全国总决赛准考证下载的通知</span><span
                                            class="create-time">2024-05-24</span></div>
                                </li>
                                <li>
                                    <div class="news-item"><span class="news-title"
                                            title="第十五届蓝桥杯视觉艺术设计赛省赛获奖名单">第十五届蓝桥杯视觉艺术设计赛省赛获奖名单</span><span
                                            class="create-time">2024-05-21</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="news-item !mb-0"><span class="news-title"
                                            title="项目实战赛人工智能赛项开放全国赛准考证和比赛手册下载的通知">项目实战赛人工智能赛项开放全国赛准考证和比赛手册下载的通知</span><span
                                            class="create-time">2024-05-21</span></div>
                                </li>
                            </ul>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card style="width: 100%;">
                            <template #header>
                                <div class="news-card-header"
                                    style="background: linear-gradient(rgb(62, 81, 255) 0%, rgb(125, 132, 255) 100%);">
                                    <span class="title">大赛新闻</span>
                                    <router-link to="/index">查看更多 &gt;&gt; </router-link>
                                </div>
                            </template>
                            <ul>
                                <li>
                                    <div class="news-item">
                                        <span class="news-title"
                                            title="直击第十五届蓝桥杯全国总决赛：54个赛点精心组织，2万精英高水平对决">直击第十五届蓝桥杯全国总决赛：54个赛点精心组织，2万精英高水平对决</span>
                                        <span class="create-time">2024-06-03</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="news-item"><span class="news-title"
                                            title="第十五届蓝桥杯大赛全国总决赛师资培训会圆满落幕：共筑教育新篇章，引领创新人才培养">第十五届蓝桥杯大赛全国总决赛师资培训会圆满落幕：共筑教育新篇章，引领创新人才培养</span><span
                                            class="create-time">2024-05-24</span></div>
                                </li>
                                <li>
                                    <div class="news-item"><span class="news-title"
                                            title="十五届蓝桥杯火热开赛，廿三万学子同台争锋">十五届蓝桥杯火热开赛，廿三万学子同台争锋</span><span
                                            class="create-time">2024-04-15</span></div>
                                </li>
                                <li>
                                    <div class="news-item"><span class="news-title"
                                            title="蓝桥杯大赛十五周年标志公布">蓝桥杯大赛十五周年标志公布</span><span
                                            class="create-time">2024-03-14</span></div>
                                </li>
                                <li>
                                    <div class="news-item"><span class="news-title"
                                            title="蓝桥杯大赛十五周年主题公布">蓝桥杯大赛十五周年主题公布</span><span
                                            class="create-time">2024-04-02</span></div>
                                </li>
                                <li>
                                    <div class="news-item"><span class="news-title"
                                            title="第十五届蓝桥杯大赛省赛师资短期强化集训班（杭州站）成功举办">第十五届蓝桥杯大赛省赛师资短期强化集训班（杭州站）成功举办</span><span
                                            class="create-time">2024-03-25</span></div>
                                </li>
                                <li>
                                    <div class="news-item"><span class="news-title"
                                            title="蓝桥杯大赛连续五年入选全国普通高校学科竞赛排行榜">蓝桥杯大赛连续五年入选全国普通高校学科竞赛排行榜</span><span
                                            class="create-time">2024-03-25</span></div>
                                </li>
                                <li>
                                    <div class="news-item"><span class="news-title"
                                            title="蓝桥杯大赛入选2023年新疆维吾尔自治区普通高校学科竞赛赛项名单">蓝桥杯大赛入选2023年新疆维吾尔自治区普通高校学科竞赛赛项名单</span><span
                                            class="create-time">2024-03-07</span></div>
                                </li>
                                <li>
                                    <div class="news-item"><span class="news-title"
                                            title="首期蓝桥杯大赛软件编程类竞赛指导教练（长期集训班）在杭州举办">首期蓝桥杯大赛软件编程类竞赛指导教练（长期集训班）在杭州举办</span><span
                                            class="create-time">2024-01-19</span></div>
                                </li>
                                <li>
                                    <div class="news-item !mb-0"><span class="news-title"
                                            title="第十五届蓝桥杯大赛视觉艺术设计赛湖南分赛区启动会圆满举行">第十五届蓝桥杯大赛视觉艺术设计赛湖南分赛区启动会圆满举行</span><span
                                            class="create-time">2024-01-10</span></div>
                                </li>
                            </ul>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { showPic } from '../utils/tools'

const closeAd = ref(false)
const openFlash = ref(false)
const banner_list = ref([
    "lanqiao_banner1",
    "lanqiao_banner2",
    "lanqiao_banner3",
    "lanqiao_banner4"
])
onMounted(() => {
    setTimeout(() => {
        openFlash.value = true
    }, 3000)
    setTimeout(() => {
        closeAd.value = true
    }, 4000)
})
</script>

<style scoped>
.wrapper-content {
    width: 100%;
    height: 100%;
}

.wrapper {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: url(../assets/img/anniversary-index-bg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 12;
}

.animated {
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-name: zoomOutRight;
    transform-origin: right center;
}


@keyframes zoomOutRight {
    40% {
        opacity: 1;
        transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }

    to {
        opacity: 0;
        transform: scale(0.1) translate3d(2000px, 0, 0);
    }
}

.none {
    display: none;
}

.wrapper .logo {
    width: 100%;
    text-align: center;
}

.wrapper-content .cup-sub-menu {
    position: sticky;
    top: 56px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f4f7fa;
    box-shadow: 0 0 10px #6767671a;
    z-index: 4;
}

.wrapper-content .sub-menu-item {
    position: relative;
    padding: 16px 10px 12px;
    font-size: 16px;
    color: #000;
}

.dasai-blessing-icon-wrap {
    position: fixed;
    top: 110px;
    right: 84px;
    z-index: 10;
    height: 275px;
    padding: 0 30px;
    width: 124px
}

.dasai-blessing-icon {
    position: absolute;
    top: 0;
    right: 30px;
    width: 64px;
    height: 275px;
    background: url(../assets/img/index-blessing.png);
    background-size: 100% 100%;
    animation: wave 1.5s infinite linear;
    transform-origin: center top;
    cursor: pointer
}

@keyframes wave {
    0% {
        transform: rotate(0)
    }

    25% {
        transform: rotate(6deg)
    }

    50% {
        transform: rotate(0)
    }

    75% {
        transform: rotate(-6deg)
    }

    to {
        transform: rotate(0)
    }
}



.wrapper-content .top-content .banner {
    max-width: 1920px;
    margin: -50px auto 0;
}

:deep(.el-carousel__arrow) {
    background: rgba(0, 0, 0, .5);
    width: 40px;
    height: 40px;
    color: #fff;
}

:deep(.el-carousel__arrow .el-icon svg) {
    font-size: 40px;
}

:deep(.el-carousel__arrow--left) {
    left: 25%;
}

:deep(.el-carousel__arrow--right) {
    right: 25%;
}

:deep(.el-carousel__indicators--horizontal) {
    bottom: 20%;
}

:deep(.el-carousel__button) {
    height: 5px;
    border-radius: 5px;
}

:deep(.el-card__header) {
    padding: 0;
}

.wrapper-content .main-content {
    width: 1092px;
    margin: 0 auto
}

.wrapper-content .main-content .section-news {
    width: 100%;
    position: relative;
    top: -31px;
    margin-bottom: 20px;
    z-index: 1
}

.section-news .news-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    color: #fff;
}

.section-news .news-card-header .title {
    font-size: 24px
}

.section-news .news-card-header a {
    font-size: 14px;
    color: #fff;
}

.section-news .news-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: 400;
    color: #333
}

.section-news .news-item .news-title {
    max-width: 75%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden
}

.section-news .news-item .news-title:hover {
    color: #6c3eff;
}

.section-news .news-item .create-time {
    margin-left: auto;
    font-size: 14px;
    color: #666;
    font-weight: 400
}
</style>