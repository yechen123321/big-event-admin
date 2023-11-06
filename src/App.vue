<template>
  <hr />
  <router-view></router-view>
  <hr />
  <hr />
  <hr />
  <hr />
  <div>
    我是app
    <text-demo></text-demo>
    <button @click="$router.push('/home')">跳首页</button>
    <el-button @click="goList">跳列表页</el-button>

    <p>{{ userStore.token }}</p>
    <el-button
      @click="
        userStore.setToken('Bearer aiweruhfaeiuwrlfhaeiwufhilwefhualiwuhfialh')
      "
      >登录</el-button
    >
    <el-button @click="userStore.removeToken()">退出</el-button>
    {{ countStore.count }}
    <el-button @click="countStore.add(2)">加法2</el-button>
  </div>
</template>

<style scoped></style>

<script setup>
// 在 Vue3 CompositionAPI 中
// 1. 获取路由对象 router  useRouter
//   const router = useRouter()
// 2. 获取路由参数 route   useRoute
//   const route = useRoute
import { useRouter, useRoute } from 'vue-router'
import { useUserStore, useCountStore } from '@/stores'
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
const countStore = useCountStore()
const goList = () => {
  router.push('/list')
  console.log(router, route)
}
</script>
