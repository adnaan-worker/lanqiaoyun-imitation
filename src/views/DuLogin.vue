<template>
    <div class="common-layout">
        <el-container style="height: 100vh;background-color: #2e7eee;">
            <el-main class="main">
                <div class="bg">
                    <el-card class="login-container">
                        <div class="tabs">
                            <div @click="tab_active = 0" :class="['tab-item', tab_active == 0 ? 'active' : '']">密码登录</div>
                            <div @click="tab_active = 1" :class="['tab-item', tab_active == 1 ? 'active' : '']">短信登录</div>
                        </div>
                        <div v-if="tab_active == 0" class="tab-content">
                            <el-form :rules="loginRules" :model="login_form">
                                <el-form-item prop="username">
                                    <el-input v-model="login_form.username" type="text"
                                        style="width: 100%;margin: 10px 0;" size="large"
                                        placeholder="请输入用户名/邮箱"></el-input>
                                </el-form-item>
                                <el-form-item prop="password">
                                    <el-input v-model="login_form.password" style="width: 100%;margin: 10px 0;"
                                        size="large" type="password" placeholder="请输入密码" show-password></el-input>
                                </el-form-item>
                                <span>忘记密码</span>
                                <el-button @click="login" type="primary" size="large"
                                    style="width: 100%;margin: 20px 0;">登录</el-button>
                            </el-form>
                        </div>
                        <div v-else class="tab-content">2</div>
                        <div class="register">
                            <div>微信快速登录</div>
                            <router-link style="color: #666;" to="/register">去注册</router-link>
                        </div>
                        <div class="login-footer"><el-icon style="font-size: 16px;margin-right: 5px;">
                                <QuestionFilled />
                            </el-icon>登录遇到问题</div>
                    </el-card>
                </div>
            </el-main>
            <el-footer class="footer">© Copyright 2024 杜勇-蓝桥网版权所有</el-footer>
        </el-container>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const store = useUserStore()
const router = useRouter()
const axios = inject('$axios')
const tab_active = ref(0)
const login_form = ref({
    username: '',
    password: ''
})
const loginRules = {
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' },
    { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
    ]
}
const login = () => {
    axios.get('/api/users?username='+login_form.value.username).then((res)=>{
        if(res.data.length===0||res.data[0].password!=login_form.value.password){
            ElMessage({ 
                message: '登录失败',
                type: 'error'
            } )
        }else{
            store.login(res.data[0]);
            ElMessage( { 
                message: '登录成功',
                type: 'success'
            } )
            setTimeout(()=>{
                router.push("/index")
            },2000)
        }
    }).catch((err)=>{
        console.log(err)
    })
}
</script>

<style scoped>
.main {
    --el-border-color-light: #fff;
    padding: 0;
    width: 100%;
    height: calc(100vh - 84px);
    position: relative;
    background: url("../assets/img/icon-bg-grid.png");
    background-repeat: repeat;
}

.main .bg {
    height: 100%;
    background: url("../assets/img/img-banner-bg.svg") calc(50% - 300px) center / 500px 500px no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 600px;
}

.main .login-container {
    background-color: #fff;
    border-radius: 8px;
    padding: 50px 35px;
    min-height: 537px;
    width: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main .tabs {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
}

.main .tabs .tab-item {
    margin: 0 30px;
    font-size: 18px;
    font-weight: 600;
    position: relative;
    transform: translateX(10px);
    transition: all .3s;
}

.main .tabs .active {
    color: #2e7eee;
}

.main .tabs .tab-item:hover {
    cursor: pointer;
    color: #2e7eee;
}

.main .tabs .tab-item.active::after {
    content: '';
    display: block;
    width: 36px;
    height: 3px;
    background-color: #2e7eee;
    position: absolute;
    bottom: -10px;
    left: 25%;
    border-radius: 2px;
}

.main .tab-content {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main .tab-content span {
    color: #666;
    font-size: 14px;
    margin-left: 245px;
}

.main .register {
    width: 100%;
    display: flex;
    font-size: 14px;
    color: #666;
    justify-content: space-between;
}

.main .login-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b1b1b1;
    margin-top: 45px;
    font-size: 12px;
}

.footer {
    height: 84px;
    font-size: 12px;
    color: #666;
    text-align: center;
    line-height: 84px;
    background-color: #fff;
}
</style>