import Vue from 'vue'
import Vuex from 'vuex'

import CategoryModule from '../store/modules/categoryModule'

import TodoModule from '../store/modules/todoModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
 CategoryModule,TodoModule
  }
})