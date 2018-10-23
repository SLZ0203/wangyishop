import Vue from 'vue'
import App from './App.vue';
import {Button} from 'mint-ui'
import router from './router';
import store from './store';
import HeaderTop from './components/HeaderTop/HeaderTop.vue'

Vue.config.productionTip = false;

//注册全局组件
Vue.component('HeaderTop', HeaderTop);
Vue.component(Button.name, Button);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
