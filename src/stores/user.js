import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    id: '',
    username: '',
    password: ''
  })

  const activeNav = ref('/')

  const setActiveNav = (index) => {
    activeNav.value = index
  }

  const isLogin = computed(() => {
    return user.value.username && user.value.password
  })

  const login = (_u)=>{
    user.value=_u
  }
  
  const logout = ()=>{
    user.value={}
  }
  return { user, isLogin, login, logout, setActiveNav, activeNav }
},
  { 
    persist: true
   }
)
