import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { ElLoading, ElMessage } from 'element-plus';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../components/404.vue')
    },
    {
      path: '/',
      name: 'index',
      component: () => import('../views/DuIndex.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/DuLogin.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/DuRegister.vue')
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('../views/DuList.vue')
    },
    {
      path: '/detail/:id?',
      name: 'detail',
      props: true,
      component: () => import('../views/DuDetail.vue')
    },
    {
      path: '/lanqiao',
      name: 'lanqiao',
      component: () => import('../views/DuLanQiao.vue')
    },
    {
      path: '/employment',
      name: 'employment',
      component: () => import('../views/EmployMent.vue')
    },
    {
      path: '/job-detail',
      name: 'job-detail',
      component: () => import('../views/JobDetail.vue')
    }

  ]
})

router.beforeEach((to, from, next) => {
  try {
    const userStore = useUserStore();
    const isLogin = userStore.isLogin;
    const pathArr = ['/login', '/register'];
    if(pathArr.includes(to.path) && isLogin){
      ElLoading.service({
        lock: false,
        text: '您已登录，正在跳转至首页...',
        background: 'rgba(255, 255, 255, 0.5)',
      });
      setTimeout(() => {
        ElLoading.service().close();
        next('/index');
      }, 1000);
    } else {
      next();
    }
  } catch (error) {
    ElMessage.error('路由守卫出错：' + error.message);
    next('/404'); 
  }
});
export default router
