import Vue from 'vue'
import Vuex from 'vuex'
import apiMessage  from './../api/message';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    messages: [],
  },
  mutations: {
    message_loading(state) {
      state.status = 'loading'
    },
    get_message_success(state, messages) {
      state.status = 'success';
      state.messages = messages;
    },
    get_message_error(state) {
      state.status = 'error';
    },
  },
  actions: {
    fetchMessage({ commit }) {
      return new Promise((resolve, reject) => {
        commit('message_loading');
        apiMessage.getMessage()
          .then(resp => {
            const messages = resp.data.data;
            commit('get_message_success', messages);
            resolve(resp)
          })
          .catch(err => {
            commit('get_message_error');
            reject(err)
          })
      })
    },
  },
  getters: {
    messages: state => state.messages,
  }
})
