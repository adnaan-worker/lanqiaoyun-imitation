<template>
    <div class="common-layout">
        <el-container style="height: 100vh;background-color: #fff;">
            <el-header class="header">
                <div class="content">
                    <el-image style="width: 138px;height: 40px;"
                        :src="showPic('logo_reg')"></el-image>
                    <div class="login">已有账号？ <router-link style="color: #2e7eee;" to="/login">去登录></router-link> </div>
                </div>
            </el-header>
            <el-main class="main">
                <div class="form-box">
                    <h1 style="margin-bottom: 48px;font-size: 26px; text-align: center;color: rgba(0,0,0,.85);font-weight: 500;">账号注册</h1>
                    <el-form :rules="regRules" :model="reg_form">
                        <el-form-item prop="username">
                            <el-input v-model="reg_form.username" type="text" style="width: 100%;margin: 10px 0;"
                                size="large" placeholder="请输入用户名/邮箱"><template #prepend>用户名</template></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input v-model="reg_form.password" style="width: 100%;margin: 10px 0;" size="large"
                                type="password" placeholder="请输入密码" show-password><template #prepend>设置密码</template></el-input>
                        </el-form-item>
                        <el-button @click="register" type="primary" size="large" style="width: 100%;margin: 20px 0;">立即注册</el-button>
                    </el-form>
                    <span style="font-size: 14px;color: #666;"> 注册表示您已经同意 </span>
                    <span style="font-size: 14px;color: #2e7eee;"> 蓝桥蓝桥用户协议</span>
                </div>
            </el-main>
            <el-footer class="footer"> © Copyright 2024 杜勇-蓝桥网版权所有</el-footer>
        </el-container>
    </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { ref, inject } from 'vue'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router';
import { showPic } from '../utils/tools';

const axios = inject("$axios");
const store = useUserStore();
const router = useRouter();
const reg_form = ref({
    username: '',
    password: ''
})

const regRules = {
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' },
    { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
    ]
}

const register = ()=>{
    axios.post('/api/users',reg_form.value).then((res)=>{
        ElMessage({
            type:'success',
            message: '注册成功'
        })
        setTimeout(() => {
            router.push('/login');
        }, 2000);
    }).catch((err)=>{
        ElMessage({
            type:'error',
            message: err.data
        })
    })
}

</script>

<style scoped>

.header {
    width: 100%;
    height: 70px;
    line-height: 70px;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, .18);
    padding: 0 15px;
}

.header .content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.main {
    width: 100%;
    background-color: #f4f7fa;
    padding: 50px 0;
}

.main .form-box{
    width: 400px;
    margin: 0 auto;
    --el-color-info: #000;
}

.footer {
    width: 100%;
    background-color: #171919;
    font-size: 12px;
    color: #666;
    text-align: center;
    line-height: 60px;
}
</style>