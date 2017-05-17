// import Vue from 'vue';
window.Vue = require('vue');
window.moment = require('moment');
Vue.component('cmpu-table', require('./components/cpmu-table.vue'));

// import 'bootstrap-sass';

if ( document.querySelector('#app')){
    const app = new Vue({
        el: '#app'
    });
}

