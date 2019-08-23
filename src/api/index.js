import axios from 'axios';


const config = {
    baseUrl: process.env.VUE_APP_LOCALURL
};

// 로그인 통신 
function getUserInfo(userInfo) {
    return axios.post(`${config.baseUrl}auth/login?id=${userInfo.id}&password=${userInfo.password}`);
}

export {
    getUserInfo
}