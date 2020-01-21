module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  // publicPath:'/app',
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
  productionSourceMap:true, //为true时，则线上不会显示源码
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');  //真正的路由按需加载，取消原本的预加载项
  }
}