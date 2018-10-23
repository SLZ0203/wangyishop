import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home/Home.vue';
import Recommend from '../pages/Recommend/Recommend.vue';
import Classify from '../pages/Classify/Classify.vue';
import Cart from '../pages/Cart/Cart.vue';
import Person from '../pages/Person/Person.vue';
import Search from '../pages/Search/Search.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/recommend',
      component: Recommend,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/person',
      component: Person,
    },
    {
      path: '/search',
      component: Search,
    },
  ]
})
