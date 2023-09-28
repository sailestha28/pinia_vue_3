import { createStore } from 'vuex'

const store = createStore({
  state: {
    isMenuOpen: localStorage.getItem('isMenuOpen') || false
    // Define your state here
  },
  mutations: {
    // Define your mutations here
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen
    }
  },
  actions: {
    // Define your actions here
    toggleMenu({ commit }) {
      // Perform asynchronous operations if needed
      commit('toggleMenu')
    }
  },
  getters: {
    // Define your getters here
    
  }
})

export default store
