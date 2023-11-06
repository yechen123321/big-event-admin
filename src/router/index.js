import { createRouter, createWebHistory } from 'vue-router'

// createRouter 创建路由实例
// 配置 history 模式
// 1. history模式：createWebHistory      地址栏不带 #
// 2. hash模式：   createWebHashHistory  地址栏带 #

// vite 中的环境变量 import.meta.env.BASE_URL
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

export default router
