// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import * as types from './store/mutation-types';

Vue.config.productionTip = false;
Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    msg: 'Hello Vuex Store.',
  },
  mutations: {
    [types.UPDATE_MESSAGE](state, newMsg) {
      state.msg = newMsg;
    },
  },
  actions: {
    repeat(context) {
      let msg = context.state.msg
      context.commit(types.UPDATE_MESSAGE, `${msg} ${msg}`)
    },
  }
});

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
