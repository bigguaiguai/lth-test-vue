import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './base/css/base.less';
import axios from './config/axios';
import ECharts from 'vue-echarts'
Vue.component('v-chart',ECharts)
Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
