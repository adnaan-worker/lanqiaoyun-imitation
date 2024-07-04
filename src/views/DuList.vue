<template>
  <div class="du">
    <Header :headerTheme="headerTheme"></Header>
    <div class="sub-menu-bar-container">
      <div class="sub-menu-bar">
        <router-link to="course" class="sub-menu-item active"> 全部课程 </router-link>
        <router-link to="course" class="sub-menu-item"> 项目库 </router-link>
        <router-link to="course" class="sub-menu-item"> 实训营 </router-link>
        <router-link to="course" class="sub-menu-item"> 楼+ </router-link>
        <router-link to="course" class="sub-menu-item">学习路径 </router-link>
      </div>
    </div>
    <div class="body is-courses">
      <div class="course-page">
        <div class="category">
          <div class="item">
            <div class="label">方向：</div>
            <div class="tag-box">
              <span class="active">全部</span>
              <span class="">计算机专业课</span>
              <span class="">Linux 运维</span>
              <span class="">后端开发</span>
              <span class="">云计算与大数据</span>
              <span class="">数据库</span>
              <span class="">人工智能</span>
              <span class="">信息安全</span>
              <span class="">Web 前端开发</span>
              <span class="">Java 后端开发</span>
            </div>
          </div>
          <div class="tag-panel">
            <div class="item">
              <div class="label">标签：</div>
              <div class="tag-box tag-box-hidden">
                <span class="active">全部</span>
                <span class="">Python</span>
                <span class="">Linux</span>
                <span class="">蓝桥杯</span>
                <span class="">Java</span>
                <span class="">机器学习</span>
                <span class="">C</span>
                <span class="">C++</span>
                <span class="">Shell</span>
                <span class="">MySQL</span>
                <span class="">大学公开课</span>
                <span class="">操作系统</span>
                <span class="">HTML</span>
                <span class="">PHP</span>
                <span class="">Hadoop</span>
                <span class="">算法</span>
                <span class="">JavaScript</span>
                <span class="">scikit-learn</span>
                <span class="">计算机网络</span>
                <span class="">数据结构</span>
                <span class="">NoSQL</span>
                <span class="">Flask</span>
                <span class="">Web安全</span>
                <span class="">数据分析</span>
                <span class="">系统安全</span>
                <span class="">Go</span>
                <span class="">Git</span>
                <span class="">Django</span>
                <span class="">设计模式</span>
                <span class="">CSS</span>
                <span class="">Spark</span>
                <span class="">SQL</span>
                <span class="">SpringBoot</span>
                <span class="">Vue.js</span>
                <span class="">Nginx</span>
                <span class="">Redis</span>
                <span class="">Node.js</span>
                <span class="">ROS</span>
                <span class="">密码学</span>
                <span class="">渗透测试</span>
                <span class="">MongoDB</span>
                <span class="">网络安全</span>
                <span class="">OpenCV</span>
                <span class="">安全开发</span>
                <span class="">R</span>
                <span class="">TensorFlow</span>
                <span class="">Scala</span>
                <span class="">Docker</span>
                <span class="">PyTorch</span>
                <span class="">Pygame</span>
                <span class="">OpenGL</span>
                <span class="">jQuery</span>
                <span class="">爬虫</span>
                <span class="">ThinkPHP</span>
                <span class="">CentOS</span>
                <span class="">书籍配套实验</span>
                <span class="">软件测试</span>
                <span class="">Spring</span>
                <span class="">SSM</span>
                <span class="">Hive</span>
                <span class="">React</span>
                <span class="">NLP</span>
                <span class="">Ruby</span>
                <span class="">区块链</span>
                <span class="">Qt</span>
                <span class="">Kafka</span>
                <span class="">SDN</span>
                <span class="">Kubernetes</span>
              </div>
            </div>
            <div class="right" style="display:none;">
              更多
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAMAAABV0m3JAAAAXVBMVEUAAAAygfAvfu8uf+8ufu8ufu8ufu4ufu8wgPAvgO8wgPAwgvIzhfYvfu4uf+8vf+8vf/Avf/AugPEwf/Awge8xgvIwgO8ufu4vfu4ufu4ugPAwgO8vgvM8h/Aufu/Q3MTMAAAAHnRSTlMAIPr47+ni3VJNPTYZ9NF+dmlYRS8mEPLUxoRgKxEe17dNAAAAcElEQVQI12WPVw7AIAxDA5QOugfd9f2PWYYQVH0fwTJxlBCxkj5UzJQeY+pd6E0dgCnp4xjMs3bgVfCUwP5Y0RQQyntLhrzxkuXYaickpA4hLZHdLtK6zxhjdvhMCXWL4nBrpMwCCAtHSo6Tfqh47gvfEAWXVM/9BgAAAABJRU5ErkJggg=="
                width="10" class="ml-3px" style="transform:rotate(0deg);">
            </div>
          </div>
          <div class="item mb-16px">
            <div class="label">类型：</div>
            <div class="tag-box">
              <span class="active">全部</span>
              <span class="">免费</span>
              <span class="">会员</span>
              <span class="">实战课</span>
              <span class="">实训营</span>
              <span class="">私有</span>
            </div>
          </div>
          <div class="item">
            <div class="label">难度：</div>
            <div class="tag-box">
              <span class="active">全部</span>
              <span class="">初级</span>
              <span class="">中级</span>
              <span class="">高级</span>
            </div>
          </div>
        </div>
        <div class="paths">
          <router-link to="/course" class="item">
            <img src="../assets/icon/list_python.png" alt=""
              class="path-icon">
            <div>
              <div title="Python 研发工程师" class="name">Python 研发工程师</div>
              <div class="count">84门课程</div>
            </div>
          </router-link>
          <router-link to="/course" class="item">
            <img src="../assets/icon/list_java.png" alt=""
              class="path-icon">
            <div>
              <div title="Java 工程师" class="name">Java 工程师</div>
              <div class="count">66门课程</div>
            </div>
          </router-link>
          <router-link to="/course" class="item">
            <img src="../assets/icon/list_c++.png" alt=""
              class="path-icon">
            <div>
              <div title="C++ 研发工程师" class="name">C++ 研发工程师</div>
              <div class="count">15门课程</div>
            </div>
          </router-link>
          <router-link to="/course" class="item">
            <img src="../assets/icon/list_linux.png" alt=""
              class="path-icon">
            <div>
              <div title="Linux 运维工程师" class="name">Linux 运维工程师</div>
              <div class="count">43门课程</div>
            </div>
          </router-link>
          <router-link to="/course" class="item">
            <img src="../assets/icon/list_web.png" alt=""
              class="path-icon">
            <div>
              <div title="Web 前端工程师" class="name">Web 前端工程师</div>
              <div class="count">68门课程</div>
            </div>
          </router-link>
          <router-link to="/course" class="more">
            <div class="name">
              学习路径
              <img src="../assets/icon/red-more.png" width="15" class="ml-2px">
            </div>
            <div class="count">681+课程 &gt;</div>
          </router-link>
        </div>
        <div class="sort-box">
          <div class="sort">
            <div class="item active">
              综合
            </div>
            <div class="item">
              最热
            </div>
            <div class="item">
              最新
            </div>
          </div>
          <div class="right">
            <div class="count">共805门课程</div>
            <div class="join-private">加入私有课</div>
          </div>
        </div>
        <el-row v-infinite-scroll="getCourses" :infinite-scroll-disabled="!loading" :gutter="20" class="courses-row">
          <el-col v-for="v in courses_list" :key="v.id" :span="6" lazy>
            <router-link :to="{name: 'detail',params:{id:v.id}}" class="course-link">
              <div class="top">
                <el-image :src="v.picture_url" class="course-img" lazy />
              </div>
              <div :title="v.name" class="title">
                {{ v.name }}
              </div>
              <div class="tag-box">
                <div class="tag">
                  <span v-for="item in courses_list[v.id - 1].tags" :key="item">{{ item }}</span>
                </div>
              </div>
              <div class="price-box">
                <div class="price-content">
                  <div v-show="v.fee_type === 'bootcamp'" class="current-price">
                    ¥
                    <span>{{ v.real_price }}</span>
                  </div>
                  <div v-show="v.fee_type === 'bootcamp'" href="" target="_blank" class="vip-link">
                    <div class="vip-icon"></div>
                  </div>
                </div>
              </div>
              <div class="bottom">
                <div>{{ v.level }} · {{ v.students_count }}人学过</div>
                <div v-show="v.fee_type === 'free'" class="free">免费</div>
                <div v-show="v.fee_type === 'limit_free'" class="limit_free">限时免费</div>
              </div>
            </router-link>
          </el-col>
        </el-row>
        <div style="height:150px;"></div>
      </div>
      <div class="risk-validation"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { ref, inject, computed, onBeforeMount } from 'vue';


