// router.js
import {RouterMount,createRouter} from 'uni-simple-router';
import modules from './modules/autoImport.js'
console.log(modules)
const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,  
	routes: [...modules]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	//console.log('跳转开始',to,from)
	next();
});
// 全局路由后置守卫
router.afterEach((to, from) => {
    //console.log('跳转结束')
})

export {
	router,
	RouterMount
}