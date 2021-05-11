import Vue from 'vue'
import cpn from './components/new_file.vue'

Vue.config.productionTip = false

new Vue({
	render:h=>h(cpn)
}).$mount('#app')
