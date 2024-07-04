<template>
  <div class="du">
    <Header :headerTheme="headerTheme"></Header>
    <div class="main">
      <front-banner :bannerList="bannerList"></front-banner>
      <front-main></front-main>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import FrontBanner from '../components/FrontBanner.vue'
import FrontMain from '../components/FrontMain.vue'
import Footer from '../components/Footer.vue'
import { ref, inject, onBeforeMount } from 'vue'

const headerTheme = ref('dark')
const axios = inject("$axios")
const bannerList = ref()
onBeforeMount(() => {
  axios.get('/api/indexBanner').then((res => {
    bannerList.value = res.data
  }))
})
</script>
<style scoped>
.main {
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
  margin-top: -80px;
  background-color: #f4f7fa;
}
</style>
<!-- 杜勇 2024-5-21 -->