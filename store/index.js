import Vuex from "vuex"

const createStore = () => {
  return new Vuex.Store({
    mutations: {
      globalData(state, value) {
        state.globalData = value
      }
    }
  })
}

export default createStore
