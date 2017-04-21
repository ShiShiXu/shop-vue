import Vue from 'vue';
import VueRouter from 'vue-router';
import seller from '../components/seller/seller.vue';
import goods from '../components/goods/goods.vue';
import ratings from '../components/ratings/ratings.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }
  ]
});