const axios = inject('$axios');
const courses_list = ref([]);
const headerTheme = ref('white');
const page = ref(1);
const loading = ref(false)

const getCourses = () => {
  loading.value = true
  const url = `/api/courses?_page=${page.value}&_per_page=8`;
  axios.get(url).then(res => {
    if (res.data.next === null) {
      loading.value = false;
    }
    courses_list.value = courses_list.value.concat(res.data.data);
    page.value++;
  }).catch(err => {
    console.log(err);
  })
}

onBeforeMount(() => {
  getCourses();
})
</script>

<style scoped>
.sub-menu-bar-container {
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 6;
}

.sub-menu-bar {
  display: flex;
  margin: 0 auto;
  padding: 22px 0;
  width: 1200px
}

.sub-menu-item {
  color: #666;
  font-size: 18px;
  padding: 0 20px;
  position: relative;
  -webkit-text-decoration: none;
  text-decoration: none
}

.sub-menu-item.active {
  color: #000;
  font-size: 20px;
  font-weight: 500;
  position: relative
}

.sub-menu-item.active:before {
  background: rgba(104, 183, 255, .702);
  border-radius: 4px;
  bottom: 0;
  content: "";
  display: block;
  height: 8px;
  left: 20px;
  position: absolute;
  width: 32px;
  z-index: 1
}

