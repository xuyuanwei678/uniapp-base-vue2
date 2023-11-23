const CONFIG = {
    // 开发环境配置
    development: {
        Api_url:"/api",
		Ws_url: "",
    },
    // 生产环境配置
    production: {
        Api_url:"/api",
		Ws_url: "",
    }
};
export default CONFIG[process.env.NODE_ENV];
