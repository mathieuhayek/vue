import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store';
import router from './router';

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')

export default new VueRouter({
  routes: [
      {
          path: '/',
          redirect: {
              name: "Homepage"
          }
        },
        {
          path: '/product',
          redirect: {
              name:"ProductListItem"
          }
        },
        {
          path: '/product/:id',
          redirect: {
            name :"Product.vue"
          }
        }
        
      ]
    })