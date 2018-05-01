// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App.vue'
import { store } from './store/store'
import router from './router'
import jQuery from 'jquery'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import AnimateCSS from 'animate.css'
// import { Dropbox } from 'dropbox'

fontawesome.library.add(brands, regular, solid)

Vue.config.productionTip = false

global.jQuery = jQuery
Vue.use(BootstrapVue)
Vue.use(VeeValidate)
Vue.use(AnimateCSS)
// Vue.use(Dropbox)

/* eslint-disable */
new Vue({
  store: store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
