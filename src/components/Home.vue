<!--  -->
<template>
  <div class="home">
    <el-container class="homeContainer">
      <el-header>
        <div>电商后台管理系统</div>
        <el-button type="info" @click="edit">退出</el-button>
      </el-header>
      <el-container>
        <el-aside :width="isCollapse?'64px':'200px'">
          <div class="toggle_button" @click="toggleCollapse">|||</div>
          <el-menu
            background-color="#333744"
            :default-active="onRoutes"
            text-color="#fff"
            active-text-color="#409EEF"
            unique-opened
            :collapse="isCollapse"
            :collapse-transition="false"
            router
          >
             <template v-for="item in arr">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                  {{ threeItem.title }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
          </el-menu>
        </el-aside>
        <el-main>
                <v></v>
                <transition name="v" mode="out-in">
          <keep-alive>
            <router-view  v-if="$route.meta"></router-view>
          </keep-alive>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import v from './Tag.vue'
import bus from '../../static/js/bus'
export default {
  components: {
    v
  },
  data() {
    return {
      arr: [
        {
          icon: 'el-icon-s-custom',
          index: 'home',
          title: '客户服务',
          limit: true,
          id: '1'
        },
        {
          icon: 'el-icon-upload',
          index: 'fileList',
          title: '文件上传',
          limit: true,
          id: '2'
        },
        {
          icon: 'el-icon-tickets',
          index: 'ApplyRecord',
          title: '财务退款',
          limit: true,
          id: '3'
        },
        {
          icon: 'el-icon-document-checked',
          index: 'WorkRecord',
          title: '工单记录',
          limit: true,
          id: '4'
        },
        {
          icon: 'el-icon-download',
          index: '1',
          title: '理赔信息',
          limit: true,
          id: '5',
          subs: [
            {
              icon: 'el-icon-download',
              index: 'ClaimsExport',
              title: '理赔账单',
              limit: true,
              id: '5'
            },
            {
              icon: 'el-icon-download',
              index: 'BillRecord',
              title: '账单记录',
              limit: true,
              id: '5'
            }
          ]
        },
        {
          icon: 'el-icon-truck',
          index: 'ExpressCollection',
          title: '快递揽收',
          limit: true,
          id: '6'
        },
        {
          icon: 'el-icon-office-building',
          index: 'StockSearch',
          title: '库存查询',
          limit: true,
          id: '7'
        },
        {
          icon: 'el-icon-money',
          index: 'Notice',
          title: '通知公告',
          limit: true,
          id: '8'
        },
        {
          icon: 'el-icon-money',
          index: 'KnowledgeAdmin',
          title: '知识库管理',
          limit: true,
          id: '9'
        },
        {
          icon: 'el-icon-money',
          index: 'invoiceManage',
          title: '发票管理',
          limit: false,
          id: '10'
        },
        {
          icon: 'el-icon-money',
          index: 'WorkFlow',
          title: '我的工作',
          limit: false,
          id: '14'
        },
        {
          icon: 'el-icon-money',
          index: 'WorkFlowAdmin',
          title: '管理员流程',
          limit: false,
          id: '15'
        },
        {
          icon: 'el-icon-receiving',
          index: 'StorageManage',
          title: '售后仓库管理',
          limit: true,
          id: '16'
        }
      ],
      isCollapse: false
    };
  },
   computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
    edit() {
      this.$router.push("/login");
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
     // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on('tags', msg => {
      let arr = []
      for (let i = 0, len = msg.length; i < len; i++) {
        if (msg[i].name === 'EditNoticePage' || msg[i].name === 'CreateNoticePage' || msg[i].name === 'CreateKnowledge' || msg[i].name === 'EditKnowledge') {
          console.log(msg[i].name);
          return
        }
        msg[i].name && arr.push(msg[i].name)
      }
      this.tagsList = arr
    })
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.home {
  width: 100%;
  height: 100%;
}
.homeContainer {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-size: 20px;
}
.el-aside {
  background-color: #333744;
}
.el-menu {
  border: none;
}
.el-main {
  background-color: #eaedf1;
  padding:0px;
}
.toggle_button {
  background-color: #4a5064;
  color: white;
  font-size: 10px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
/* 包裹路由的移入移出动画 */
.fade-enter-active,
.fade-leave-avtive {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>