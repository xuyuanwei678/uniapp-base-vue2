const files = require.context('.', false, /\.js$/)
const modules = []

files.keys().forEach(key => {
	if (key === './autoImport.js') return
	const item = files(key).default
	modules.push(...item)
})

export default modules
