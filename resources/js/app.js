
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
import App from './components/App'
import Floor1 from './components/maps/Floor1'
import Floor2 from './components/maps/Floor2'
import Floor3 from './components/maps/Floor3'
import Floor4 from './components/maps/Floor4'



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
Vue.component('title-content', require('./components/Title.vue'));
Vue.component('directory', require('./components/Directory.vue'));
Vue.component('v-icon', Icon)

const routes = [
    { path: '/', component: Floor1 },
    { path: '/1', component: Floor1 },
    { path: '/1/104', component: Floor1, props: {p104: true}},
    { path: '/2', component: Floor2 },
    { path: '/2/206', component: Floor2, props: {p206: true}},
    { path: '/2/241', component: Floor2, props: {p241: true}},
    { path: '/2/242', component: Floor2, props: {p242: true}},
    { path: '/3', component: Floor3 },
    { path: '/4', component: Floor4 }

]

const router = new VueRouter({
    routes
})

// Vue.config.productionTip = false


const app = new Vue({
    el: '#resume',
    router
});


