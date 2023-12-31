import Vue from 'vue'
// import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'

import './assets/main.css'
// Vue.use(Vuelidate);

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
