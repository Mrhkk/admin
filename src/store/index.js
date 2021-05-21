import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    debug: false,
    imgPreviewShow: false,
    imgPreviewSrc: "",
    fileFormat: ["jpg", "jpeg", "png", "gif"],
    baseServiceUrl: 'http://47.110.235.181:8183/wangdianApi',
    Number: 1
  },
  getters: {
    getToDo (state) {
    return state.Number++
    // filter 迭代过滤器 将每个item的值 item.done == true 挑出来， 返回的是一个数组
    }
  },   
  mutations: {
    add(state, num1){
      state.Number= state.Number+ num1
    }
  },
  actions: {
     saveAsyncRouteData({ commit, state }, params) {
        router.addRoutes(params)
        console.log(666, router.currentRoute)
      },
      addAsync({ commit, state }, params) {
           commit('add', 2)
      }
  }
})
