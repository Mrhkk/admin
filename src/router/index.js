import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import HomePage from '../pages/HomePage.vue'
import fileList from '../pages/FileList.vue'
import table from '../pages/table.vue'
import workRecord from '../pages/workRecord.vue'
// 修复路由点击同一个报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

const routes = [{
    path: '/',
    redirect: 'login'
},
{
    path: '/login',
    component: Login
}
]
const router = new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes
  })
  
router.beforeEach((to, from, next) => {
    if (to.path == '/login') return next();
    next()
})
export default router
export const asyncRouterMap = [
    {
        path: '/home',
        component: Home,
        children: [{
                path: '',
                component: HomePage,
                meta: {
                    title: '首页'
                }
            }, {
                path: '/fileList',
                component: fileList,
                meta: {
                    title: '文件列表'
                },
            }, {
                path: '/ApplyRecord',
                component: table,
                meta: {
                    title: '合并单元格'
                },
            }, {
                path: '/WorkRecord',
                component: workRecord,
                meta: {
                    title: '贝塞尔曲线'
                },
            }, {
                path: '/kaiTest',
                component: resolve => require(['../pages/kaiTest.vue'], resolve),
                meta: {
                    title: '测试图片'
                },
            },
            {
                path: '/moreTable',
                component: resolve => require(['../pages/moreTable.vue'], resolve),
                meta: {
                    title: '多级表格嵌套'
                },
            },
            {
                path: '/moreTable1',
                component: resolve => require(['../pages/moreS.vue'], resolve),
                meta: {
                    title: '多级表格嵌套1'
                },
            }
            //    , {
            //     path: '/addGoods',
            //     component: addGoods,
            //     meta: ['添加数据', '添加商品'],
            // }, {
            //     path: '/userList',
            //     component: userList,
            //     meta: ['数据管理', '用户列表'],
            // }, {
            //     path: '/shopList',
            //     component: shopList,
            //     meta: ['数据管理', '商家列表'],
            // }, {
            //     path: '/foodList',
            //     component: foodList,
            //     meta: ['数据管理', '食品列表'],
            // }, {
            //     path: '/orderList',
            //     component: orderList,
            //     meta: ['数据管理', '订单列表'],
            // }, {
            //     path: '/adminList',
            //     component: adminList,
            //     meta: ['数据管理', '管理员列表'],
            // }, {
            //     path: '/visitor',
            //     component: visitor,
            //     meta: ['图表', '用户分布'],
            // }, {
            //     path: '/newMember',
            //     component: newMember,
            //     meta: ['图表', '用户数据'],
            // }, {
            //     path: '/uploadImg',
            //     component: uploadImg,
            //     meta: ['文本编辑', 'MarkDown'],
            // }, {
            //     path: '/vueEdit',
            //     component: vueEdit,
            //     meta: ['编辑', '文本编辑'],
            // }, {
            //     path: '/adminSet',
            //     component: adminSet,
            //     meta: ['设置', '管理员设置'],
            // }, {
            //     path: '/sendMessage',
            //     component: sendMessage,
            //     meta: ['设置', '发送通知'],
            // }, {
            //     path: '/explain',
            //     component: explain,
            //     meta: ['说明', '说明'],
            // }
        ]
    }
  ]