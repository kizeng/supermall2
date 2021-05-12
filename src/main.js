import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router
}).$mount('#app')


