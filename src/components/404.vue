<template>
    <Header :headerTheme="headerTheme"></Header>
    <div class="error-page"><img src="../assets/img/page-404.png"
            alt="Sorry，页面走丢了..." class="img">
        <div class="content"><img
                src="../assets/icon/404.svg"
                alt="Sorry，页面走丢了..." class="logo">
            <div class="text">
                Sorry，页面走丢了...
            </div>
            <router-link to="index"> <el-button type="primary">返回首页</el-button> </router-link>
        </div>
    </div>
    <Footer></Footer>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'
const headerTheme = ref('white')
</script>

<style scoped>
.header-container {
    background-color: #fff;
}
:root {
  --nav-text-color: #6b7986;
  --nav-hover-color: #fff;
  --nav-active-color: #fff;
  --nav-search-bg-color: rgba(0, 0, 0, .251);
  --nav-login-text-color: #fff;
}
.error-page {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 150px 0;
}

.img {
    margin-right: 100px;
    width: 300px
}

.logo {
    width: 150px
}

.text {
    color: #666;
    font-size: 20px;
    padding: 30px 0
}

.description {
    bottom: 20px;
    color: #999;
    font-size: 16px;
    padding-bottom: 30px;
    position: relative
}

.container {
    width: 100%
}
</style>