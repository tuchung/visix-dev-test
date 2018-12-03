
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import SuiVue from 'semantic-ui-vue'
import VueRouter from 'vue-router'
import 'semantic-ui-vue'
import Resume from './components/Resume'
import About from './components/About'



// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'

/* Register component with one of 2 methods */

import Icon from 'vue-awesome/components/Icon'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.use(SuiVue);
Vue.use(VueRouter);
// Vue.component('example-we', require('./components/ExampleComponent.vue'));
Vue.component('navigation', require('./components/Navigation.vue'));
Vue.component('title-content', require('./components/Title.vue'));
Vue.component('v-icon', Icon)

const routes = [
    { path: '/', component: Resume }
    ,{ path: '/about', component: About }
]

const router = new VueRouter({
    routes
})

// Vue.config.productionTip = false


const app = new Vue({
    el: '#resume',
    router
});


