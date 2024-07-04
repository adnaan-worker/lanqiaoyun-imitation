<template>
    <div :class="['header-container', theme_class ? 'white' : '']">
        <div class="header-content">
            <div class="header-brand">
                <img class="logo" src="../assets/logo.png" alt="">
            </div>
            <div class="nav">
                <div :class="[theme_class ? 'nav-item-white' : 'nav-item',activeNav=='/'?'active':'']">
                    <router-link @click="store.setActiveNav('/')" to="/">学习</router-link>
                </div>
                <div :class="[theme_class ? 'nav-item-white' : 'nav-item',activeNav=='/lanqiao'?'active':'']">
                    <router-link @click="store.setActiveNav('/lanqiao')" to="/lanqiao">蓝桥杯</router-link>
                </div>
                <div :class="[theme_class ? 'nav-item-white' : 'nav-item',activeNav=='/employment'?'active':'']">
                    <router-link @click="store.setActiveNav('/employment')" to="/employment">就业</router-link>
                </div>
                <div :class="[theme_class ? 'nav-item-white' : 'nav-item',activeNav=='/kaozheng'?'active':'']">
                    <router-link @click="store.setActiveNav('/kaozheng')" to="/kaozheng">考证</router-link>
                </div>
                <div :class="[theme_class ? 'nav-item-white' : 'nav-item',activeNav=='/taolun'?'active':'']">
                    <router-link @click="store.setActiveNav('/taolun')" to="/taolun">讨论区</router-link>
                </div>
            </div>
            <div class="universal-header-search-container">
                <input v-model="search_data"
                    :class="['universal-header-search-input', theme_class ? 'universal-header-search-input-white' : '']"
                    placeholder="搜索课程/书籍/问答" />
                <el-icon class="universal-header-search-icon">
                    <Search />
                </el-icon>
            </div>
            <div :class="['login', theme_class ? 'text-theme-white' : 'text-theme-dark']">
                <div class="vip-link-content">
                    <img src="../assets/icon/open-vip.png" alt="">
                </div>
                <div v-if="!store.isLogin" class="auth-link">
                    <router-link :class="[theme_class ? 'text-theme-white' : 'text-theme-dark']"
                        to="/login">登录</router-link>
                    <p>|</p>
                    <router-link :class="[theme_class ? 'text-theme-white' : 'text-theme-dark']"
                        to="/register">注册</router-link>
                </div>
                <Avatar :theme_class="theme_class" v-else>
                    <template #username>
                        {{ store.user.username }}
                    </template>
                </Avatar>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useUserStore } from '../stores/user';
import Avatar from '../components/Avatar.vue'

const store = useUserStore()
const activeNav = ref( computed(() => store.activeNav) )
const scrollTop = ref(0)
const props = defineProps({ headerTheme: String })
const theme_class = ref(0)
const search_data = ref('')

onMounted(() => {
    if (props.headerTheme != 'white') {
        window.addEventListener('scroll', () => {
            scrollTop.value = document.documentElement.scrollTop
            if (scrollTop.value > 430) {
                theme_class.value = 1
            } else {
                theme_class.value = 0
            }
        })
    }
    if (props.headerTheme == 'white') {
        theme_class.value = 1
    }
})
</script>

<style scoped>
.header-container {
    height: 56px;
    position: sticky;
    top: 0;
    z-index: 5;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
}

.header-container.white {
    background: #fff;
    border-bottom: 1px solid #e6ebee
}

.header-container .header-content {
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 1200px;
}

.header-brand {
    align-items: center;
    background: #00a8eb;
    display: flex;
    justify-content: center;
    width: 139px;
    height: 100%;
}

.header-content .logo {
    width: 122px;
    height: 22px;
}

.universal-header-search-container {
    align-items: center;
    display: flex;
    margin-left: 140px;
    position: relative;
}

.universal-header-search-icon {
    position: absolute;
    right: 10px;
    font-size: 20px;
    color: #a0abb5;
}

.universal-header-search-input {
    background: rgba(0, 0, 0, .251);
    border: none;
    border-radius: 19px;
    box-sizing: border-box;
    color: #fff;
    height: 37px;
    outline: none;
    padding: 0 28px 0 13px;
    width: 219px
}

.universal-header-search-input-white {
    background: #eaf0f5;
    color: #000;
}

.universal-header-search-input::-moz-placeholder {
    color: #a0abb5;
    font-size: 14px;
    font-weight: 400
}

.header-content .nav {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
}

.header-content .nav-item {
    position: relative;
    height: 100%;
    line-height: 56px;
    padding: 0 16px;
}

.header-content .nav-item-white {
    position: relative;
    height: 100%;
    line-height: 56px;
    padding: 0 16px;
}

.header-content .nav-item.active:after {
    background: #fff;
    content: "";
    height: 4px;
    left: 25%;
    position: absolute;
    bottom: 0;
    width: 32px;
    border-radius: 2px;
}

.header-content .nav-item-white.active:after {
    background: #00a8eb;
    content: "";
    height: 4px;
    left: 25%;
    position: absolute;
    bottom: 0;
    width: 32px;
    border-radius: 2px;
}

.header-content .nav-item a {
    color: hsla(0, 0%, 100%, .702);
    font-size: 16px;
    font-weight: 500;
}

.header-content .nav-item-white a {
    color: #6b7986;
    font-size: 16px;
    font-weight: 500;
}

.header-content .nav-item a:hover {
    color: #fff;
}

.header-content .nav-item-white a:hover {
    color: #6b7986;
}

.header-content .nav-item.active a {
    color: #fff;
}

.header-content .nav-item-white.active a {
    color: #00a8eb;
}

.header-container .header-content .login {
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-size: 16px;
}

.text-theme-dark {
    color: #fff;
}

.text-theme-white {
    color: #000;
}

.header-container .header-content .login img {
    width: 98px;
    height: 30px;
}

.header-container .header-content .login .auth-link {
    display: flex;
    align-items: center;
    margin-left: 14px;
}

.header-container .header-content .login p {
    margin: 0 10px;
}


</style>