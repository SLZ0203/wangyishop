import Vue from 'vue'
import {Button} from 'mint-ui';
import router from './router';
import store from './store';
import App from './App.vue';
import './mock/mockServer'
import HeaderTop from './components/HeaderTop/HeaderTop.vue'
import FtWrap from './components/FtWrap/FtWrap.vue'
import goTop from './components/goTop/goTop.vue'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'

Vue.use(VueLazyload, {
  loading
});
//Vue.config.productionTip = false;

//注册全局组件
Vue.component('HeaderTop', HeaderTop);
Vue.component('FtWrap', FtWrap);
Vue.component('goTop', goTop);
Vue.component(Button.name, Button);//<mt-button>

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
