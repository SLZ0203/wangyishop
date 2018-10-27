import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../pages/Home/Home.vue');
const Recommend = () => import('../pages/Recommend/Recommend.vue');
const Classify = () => import('../pages/Classify/Classify.vue');
const Cart = () => import('../pages/Cart/Cart.vue');
const Person = () => import('../pages/Person/Person.vue');
/*import Home from '../pages/Home/Home.vue';
import Recommend from '../pages/Recommend/Recommend.vue';
import Classify from '../pages/Classify/Classify.vue';
import Cart from '../pages/Cart/Cart.vue';
import Person from '../pages/Person/Person.vue';*/
import Search from '../pages/Search/Search.vue';
import Login from '../pages/Login/Login.vue';
import StartPage from '../pages/StartPage/StartPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/startpage'
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
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/startpage',
      component: StartPage,
    },
  ]
})
