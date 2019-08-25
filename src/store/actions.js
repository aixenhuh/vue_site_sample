import { getUserInfo } from '../api/index';
import VueCookie from 'vue-cookie';
import axios from 'axios';

export default {
    FETCH_LOGINS(context, payload) {
        getUserInfo(payload).then(response => {
            if(response.data.token) {
                VueCookie.set('token', response.data.token, { expires: '2m' });
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}` 
            }
            context.commit('SET_LOGINS', response.data.token);
            context.commit('SET_AUTH', true);
            context.commit('SET_USER', response.data.userInfo);
        }).catch(error => {
            console.log(error);
        })
    },
    FETCH_LOGOUT({commit}) {
        axios.defaults.headers.common['Authorization'] = undefined;
        commit('SET_LOGOUT')
    }
}