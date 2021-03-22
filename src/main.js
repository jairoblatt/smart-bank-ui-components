import Vue from 'vue';
import router from './router';
import App from './App.vue';
import VueMeta from 'vue-meta';

// Global components
import './components';

// Icons by material desing
import '@mdi/font/css/materialdesignicons.min.css';

Vue.config.productionTip = false;

// Plugins
Vue.use(VueMeta);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
