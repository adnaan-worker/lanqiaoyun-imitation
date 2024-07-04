<template>
    <div class="auth-link">
        <el-icon :style="['font-size: 30px;', theme_class ? 'color: #000;' : 'color: #eee;']">
            <Bell />
        </el-icon>
        <el-popover :width="346"
            popper-style="backdrop-filter:blur(6px);background:linear-gradient(226deg,hsla(0,0%,100%,.902),hsla(0,0%,100%,.902));border-radius:10px;box-shadow:0 0 30px rgba(0,0,0,.051);">
            <template #reference>
                <el-avatar style="margin: 0 10px;" :size="30"
                    :src="showPic('avatar')" />
            </template>
            <template #default>
                <div class="user-box">
                    <div class="user-info">
                        <el-avatar style="margin: 0 10px;" :size="50"
                        :src="showPic('avatar')" />
                        <div class="user-name">
                            <slot name="username">User</slot>
                            <p>今日有效学习0分钟 </p>
                        </div>
                    </div>
                    <el-card body-style="padding:0" class="card" style="background: rgba(46,126,238,.051);">
                        <div class="card-title">
                            <img src="../assets/icon/mystudy.png" alt="">
                            我的学习
                        </div>
                        <div class="card-content">
                            <span><img src="../assets/icon/mystudy_1.png">创作者入驻</span>
                            <span><img src="../assets/icon/mystudy_2.png">优惠券</span>
                            <span><img src="../assets/icon/mystudy_3.png">学习推荐官</span>
                        </div>
                    </el-card>
                    <el-card body-style="padding:0" class="card" style="background: rgba(108,62,255,.051);">
                        <div class="card-title">
                            <img src="../assets/icon/lanqiao.png">
                            我的蓝桥杯
                        </div>
                        <div class="card-content">
                            <span><img src="../assets/icon/lanqiao_1.png">报名参赛</span>
                            <span><img src="../assets/icon/lanqiao_2.png">证书查询</span>
                            <span><img src="../assets/icon/lanqiao_3.png">练习系统</span>
                            <span><img src="../assets/icon/lanqiao_4.png">备赛专区</span>
                        </div>
                    </el-card>
                    <el-card body-style="padding:0" class="card" style="background: rgba(35,198,190,.051);">
                        <div class="card-title"><img src="../assets/icon/zhengshu.png">我的考证</div>
                        <div class="card-content">
                            <span><img src="../assets/icon/zhengshu_1.png">1+X</span>
                            <span><img src="../assets/icon/zhengshu_2.png">LEAT</span>
                            <span><img src="../assets/icon/zhengshu_3.png">工信人才证书</span>
                        </div>
                    </el-card>
                    <el-card body-style="padding:0" class="card" style="background: rgba(46,126,238,.051);">
                        <div class="card-title">上次学到</div>
                        <div class="card-content">
                            <ul>
                                <li>第十二届蓝桥杯备赛直播公开课</li>
                                <li>C++ 基础入门实战 </li>
                            </ul>
                        </div>
                    </el-card>
                    <div class="settings">
                        <el-divider style="margin: 10px 0;" />
                        <div class="settings-content">
                            <el-link :underline="false">个人中心</el-link>
                            <el-divider direction="vertical" />
                            <el-link :underline="false" @click="logout">退出登录</el-link>
                        </div>
                    </div>
                </div>
            </template>
        </el-popover>
    </div>
</template>

<script setup>
import { showPic } from '@/utils/tools';
import { useUserStore } from '@/stores/user';
import { ElMessage, ElMessageBox } from 'element-plus';

const store = useUserStore();
const props = defineProps({
    theme_class: String
})
const logout  = () => {
    ElMessageBox.confirm(
    '您确定要退出吗?',
    'Warning',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
      lockScroll: false
    }
  )
    .then(() => {
      store.logout();
      ElMessage({
        type: 'success',
        message: '退出成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消退出',
      })
    })
}
</script>

<style scoped>
.user-box {
    width: 100%;
    height: 100%;
    padding: 10px;
}

.user-box .user-info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.user-box .user-name {
    font-size: 16px;
    font-weight: bold;
    color: #000;
}

.user-name p {
    font-size: 12px;
    font-weight: normal;
    color: #999;
}

.user-box .card {
    width: 100%;
    margin-bottom: 20px;
    border-radius: 4px;
    font-size: 14px;
    padding: 10px;
}

.user-box .card-title {
    display: flex;
    align-items: center;
    font-size: 16px;
}

.card-title img {
    width: 16px;
    height: 16px;
    margin-right: 5px;
}

.user-box .card-content {
    padding: 10px 0;
    font-size: 12px;
    color: #666;
    grid-gap:10px;
    display:grid;
    grid-template-columns:repeat(3,auto);
    grid-template-rows:auto auto
}

.card-content span {
    display: flex;
    align-items: center;
}
.card-content span img {
    width: 16px;
    height: 16px;
    margin-right: 5px;
}

.user-box .settings {
    width: 100%;
}

.user-box .settings-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
}

.settings-content a {
    color: #666;
}
</style>