import Vuex from 'vuex'


const query = `
  {
    "categories": *[_type == "category"],
    "manufactors": *[_type == "manufactor"]
  }
`

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0
    },
    mutations: {
      globalData (state, value) {
        state.globalData = value
      },
      increment (state) {
        state.counter++
      }
    }
  })
}

export default createStore