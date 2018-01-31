import Vue from 'vue';
import Vuex from 'vuex';

import { chatData } from '../data/inkichatdata-short';
// NOTE: chatData is CONSTANT, its data never changes

Vue.use(Vuex);

// stub out the state here
// see official vuex example apps in tuts/vuex-dev/examples - e.g.
// chat
// counter-hot
// shopping-cart

export const store = new Vuex.Store({
  state: {
    chatData: [], // ???
    // OR simply assign the CONSTANT data imported above, like so:
    // CHATDATA: chatData
    sentMessages: [],
    currentMessage: [], // should this be an array?
    currentMsgId: 0
  },
  mutations: {
    // is this necessary - see above - ???
    'SET_CHATDATA'(state, chatData) {
      state.chatData = chatData;
    }
  },
  actions: {
    // is this necessary - see above - ???
    // I'm not really initializing the chatData because it doesn't change, it's CONSTANT throughout
    // What changes are the sentMessages, currentMessage, visibleMessages, etc.
    initChatData: ({ commit }) => {
      commit('SET_CHATDATA', chatData);
    }
  }
});
