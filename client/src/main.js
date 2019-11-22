import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// Webpack CSS import
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

// VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.
Vue.use(VueOnsen)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
