const home = [
	{
		path: '/pages/init/init',
		name: 'init',
		aliasPath:'/', //对于h5端你必须在首页加上aliasPath并设置为/
		meta: {
			title: 'init',
			tree: 0,
		},
	},
	{
	//注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
		path: '/pages/index/index',
		name: 'index',
		meta: {
			title: '首页',
			tree: 1,
		},
	},
]
export default home
