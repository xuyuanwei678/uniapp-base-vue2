import App from './App'


import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

import {router,RouterMount} from './router/index.js'
Vue.use(router)

//uview UI
import uView from "uview-ui";
Vue.use(uView);
//uview UI end

//uview store
import store from './store'
let vuexStore = require('./store/$u.mixin.js')
Vue.mixin(vuexStore)
import animate from 'animate.css'
Vue.use(animate)
//uview store end

const app = new Vue({
	store,
    ...App
})
app.$mount()
