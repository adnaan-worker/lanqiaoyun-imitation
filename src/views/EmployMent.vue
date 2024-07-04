<template>
    <div class="employment-container">
        <div class="ceiling-wrap" v-show="activeNav">
            <div class="main">
                <div class="left">
                    <div class="anchor active">职业规划</div>
                    <div class="anchor">简历优化</div>
                    <div class="anchor">面试辅导</div>
                    <div class="anchor">就业推荐</div>
                </div>
            </div>
        </div>
        <Header :headerTheme="'white'"></Header>
        <div class="main-content">
            <div class="header-content">
                <div class="banner-box">
                    <div class="title">
                        职业规划 简历辅导 面试模拟 笔试刷题，一站式解决求职困扰
                    </div>
                    <div class="sub-title">从零开始搞定 offer，直达高薪名企</div>
                </div>
            </div>
            <div class="header-menu">
                <div class="menu">
                    <div class="menu-item">
                        <img src="../assets/icon/study.png" alt="就业学习" />
                        <div style="margin-left: 12px">
                            <div class="title">就业学习</div>
                            <div class="info">岗位技能学习全攻略</div>
                        </div>
                    </div>
                    <div class="menu-item">
                        <img src="../assets/icon/question-bank.png" alt="面试题库" />
                        <div style="margin-left: 12px">
                            <div class="title">面试题库</div>
                            <div class="info">面试神器带你轻松过关斩将</div>
                        </div>
                    </div>
                    <div class="menu-item">
                        <img src="../assets/icon/question-bank.png" alt="面试经验" />
                        <div style="margin-left: 12px">
                            <div class="title">面试经验</div>
                            <div class="info">从避坑指南到实战胜利的分享</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="module-tab-wrap">
                <h3 class="title">高薪就业四步</h3>
                <div class="tabs">
                    <div @mouseover="activeTab = 1" :class="['module-tab-item', activeTab == 1 ? 'active' : '']">
                        <div class="tab-item-title">职业规划</div>
                        <div class="tab-cover" :style="{ backgroundImage: 'url(' + showPic('tab1') + ')' }">
                            <div class="tab-cover_desc">
                                你是否曾为未来的职业发展感到迷茫？是否对研发岗位充满好奇却又无从下手？
                            </div>
                        </div>
                        <div class="tab-active-cnt">
                            <div class="tab-active-cnt_desc">
                                你是否曾为未来的职业发展感到迷茫？是否对研发岗位充满好奇却又无从下手？<br> 这里为您提供了各个研发岗位的主要工作职责，让您对这个行业有一个全面的了解，您还可以了解到岗位市场薪资、市场需求量、职业技能点以及能力图谱，更好地规划自己的职业道路，做出更明智的决定。
                            </div>
                            <ul class="point-list">
                                <li class="point">
                                    <img src="../assets/icon/yes.png" alt="" class="icon-point" />
                                    岗位工作职责梳理 
                                </li>
                                <li class="point">
                                    <img src="../assets/icon/yes.png" alt="" class="icon-point" />
                                    岗位薪资、职业发展前景科普
                                </li>
                                <li class="point">
                                    <img src="../assets/icon/yes.png" alt="" class="icon-point" />
                                    职业技能点通览 
                                </li>
                            </ul>
                            <el-button style="position: absolute; left: 0; bottom: 0" type="primary" size="large"
                                round>立即体验</el-button>
                        </div>
                    </div>
                    <div @mouseover="activeTab = 2" :class="['module-tab-item', activeTab == 2 ? 'active' : '']">
                        <div class="tab-item-title">简历优化</div>
                        <div class="tab-cover" :style="{ backgroundImage: 'url(' + showPic('tab2') + ')' }">
                            <div class="tab-cover_desc">
                                是否经常遇到简历内容过于简单、零散的问题？是否面临海投后回复率极低，无法获得面试机会的困境？
                            </div>
                        </div>
                        <div class="tab-active-cnt">
                            <div class="tab-active-cnt_desc">
                                简历过于单薄、内容过于零碎？不知道如何取舍。内容同质化严重，过不了网申？<br>海投回复率极低？拿不到面试机会？<br>校招季HR 10s过一份简历，想要从众多简历中脱颖而出，蓝桥师资配备央国企、500强、行业资深企业HR老师1v1帮你做简历诊断和优化，专业人士帮你全方位指导、量身定制。
                            </div>
                            <ul class="point-list">
                                <li class="point">
                                    <img src="../assets/icon/yes.png" alt="" class="icon-point" />
                                    专业职业性格测试
                                </li>
                                <li class="point">
                                    <img src="../assets/icon/yes.png" alt="" class="icon-point" />
                                    1对1沟通，挖掘个人优势 
                                </li>
                                <li class="point">
                                    <img src="../assets/icon/yes.png" alt="" class="icon-point" />
                                    各行业专业的HR执笔修改
                                </li>
                            </ul>
                            <el-button style="position: absolute; left: 0; bottom: 0" type="primary" size="large"
                                round>立即体验</el-button>
                        </div>
                    </div>
                    <div @mouseover="activeTab = 3" :class="['module-tab-item', activeTab == 3 ? 'active' : '']">
                        <div class="tab-item-title">面试辅导</div>
                        <div class="tab-cover" :style="{ backgroundImage: 'url(' + showPic('tab3') + ')' }">
                            <div class="tab-cover_desc">
                                在面试中，你是否经常感到紧张或不流利？你是否能够准确理解HR问题背后的考察意图？
                            </div>
                        </div>
                        <div class="tab-active-cnt">
                            <div class="tab-active-cnt_desc">
                                面试，是求职的必经的环节，面试表现决定你是否可以拿到心仪offer的关键因素；面试，也是一件实操性非常强的事，都说面经看干遍不如模拟来一遍。<br>为什么要做1v1模拟？因为，要有一个专业的人帮你发现问题、梳理思维，蓝桥拥有行业资深、金牌、500强企业招聘面试官，场景在线还原真实面试情景，1v1为你进行面试陪练。
                            </div>
                            <ul class="point-list">
                                <li class="point">
                                    <img src="../assets/icon/yes.png" alt="" class="icon-point" />
                                    500强企业招聘面试官，还原真实面试情景
                                </li>
                                <li class="point">
                                    <img src="../assets/icon/yes.png" alt="" class="icon-point" />
                                    手把手带领梳理思维
                                </li>
                                <li class="point">
                                    <img src="../assets/icon/yes.png" alt="" class="icon-point" />
                                    经典面试题及满分回复模版
                                </li>
                            </ul>
                            <el-button style="position: absolute; left: 0; bottom: 0" type="primary" size="large"
                                round>立即体验</el-button>
                        </div>
                    </div>
                    <div @mouseover="activeTab = 4" :class="['module-tab-item', activeTab == 4 ? 'active' : '']">
                        <div class="tab-item-title">就业推荐</div>
                        <div class="tab-cover" :style="{ backgroundImage: 'url(' + showPic('tab4') + ')' }">
                            <div class="tab-cover_desc">
                                在校招过程中，你是否经常遇到找不到合适岗位的问题？经过多轮面试后是否常常没有收到任何OFFER？
                            </div>
                        </div>
                        <div class="tab-active-cnt">
                            <div class="tab-active-cnt_desc">
                                针对校招求职者打造，以目标岗位全职 Offer 为导向，为每一位学员提供一对一定制化的求职辅导服务。<br>项目包含蓝桥基于十余年的人才服务经验所总结研发的专业有效的求职技能辅导、以及庞大的企业在职导师库。为每位求职者打造一套以提升求职技能为基础、夯实职场实力为核心、求职结果为导向的一对一定制化的求职服务项目。
                            </div>
                            <ul class="point-list">
                                <li class="point">
                                    <img src="../assets/icon/yes.png" alt="" class="icon-point" />
                                    1v1 沟通，量身定制职业规划 
                                </li>
                                <li class="point">
                                    <img src="../assets/icon/yes.png" alt="" class="icon-point" />
                                    名企在职导师团队，笔面试针对性辅导
                                </li>
                                <li class="point">
                                    <img src="../assets/icon/yes.png" alt="" class="icon-point" />
                                    企业推荐导师 ，求职全程 陪伴 
                                </li>
                            </ul>
                            <el-button style="position: absolute; left: 0; bottom: 0" type="primary" size="large"
                                round>立即体验</el-button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="career_planning">
                <div class="career-planning">
                    <div class="career-direction">
                        <h3 class="title">职业规划</h3>
                        <div class="directions">
                            <div @click="dirTab = '前端开发'" :class="['direction-item', dirTab == '前端开发' ? 'active' : '']">
                                <img src="../assets/icon/dir_1.png" alt="" class="icon-direction" />
                                <span title="前端开发" class="name">前端开发</span>
                            </div>
                            <div @click="dirTab = '后端开发'" :class="['direction-item', dirTab == '后端开发' ? 'active' : '']">
                                <img src="../assets/icon/dir_2.png" alt="" class="icon-direction" />
                                <span title="后端开发" class="name">后端开发</span>
                            </div>
                            <div @click="dirTab = '运维测试'" :class="['direction-item', dirTab == '运维测试' ? 'active' : '']">
                                <img src="../assets/icon/dir_3.png" alt="" class="icon-direction" />
                                <span title="运维测试" class="name">运维测试</span>
                            </div>
                            <div @click="dirTab = '前沿技术'" :class="['direction-item', dirTab == '前沿技术' ? 'active' : '']">
                                <img src="../assets/icon/dir_4.png" alt="" class="icon-direction" />
                                <span title="前沿技术" class="name">前沿技术</span>
                            </div>
                        </div>
                    </div>
                    <div class="positions">
                        <div class="content">
                            <div class="direction-card">
                                <div class="title" v-if="dirTab == '前端开发'">前端开发</div>
                                <div class="title" v-if="dirTab == '后端开发'">后端开发</div>
                                <div class="title" v-if="dirTab == '运维测试'">运维测试</div>
                                <div class="title" v-if="dirTab == '前沿技术'">前沿技术</div>
                                <div class="desc" v-if="dirTab == '前端开发'">
                                    前端开发职业方向专注于构建用户界面和用户体验，使用HTML、CSS和JavaScript等技术实现网页和应用程序的前端部分，与用户直接交互。
                                </div>
                                <div class="desc" v-if="dirTab == '后端开发'">
                                    后端开发职业方向主要关注构建和维护应用程序的服务器端逻辑和数据库管理，负责处理数据存储、业务逻辑和与前端交互等方面的工作
                                </div>
                                <div class="desc" v-if="dirTab == '运维测试'">
                                    测试运维职业方向涉及软件测试和系统运维两个方面。测试方面负责开发和执行测试计划，确保软件质量和功能正常，而运维方面负责维护和管理应用程序或系统的稳定性和可靠性。
                                </div>
                                <div class="desc" v-if="dirTab == '前沿技术'">
                                    前沿技术职业方向涉及最新的技术领域，如人工智能、机器学习、区块链、物联网等。该方向的专业人员致力于研究和应用新兴技术，推动技术创新和业务发展。
                                </div>
                            </div>
                            <div class="positions-list">
                                <el-card v-show="dirTab == '前端开发'" v-for="v in dirList[0].jobs" :key="v.id"
                                    @click="router.push({ name: 'job-detail', query: {type: '前端开发', id: v.id } })"
                                    style="height: 154px; padding: 20px; width: 289px">
                                    <template #header>
                                        <div class="card-title">{{ v.title }}</div>
                                    </template>
                                    <div class="card-desc">
                                        {{ v.description }}
                                    </div>
                                </el-card>
                                <el-card v-show="dirTab == '后端开发'" v-for="v in dirList[1].jobs" :key="v.id"
                                    @click="router.push({ name: 'job-detail', query: { type: '后端开发', id: v.id } })"
                                    style="height: 154px; padding: 20px; width: 289px">
                                    <template #header>
                                        <div class="card-title">{{ v.title }}</div>
                                    </template>
                                    <div class="card-desc">
                                        {{ v.description }}
                                    </div>
                                </el-card>
                                <el-card v-show="dirTab == '运维测试'" v-for="v in dirList[2].jobs" :key="v.id"
                                    @click="router.push({ name: 'job-detail', query: { id: v.id } })"
                                    style="height: 154px; padding: 20px; width: 289px">
                                    <template #header>
                                        <div class="card-title">{{ v.title }}</div>
                                    </template>
                                    <div class="card-desc">
                                        {{ v.description }}
                                    </div>
                                </el-card>
                                <el-card v-show="dirTab == '前沿技术'" v-for="v in dirList[3].jobs" :key="v.id"
                                    style="height: 154px; padding: 20px; width: 289px">
                                    <template #header>
                                        <div class="card-title">{{ v.title }}</div>
                                    </template>
                                    <div class="card-desc">
                                        {{ v.description }}
                                    </div>
                                </el-card>
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
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { showPic } from "@/utils/tools";
import { onMounted, onBeforeMount, inject, ref } from "vue";
import { useRouter } from "vue-router";

