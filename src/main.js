import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { router } from './routes/routes.js';
import {store} from './store/index.js'; 
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(VModal,{ dialog: true });
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
