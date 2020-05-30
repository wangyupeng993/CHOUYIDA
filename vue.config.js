const TerserPlugin = require('terser-webpack-plugin');
const baseURL = process.env.NODE_ENV === 'development'?'/':'http://49.232.43.137:9005';
const publicPath= process.env.NODE_ENV === 'development' ? '/' : './';

module.exports = {
    publicPath,
    devServer: {
        port: 80, //端口号
        host: 'localhost',// 本地连接
        open: true, // 是否自动启动浏览器
        proxy: {
            '/product': {
                target: baseURL,
                ws: true,
                https: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/product':'/product'
                }
            }
        }
    },
    // 开发配置
    configureWebpack: config => {
        config.entry.app = ['babel-polyfill', './src/main.ts']
    },
    // 生产配置
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = '筹易达';
            return args;
        })
        // 压缩代码
        config.optimization.minimize(true)
        // 分割代码
        config.optimization.splitChunks({chunks: 'all'})
        if (process.env.NODE_ENV === 'production'){
            return {
                optimization: {
                    minimizer: [new TerserPlugin({
                        terserOptions: {
                            compress: {
                                drop_console: true
                            }
                        }
                    })]
                }
            }
        }
    }
}