const axios = inject("$axios");
const router = useRouter();
const activeNav = ref(0);
const activeTab = ref(1);
const dirTab = ref('前端开发');
const dirList = ref([])
onBeforeMount(() => {
    axios.get("/api/jobs").then((res) => {
        dirList.value = res.data
    })
})
onMounted(() => {
    window.addEventListener("scroll", () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop < 850) {
            activeNav.value = 0;
        } else if (scrollTop >= 850) {
            activeNav.value = 1;
        }
    })
})
</script>

<style scoped>
.employment-container {
    width: 100%;
    height: 100%;
}

.ceiling-wrap {
    background: #fff;
    box-shadow: 0 0 10px 0 rgba(229, 235, 241, .5);
    height: 70px;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;
}

.ceiling-wrap .main {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;
    width: 1200px
}

.ceiling-wrap .main .left {
    display: flex;
    flex: 1;
    justify-content: center
}

.ceiling-wrap .main .left .anchor {
    color: #999;
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    margin-right: 60px
}

.ceiling-wrap .main .left .anchor.active {
    color: #333;
    font-weight: 600
}

.main-content {
    width: 100%;
    height: 100%;
    background-color: #f4f7fa;
}

.header-content {
    background-image: url(../assets/img/banner-bg.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 240px;
    width: 100%;
}

.header-content .banner-box {
    margin: 0 auto;
    padding-top: 50px;
    width: 1200px;
}

.header-content .banner-box .title {
    color: #171c1f;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 16px;
}

.header-content .banner-box .sub-title {
    color: #171c1f;
    font-size: 20px;
    font-weight: 400;
}

.header-menu {
    background: linear-gradient(180deg, #f3f5f7, #fff);
    border-radius: 8px;
    box-shadow: 0 6px 16px 0 rgba(51, 51, 65, 0.05), inset 0 1px 0 0 #fff;
    margin: -47px auto 0;
    position: relative;
    transition: all 0.2s ease-out;
    width: 1200px;
}

.header-menu .menu {
    display: flex;
    flex-wrap: wrap;
    padding: 23px 40px;
}

.header-menu .menu .menu-item {
    flex: 1 1 0%;
    display: flex;
    align-items: center;
    border-right: 1px solid #dee2e6;
}

.header-menu .menu .menu-item:last-child {
    border-right: none;
}

.header-menu .menu .menu-item img {
    width: 48px;
    height: 48px;
}

.header-menu .menu .menu-item .title {
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
}

.header-menu .menu .menu-item .info {
    margin-top: 10px;
    line-height: 20px;
    font-size: 14px;
}

.module-tab-wrap {
    margin: 0 auto;
    padding-top: 60px;
    width: 1200px;
}

.module-tab-wrap .title {
    color: #000;
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 40px;
    text-align: center;
}

.module-tab-wrap .tabs {
    display: flex;
    align-items: center;
}

.module-tab-wrap .tabs .module-tab-item {
    border-radius: 8px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    height: 422px;
    margin-right: 20px;
    overflow: hidden;
    padding: 30px 20px;
    position: relative;
    transition: width 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    width: 195px;
}

.module-tab-wrap .tabs .tab-item-title {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease-in-out;
    z-index: 2;
}

.module-tab-wrap .tabs .tab-cover {
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: auto 100%;
    bottom: 0;
    left: 0;
    padding: 74px 20px 40px;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.3s ease-in-out;
}

.module-tab-wrap .tabs .tab-cover_desc {
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    left: 20px;
    position: absolute;
    top: 74px;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    width: 155px;
}

.module-tab-wrap .tabs .tab-active-cnt {
    height: 308px;
    left: 20px;
    min-width: calc(100% - 40px);
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 74px;
    transition: all 0.3s ease-in-out;
    width: 514px;
}

.module-tab-wrap .tabs .tab-active-cnt_desc {
    color: #333;
    font-size: 14px;
    font-weight: 400;
}

.module-tab-wrap .tabs .module-tab-item.active {
    width: 554px;
}

.module-tab-wrap .tabs .module-tab-item.active .tab-item-title {
    color: #000;
}

.module-tab-wrap .tabs .module-tab-item.active .tab-cover {
    opacity: 0.2;
}

.module-tab-wrap .tabs .module-tab-item.active .tab-cover__desc {
    opacity: 0;
    transform: translateY(20px);
}

.module-tab-wrap .tabs .module-tab-item.active .tab-active-cnt {
    opacity: 1;
    pointer-events: auto;
}

.module-tab-wrap .tabs .tab-active-cnt .point-list {
    bottom: 80px;
    color: #495770;
    font-size: 14px;
    font-weight: 400;
    left: 0;
    list-style: none;
    margin-top: 40px;
    position: absolute;
}

.module-tab-wrap .tabs .module-tab-item .tab-active-cnt .point-list .point {
    align-items: center;
    display: flex;
}

.module-tab-wrap .tabs .module-tab-item .tab-active-cnt .point-list .point .icon-point {
    height: 14px;
    margin-right: 12px;
    width: 14px;
}

.module-tab-wrap .tabs .module-tab-item .tab-active-cnt .point-list .point:not(:last-child) {
    margin-bottom: 10px;
}

.career-planning {
    margin-top: 60px;
}

.career-planning .career-direction {
    background: #fff;
    padding-bottom: 30px;
    padding-top: 60px;
    width: 100%;
}

.career-planning .career-direction .title {
    color: #000;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
}

.career-planning .career-direction .directions {
    align-items: center;
    justify-content: center;
    display: flex;
    height: 130px;
    margin: 40px auto 0;
    overflow-x: auto;
    overflow-y: hidden;
    width: 1200px;
}

.direction-item {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    position: relative;
}

.direction-item:not(:last-child) {
    margin-right: 142px;
}

.direction-item .icon-direction {
    height: 60px;
    margin-bottom: 16px;
    width: 60px;
}

.direction-item .name {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    max-width: 176px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.direction-item.active:after {
    background: #0080f6;
    bottom: -13px;
    content: "";
    display: block;
    height: 3px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 65px;
}

.direction-card {
    background-image: url(../assets/img/direction-card-bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 328px;
    padding: 30px 20px;
    width: 280px;
}

.direction-card .title {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 12px;
}

.direction-card .desc {
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    color: #fff;
    display: -webkit-box;
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    white-space: pre-line;
    word-break: break-all;
}

.career-planning .positions {
    background: #f5f7fa;
    height: 428px;
    padding: 60px 0 40px;
    width: 100%;
}

.career-planning .positions .content {
    display: flex;
    margin: 0 auto;
    width: 1200px;
}

.career-planning .positions .content .positions-list {
    grid-gap: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    height: 328px;
    margin-left: 20px;
    overflow-x: hidden;
    overflow-y: scroll;
}

:deep(.el-card__header) {
    border-bottom: none;
    padding: 0;
}

:deep(.el-card__body) {
    padding: 0;
}

.card-title {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
    max-width: 240px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.card-desc {
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    color: #6b7986;
    display: -webkit-box;
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    word-break: break-all;
}
</style>