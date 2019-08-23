import { getUserInfo } from '../api/index';
export default {
    FETCH_LOGINS(context, payload) {
        getUserInfo(payload).then(response => {
            context.commit('SET_LOGINS', response.data.token);
        }).catch(error => {
            console.log(error);
        })
    }
}