export default {
    SET_LOGINS(state, accessToken) {
        state.accessToken = accessToken;

        // 토큰을 로컬 스토리지에 저장
        localStorage.accessToken = accessToken;
    },
    SET_AUTH(state, isAuth){
        state.isAuth = isAuth;
    },
    SET_LOGOUT(state) {
        state.accessToken = null
        delete localStorage.accessToken
    },
    SET_USER(state, userInfo) {
        state.userInfo = userInfo;

        // 토큰을 로컬 스토리지에 저장
        localStorage.userInfo = userInfo;
    }
}