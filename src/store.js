// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: (state,num) => {
      const obj = state
      obj.count = num
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    }
  }
})

export default store