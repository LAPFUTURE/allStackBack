import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types ={
  SET_AUTHENTICATED:"SET_AUTHENICATED",
  SET_USER:"SET_USER",

}

const state = {
  isAuthenticated:false,
  user:{}
}

const getters = {
  isAuthenticated:(state)=>{return state.isAuthenticated},
  user:(state)=>{return state.user}
}

const mutations = {
  [types.SET_AUTHENTICATED](state,isAuthenticated){
    isAuthenticated ? state.isAuthenticated = isAuthenticated : state.isAuthenticated = false;
  },

  [types.SET_USER](state,user){
    user ? state.user = user : state.user = {};
  }
}

const actions ={
  //setAuthenticated
  setAuthenticated:({commit},isAuthenticated)=>{
    commit(types.SET_AUTHENTICATED,isAuthenticated);
  },
  setUser:({commit},user)=>{
    commit(types.SET_USER,user);
  },
  clearCurrentState:({commit})=>{
    commit(types.SET_AUTHENTICATED,false);
    commit(types.SET_USER,null);
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions

})
