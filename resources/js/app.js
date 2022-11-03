/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('InfiniteLoading', require('vue-infinite-loading'));
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
 import Swal from 'sweetalert2'
 window.Swal = Swal
 const Toast = Swal.mixin({
 toast: true,
 position: 'center',
 showConfirmButton: false,
 timer: 3000,
 timerProgressBar: true,
 onOpen: (toast) => {
 toast.addEventListener('mouseenter', Swal.stopTimer)
 toast.addEventListener('mouseleave', Swal.resumeTimer)
}
})
window.Toast = Toast
 import VueRouter from 'vue-router'
 Vue.use(VueRouter)
 import {routes} from './routes'
 import Vuex from 'vuex'
 Vue.use(Vuex)
 import store from "./store/index"
 import VueGoodTablePlugin from 'vue-good-table';

// import the styles
import 'vue-good-table/dist/vue-good-table.css'
import "vue-select/dist/vue-select.css";
Vue.use(VueGoodTablePlugin);
import VueTagsInput from '@johmun/vue-tags-input';
Vue.use(VueTagsInput);
import VueBarcode from 'vue-barcode';
Vue.component('barcode', VueBarcode);
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

Vue.use(Autocomplete)
import Vue from "vue";
import vSelect from "vue-select";
Vue.component("v-select", vSelect);

window.$ = window.jQuery = require('jquery');
export  const router = new VueRouter({
    routes:routes,
   
    scrollBehavior ( to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
    
});
router.beforeResolve((to, from, next) => {  
  if (to.name) {  
    NProgress.start()
  }
  next()
})
router.afterEach((to, from) => { 
  NProgress.done()
})

import VueHtmlToPaper from 'vue-html-to-paper';

const options = {
  name: '_blank',
  specs: [
    'fullscreen=no',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css',
    './main.d810cf0ae7f39f28f336.css'
    
  ],
  timeout: 1000, // default timeout before the print window appears
  autoClose: true, // if false, the window will not close after printing
  windowTitle:'', // override the window title
}

Vue.use(VueHtmlToPaper, options);
// import VueObserveVisibility from "vue-observe-visibility";
// Vue.use(VueObserveVisibility);

// or, using the defaults with no stylesheet
Vue.use(VueHtmlToPaper);
const app = new Vue({
    el: '#app',
    router,
    store
});

