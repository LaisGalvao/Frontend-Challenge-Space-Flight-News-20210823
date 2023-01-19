import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: []
  },
  getters: {
    cards: (state) => state.cards
  },
  mutations: {
    getArticles: (state, payload) => {
      state.cards = payload
    }
  },
  actions: {
    getArticles: (context, payload) => {
      context.commit('getArticles', payload)
    }
  },
  modules: {
  }
})
