import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '../components/LoginView'
//import AppView from '../App.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode : 'history',
    routes : [
        // {
        //     path: '/',
        //     redirect : '/',
        //     component : AppView
        // },
        {
            // path : url 주소
            path : '/Login',
            name : 'login',
            // component: url 주소로 갔을 때 표시될 컴포넌트
            //component : createListView('NewsView'),
            component : LoginView,
        },
        // {
        //     path: '/ask',
        //     name : 'ask',
        //     //component: createListView('AskView'),
        //     component : AskView,
        //     beforeEnter : (to, from, next) => {
        //         bus.$emit('start:spinner');
        //         store.dispatch('FETCH_LIST', to.name).then(()=> {
        //             //bus.$emit('end:spinner');
        //             next();
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        //     }
        // },
        // {
        //     path: '/jobs',
        //     name : 'jobs',
        //     //component: createListView('JobsView'),
        //     component : JobsView,
        //     beforeEnter : (to, from, next) => {
        //         bus.$emit('start:spinner');
        //         store.dispatch('FETCH_LIST', to.name).then(()=> {
        //             //bus.$emit('end:spinner');
        //             next();
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        //     }
        // },
        // {
        //     path : '/user/:id',
        //     component : UserView
        // },
        // {
        //     path : '/item/:id',
        //     component : ItemView
        // }
    ]
});