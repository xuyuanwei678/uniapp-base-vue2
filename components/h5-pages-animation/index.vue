<script>
// #ifdef H5
var hpa_first_Show = true
var ios_gesture_back = true
const is_ios = uni.getSystemInfoSync().platform === 'ios'
const doms = {
	input: 'input',
	textarea: 'textarea',
	video: 'video', // 会出现闪动
	webView: 'uni-web-view', // not
	scrollView: 'uni-scroll-view>.uni-scroll-view>.uni-scroll-view',
}
let defaultNotPath = ['/preview-image','/choose-location','/choose-location']
// #endif
import './index.css'
import {router} from '@/router/index.js'
export default {
	// #ifdef H5
	onBackPress(options) {
	    //返回上一页
		console.log('返回上一页')
	},
	onLaunch: function() {
		console.log('启动')
		if (hpa_first_Show) {
			const page1_class = document.querySelector('uni-page').classList
			page1_class.add('hpa-show')
			// 预创建虚拟页
			document.write('<uni-page2 id="page2"></uni-page2>')
		}
		hpa_first_Show = false
		// 拦截返回事件
		// uni.addInterceptor('navigateBack',{
		// 	invoke: true,
		// 	success: (e) => {
		// 		ios_gesture_back = false
		// 	}
		// })
		router.beforeEach((to, from, next) => {
			
			if(to.meta.tree<from.meta.tree){
				this.onNext('hide',next)
				return
			}else if(to.meta.tree==from.meta.tree){
				// tabBar切换无动画
				next && next();
				setTimeout(() => {
					const page1_class = document.querySelector('uni-page').classList
					page1_class.add('hpa-show')
				}, 10)
				return
			}else if(to.meta.tree>from.meta.tree){
				this.onNext('show',next)
				return
			}
			next()
			setTimeout(() => {
				const page1_class = document.querySelector('uni-page').classList
				page1_class.add('hpa-show')
			}, 10)
			// tabBar切换无动画
			// if (to.type == 'switchTab' || defaultNotPath.includes(to.path) || defaultNotPath.includes(from.path)) {
			// 	next && next();
			// 	setTimeout(() => {
			// 		const page1_class = document.querySelector('uni-page').classList
			// 		page1_class.add('hpa-show')
			// 	}, 10)
			// 	return
			// }
			// 页面回退动画
			// if (!to.type || to.type == 'navigateBack') {
			// 	console.log('回退动画',to)
			// 	if(!ios_gesture_back || !is_ios) {
					
			// 		this.onNext('hide',next)
			// 	}else {
			// 		this.onNext('hide',next)
			// 		//next()
			// 	}
			// 	ios_gesture_back = true
			// 	return
			// }
			// // 页面跳转动画
			// this.onNext('show',next)
		})
	},
	methods: {
		onNext(action,next) {
			// 填充虚拟页
			const elAll = (page,el) => document.querySelectorAll(`${page} ${el}`)
			const page2 = document.getElementById('page2')
			page2.innerHTML = document.querySelector('uni-page').innerHTML
			// 调整虚拟页样式
			const page2_class = page2.classList
			// 保持页面滚动高度
			let sh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
			page2.querySelector('uni-page-wrapper').style.cssText = 'margin-top:-' + sh + 'px'
			if(action == 'hide') {
				page2_class.add('hpa-High')
			}
			page2_class.add('hpa-show')
			// 获取页面中Input参数
			const inputList = elAll('uni-page',doms.input) || []
			const input2List = elAll('uni-page2',doms.input) || []
			inputList.forEach((input,i) => input2List[i].value = input.value)
			// 获取页面中Textarea参数
			const textareaList = elAll('uni-page',doms.textarea) || []
			const textarea2List = elAll('uni-page2',doms.textarea) || []
			textareaList.forEach((textarea,i) => textarea2List[i].value = textarea.value)
			// 获取页面中Video播放
			// const videoList = elAll('uni-page',doms.video) || []
			// const video2List = elAll('uni-page2',doms.video) || []
			// videoList.forEach((video,i) => {
			// 	video2List[i].currentTime = video.currentTime
			// })
			// 获取页面中ScrollView滚动位置
			const scrollViewList = elAll('uni-page',doms.scrollView) || []
			const scrollView2List = elAll('uni-page2',doms.scrollView) || []
			scrollViewList.forEach((scrollView,i) => {
				scrollView2List[i].scrollTop = scrollView.scrollTop
				scrollView2List[i].scrollLeft = scrollView.scrollLeft
			})
			next && next()
			if(action == 'show') {
				setTimeout(() => {
					// 动画起点
					const page1_class = document.querySelector('uni-page').classList
					page1_class.add('hpa-animation-before')
					setTimeout(() => {
						page2_class.add('hpa-low')
						page1_class.add('hpa-show')
						// 动画开始
						setTimeout(() => {
							page1_class.add('hpa-animation', 'hpa-animation-after')
							page2_class.add('hpa-animation', 'hpa-animation-enter')
							// 动画结束
							setTimeout(() => {
								page1_class.remove('hpa-animation', 'hpa-animation-before', 'hpa-animation-after')
								page2_class.remove('hpa-show', 'hpa-low', 'hpa-animation', 'hpa-animation-enter')
								page2.innerHTML = ''
							}, 310)
						}, 10)
					}, 10)
				}, 10)
			}else {
				setTimeout(() => {
					// 动画起点
					const page1_class = document.querySelector('uni-page').classList
					page1_class.add('hpa-animation-enter', 'hpa-show')
					// 动画开始
					setTimeout(() => {
						page1_class.add('hpa-animation', 'hpa-animation-after')
						page2_class.add('hpa-animation', 'hpa-animation-before')
						// 动画结束
						setTimeout(() => {
							page1_class.remove('hpa-animation', 'hpa-animation-after', 'hpa-animation-enter')
							page2_class.remove('hpa-show', 'hpa-High', 'hpa-animation', 'hpa-animation-before')
							page2.innerHTML = ''
						}, 310)
					}, 10)
				}, 10)
			}
		},
	}
	// #endif
};
</script>
