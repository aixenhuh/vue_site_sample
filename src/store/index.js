import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        login: [],
        accessToken: localStorage.getItem('accessToken'),
        isAuth : false,
        userInfo : localStorage.getItem('userInfo')
    },
    getters: {
        fetchedLogin(state) {
            return state.login;
        },
        fetchedToken(state) {
            return state.accessToken
        },
        getIsAuth(state) {
            return state.isAuth
        },
        getUserInfo(state) {
            return state.userInfo
        }
    },
    mutations,
    actions
});