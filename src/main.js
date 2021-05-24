import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import ejercicio1 from "./components/ejercicio1.vue";
import ejercicio2 from "./components/ejercicio2.vue";
import ejercicio3 from "./components/ejercicio3.vue";
import ejercicio4 from "./components/ejercicio4.vue";
import ejercicio5 from "./components/ejercicio5.vue";
import home from "./components/home.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path:'/',
      name: 'home',
      component: home
    },
    {
      path: '/ejercicio1',
      name: 'ejercicio1',
      component: ejercicio1
    },
    {
      path: '/ejercicio2',
      name: 'ejercicio2',
      component: ejercicio2
    },
    {
      path: '/ejercicio3',
      name: 'ejercicio3',
      component: ejercicio3
    },
    {
      path: '/ejercicio4',
      name: 'ejercicio4',
      component: ejercicio4
    },
    {
      path: '/ejercicio5',
      name: 'ejercicio5',
      component: ejercicio5
    },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
