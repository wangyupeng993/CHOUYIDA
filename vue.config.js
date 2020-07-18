const baseURL = process.env.NODE_ENV === 'development'?'https://www.eswochi.com':'/';

module.exports = {
    publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
    lintOnSave: true,
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: false,
    devServer: {
        port: 80, //端口号
        host: 'localhost',// 本地连接
        open: true, // 是否自动启动浏览器
        proxy: {
            '/addons': {
                target: baseURL,
                ws: true,
                https: true,
                changeOrigin: true,
                pathRequiresRewrite: {
                    '^/addons': '/addons'
                }
            },
            '/api': {
                target: baseURL,
                ws: true,
                https: true,
                changeOrigin: true,
                pathRequiresRewrite: {
                    '^/api': '/api'
                }
            },
        }
    },
    // 开发配置
    configureWebpack: config => {
        config.entry.app = ['babel-polyfill', './src/main.ts']
    },
    // 生产配置
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = '我痴酒廊';
            return args;
        })
        // 压缩代码
        config.optimization.minimize(true)
        // 分割代码
        config.optimization.splitChunks({chunks: 'all'})
    }
}
