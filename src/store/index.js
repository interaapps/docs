import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    navTitle: "intera.dev",
    auth: {
      loggedIn: false,
      user: null,
      loading: true
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
export default store