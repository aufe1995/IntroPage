import VueRouter from 'vue-router';
import Vue from 'vue';

import Main from '../views/main.vue'
import Menu1 from '../views/menu1.vue'
import Menu2 from '../views/menu2.vue'
import Menu3 from '../views/menu3.vue'
import Menu4 from '../views/menu4.vue'


Vue.use(VueRouter);

const Router = new VueRouter({
	mode:'history', //해쉬값 제거 방식
    routes: [{
        path: '/', 
        redirect: '/main' 
    }, {
        path: '/main',
        component: Main
    }, {
        path: '/Menu1',
        component: Menu1
    }, {
        path: '/Menu2',
        component: Menu2
    }, {
        path: '/Menu3',
        component: Menu3
    }, {
        path: '/Menu4',
        component: Menu4
    }]
});