import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      times: [],
      fromMeToGmail: [],
      fromMeToNonGmail: [],
      toMeFromGmail: [],
      toMeFromNonGmail: []
    }
  },
  mutations: {
    setStats(state, payload) {
      state.times = payload.times
      state.fromMeToGmail = payload.fromMeToGmail
      state.fromMeToNonGmail = payload.fromMeToNonGmail
      state.toMeFromGmail = payload.toMeFromGmail
      state.toMeFromNonGmail = payload.toMeFromNonGmail
    }
  }
})

createApp(App).use(router).use(store).mount('#app')
