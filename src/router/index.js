import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import HomePage from '../pages/HomePage.vue'
import fileList from '../pages/FileList.vue'
// 修复路由点击同一个报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            redirect: 'login'
        },
        {
            path: '/login',
            component: Login
        },
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
})

router.beforeEach((to, from, next) => {
    if (to.path == '/login') return next();
    next()
})
export default router