.body {
  min-height: calc(100vh - 263px);
  padding: 20px 0 0;
  background: #f4f7fa;
}

.course-page {
  background: #f4f7fa;
  margin: 0 auto;
  padding-bottom: 60px;
  width: 1140px
}

.category {
  background: #fff;
  border-radius: 10px;
  padding: 20px 20px 8px
}

.category .item {
  display: flex
}

.category .item .label {
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  padding: 4px 0
}

.category .item .tag-box {
  color: #666;
  flex: 1;
  font-size: 14px;
  font-weight: 400
}

.category .item .tag-box.tag-box-hidden {
  height: 34px;
  overflow: hidden
}

.category .item .tag-box span {
  cursor: pointer;
  display: inline-block;
  line-height: 14px;
  margin: 0 0 12px 8px;
  padding: 4px 12px
}

.category .item .tag-box span.active {
  background: #eaf2fd;
  border-radius: 11px;
  color: #2e7eee;
  font-weight: 500
}

.category .tag-panel {
  align-items: flex-end;
  display: flex;
  margin: 16px 0
}

.category .tag-panel .item {
  flex: 1
}

.category .tag-panel .right {
  color: #2e7eee;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 12px;
  padding: 4px 0;
  text-align: right;
  width: 75px
}

.paths {
  background: #fff;
  background-image: url(../assets/icon/paths-bg.png);
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: 225px 46px;
  border-radius: 10px;
  height: 104px;
  margin-top: 20px;
  padding: 0 20px;
  width: 1140px
}

.paths .item,
.paths {
  align-items: center;
  display: flex
}

.paths .item {
  height: 64px;
  margin-right: 9px;
  -webkit-text-decoration: none;
  text-decoration: none;
  width: 194px
}

