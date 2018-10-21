const path = require('path');
const debug = process.env.NODE_ENV !== 'production';
module.exports = {
    baseUrl:'/',//根域上下文目录
    outputDir:'dist',//构建输出目录
    assetsDir:'assets',//静态资源目录
    lintOnSave:false,//是否开启eslint保存检测，有效值：true|false|'error'
    runtimeCompiler:true,//运行时版本是否需要编译
    // transpileDepencies:[],
    productionSourceMap:true,
    configureWebpack:(config)=>{
        if(debug){//开发环境配置
            config.devtool = 'cheap-module-eval-source-map';
        }else{//生产环境配置

        }
    },
    // chainWebpack:(config)=>{

    // }
    parallel:require('os').cpus().length > 1,//构建时开启多进程处理babel编译
    pluginOptions:{

    },
    pwa:{

    },
    devServer:{
        open:true,
        host:'localhost',
        port: 8080,
        https:false,
        hotOnly:false,
        proxy:{
            '/api':{
                target:'http://localhost:5000/api',
                ws:true,
                changeOrigin:true,
                pathRewrite:{
                    '^/api':'' 
                }
            }
        },
        before:app=>{}
    }
}