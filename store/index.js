import Vuex from 'vuex'
const cookieparser = process.server ? require('cookieparser') : undefined;
const createStore = () => {
  return new Vuex.Store({
    state: {
      auth: '', 
    },
    mutations: {
      setAuth (state, item) {
        state.auth = item
      },
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        let auth = null;
        let profile = null;
        if (req.headers.cookie) {
          const parsed = cookieparser.parse(req.headers.cookie);
          try {
            auth = JSON.parse(parsed.header);
          } catch (err) {
            console.log(err);
            // No valid cookie found
          }
        }
        commit('setAuth', auth);
      },

    }
  })
};
export default createStore
