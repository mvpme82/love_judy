import {
  createStore
} from 'vuex'
import raw_data from '../../mock/_data_/news/landingreact.json'

export default createStore({
  state: {
    tabInfo: raw_data.data.data.tabInfo
  },
  mutations: {
    addTab(state, {
      title,
      name
    }) {
      state.tabInfo.push({
        title,
        name
      });
    }
  },
  actions: {
    addItemToTabs({
      commit
    }, {
      title,
      name
    }) {
      commit('addTab', {
        title,
        name
      });
    }
  },
  modules: {}
})