import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    onIncrement(state) {
      if (state.count >= 0) {
        state.count++;
      }
    },
    onDecrement(state) {
      if (state.count > 0) {
        state.count--;
      }
    }
  },
  actions: {
    onIncrement(context) {
      context.commit('onIncrement');
    },
    onDecrement(context) {
      context.commit('onDecrement');
    }
  },
  modules: {
  }
})
