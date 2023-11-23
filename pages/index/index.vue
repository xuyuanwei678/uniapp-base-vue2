<template>
	<view class="content">
		8
	</view>
</template>

<script>
	
	export default {
		components:{
			
		},
		data() {
			return {
				
			}
		},
		onLoad() {
			this.title=process.env.NODE_ENV;
			//存
			this.$u.vuex('vuex_test', '使用vuex')
			//取
			console.log(this.vuex_test)
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
