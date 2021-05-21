// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
// import router from './router'
import router, {asyncRouterMap} from './router'
import store from './store/index'
import ajax from '../static/js/ajax.js'

import Vuex from 'vuex'

router.addRoutes(asyncRouterMap)
Vue.use(Vuex)
Vue.use(ajax)
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