.paths .item:hover {
  background: linear-gradient(318deg, #2d58ff, #3c8dff);
  border-radius: 5px
}

.paths .item:hover .count,
.paths .item:hover .name {
  color: #fff
}

.paths .item .path-icon {
  margin: 0 10px;
  width: 48px
}

.paths .item .name {
  color: #000;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  max-width: 116px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.paths .item .count {
  color: #999;
  font-size: 12px;
  font-weight: 400
}

.paths .more {
  margin-left: 7px;
  -webkit-text-decoration: none;
  text-decoration: none
}

.paths .more:hover .name {
  color: #2e7eee
}

.paths .more .name {
  align-items: center;
  color: #000;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px
}

.paths .more .count {
  color: #898989;
  font-size: 12px;
  font-weight: 400
}

.sort-box {
  justify-content: space-between;
  margin: 37px 0 18px
}

.sort-box .right,
.sort-box {
  align-items: center;
  display: flex
}

.sort-box .right .count {
  color: #333;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-right: 10px
}

.sort-box .right .join-private {
  background: linear-gradient(318deg, #2d58ff, #3c8dff);
  border-radius: 15px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  height: 30px;
  justify-content: center;
  width: 130px
}

.sort-box .right .join-private,
.sort {
  align-items: center;
  display: flex;
  font-weight: 400
}

.sort {
  color: #000;
  font-size: 14px;
  line-height: 20px
}

.sort div {
  cursor: pointer;
  margin-left: 20px;
  padding: 2px 10px
}

.sort div.item.active {
  background: linear-gradient(318deg, #2d58ff, #3c8dff);
  border-radius: 15px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .03);
  color: #fff
}

.sort div.price.active {
  color: #2e7eee
}

.courses-row {
  height: 100%;
  margin-bottom: 20px;
  margin-left: -15px;
  margin-right: -15px;
}

.course-link {
  background: #fff;
  border-radius: 10px;
  display: inline-block;
  margin-bottom: 20px;
  padding: 15px 15px 19px;
  -webkit-text-decoration: none;
  text-decoration: none;
  width: 270px
}

.course-link .top {
  border-radius: 10px;
  height: 136px;
  overflow: hidden;
  position: relative;
  width: 240px;
  z-index: 1
}

.course-link .top .course-img {
  height: 100%;
  transition: transform .2s;
  width: 100%
}

.course-link .top .course-img:hover {
  transform: scale(1.1)
}

.course-link .top .collect-box {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  position: absolute;
  right: 10px;
  top: 10px;
  visibility: hidden
}

.course-link .top .label {
  background: linear-gradient(318deg, #2d58ff, #3c8dff);
  border-radius: 0 10px 0 10px;
  bottom: 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .03);
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  left: 0;
  line-height: 17px;
  padding: 4px 6px 4px 5px;
  position: absolute
}

.course-link .top .bootcamp-tag {
  border-radius: 10px 0 0 0;
  height: 60px;
  left: 0;
  position: absolute;
  top: 0;
  width: 60px
}

.course-link .title {
  color: #000;
  font-size: 14px;
  font-weight: 500;
  height: 20px;
  line-height: 20px;
  margin: 12px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.course-link .title:hover {
  color: #2e7eee
}

.course-link .tag {
  color: #999;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 400;
  height: 22px;
  overflow: hidden;
  text-overflow: ellipsis
}

.course-link .tag span {
  align-items: center;
  background: #fafafa;
  border-radius: 12px;
  display: flex;
  height: 22px;
  margin-right: 8px;
  padding: 0 8px;
  white-space: nowrap
}

.course-link .price-box {
  height: 30px
}

.course-link .price-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.course-link .price-box .current-price {
  color: #e00;
  font-size: 20px;
  font-weight: 600
}

.course-link .price-box .vip-link {
  height: 22px;
  position: relative;
  width: 96px
}

.course-link .price-box .vip-link .vip-icon {
  background-image: url(../assets/icon/plus-vip.png);
  background-size: 100% 100%;
  height: 22px;
  position: absolute;
  width: 96px
}

.course-link .bottom {
  align-items: center;
  color: #999;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  justify-content: space-between;
  line-height: 20px;
  margin-top: 22px
}

.course-link .bottom .free {
  background: rgba(246, 70, 0, .1);
  color: #f64600
}

.course-link .bottom .free,
.course-link .bottom .limit_free {
  align-items: center;
  border-radius: 13px;
  display: flex;
  font-size: 12px;
  font-weight: 400;
  height: 21px;
  padding: 0 8px
}

.course-link .bottom .limit_free {
  background: rgba(10, 191, 145, .1);
  color: #0abf91
}
</style>