import Vue from 'vue'
import axios from 'axios';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import App from './App.vue'




//import Chart from 'chart.js'
//import Vuechartjs from 'vue-chartjs'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
