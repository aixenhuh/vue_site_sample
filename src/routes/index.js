import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '../components/LoginView'
import userProfileView from '../components/userProfileView'
import ContentView from '../components/ContentView'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: ContentView,
        },
        {
            // path : url 주소
            path: '/login',
            // component: url 주소로 갔을 때 표시될 컴포넌트
            component: LoginView,
        },
        {
            // path : url 주소
            path: '/main',
            // component: url 주소로 갔을 때 표시될 컴포넌트
            component: ContentView,
        },
        {
             path: '/userProfile',
             name : '',
             component : userProfileView,
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
        },
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

router.beforeEach((to, from, next) => {
    console.log(to.path);
    if (to.path != '/main' ){
        console.log("여기까지..?")
        if(localStorage.getItem('token')) {   
            console.log("여긴간");
            return next();
        } else {
            console.log("여긴가")
            next()
        }
    }
    next();
})