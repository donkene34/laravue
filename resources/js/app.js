/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('add-task',require('./components/AddTaskComponent').default);

import Home from './components/HomeComponent.vue'
import Task from './components/TaskComponent.vue'
import Test from './components/TestComponent.vue'

const routes = [
    {
        path: '/home',
        component:Home
    },
    {
        path: '/tasks',
        component:Task
    },
    {
        path: '/test',
        component:Test
    }
];

const router = new VueRouter({routes});


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router: router
});
