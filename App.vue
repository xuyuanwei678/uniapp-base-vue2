<script>

	import h5PagesAnimation from './components/h5-pages-animation/';
	export default {
		mixins: [h5PagesAnimation],
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	@import url("/static/iconfont/iconfont.css");
	// page{background: #f2f2f2;}
	
</style>
