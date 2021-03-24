import Vue from 'vue';
import router from '@/router';
import App from '@/App.vue';
import store from '@/store';
import '@/plugins';
import '@/components';
import i18n from '@/plugins/i18n';

// Icons by material desing
import '@mdi/font/css/materialdesignicons.min.css';

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
