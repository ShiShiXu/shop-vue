// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.config.productionTip = false;

// main.js入口文件创建一个 Vue 实例
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
