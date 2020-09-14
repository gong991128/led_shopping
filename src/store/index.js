import Vue from 'vue'
import Vuex from 'vuex'
// import getters from './getters'
import app from './modules/app'
import cart from './cart'

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    }
  },

  modules: {
    app,
    cart,
  },
  // getters,
  // vuex插件
  plugins: [
    createPersistedState({
      storage: window.localStorage,
    }),
  ],
})

export default store
