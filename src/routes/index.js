import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '../components/LoginView'
import ContentView from '../components/ContentView'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/main',
        },
        {
            // path : url 주소
            path: '/login',
            name: 'login',
            // component: url 주소로 갔을 때 표시될 컴포넌트
            //component : createListView('NewsView'),
            component: LoginView,
        },
        {
            // path : url 주소
            path: '/main',
            name: 'main',
            // component: url 주소로 갔을 때 표시될 컴포넌트
            //component : createListView('NewsView'),
            component: ContentView,
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