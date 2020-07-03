const path = require('path')

const htmlWebpackPlugin= require("html-webpack-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const commonConfig=require('./webpack.common.config')
const  merge =require('webpack-merge')

const devConfig={
  mode:'development',
  output: {
    filename: '[name]-[chunkhash:5].js',
    path:path.resolve(__dirname,'./dist')
  },
  module: {
    rules: [
      {
        test:/\.css$/g,
        include: path.resolve(__dirname,'./src'),
        use: ['style-loader','css-loader']
      },
      {
        test:/\.less$/g,
        include: path.resolve(__dirname,'./src'),
        use: ['style-loader','css-loader','postcss-loader','less-loader']
      }
    ]
  },
  resolve: {
    // modules:[path.resolve(__dirname,'./node_modules')]
    alias: {
      react:path.resolve(__dirname,'./node_modules/react/umd/react.production.min.js'),
      // reactDom: path.resolve(
      //   __dirname,
      //   "./node_modules/react-dom/umd/react-dom.production.min.js"
      // )
    },
    // extensions: ['js','json'] //默认后缀 js json 最好每个模块后缀名称都写全
  },
  devServer: {
    contentBase:'./dist',
    open:true,
    port:8099,
    proxy:{
      '/api':{
        target:"http://localhost:9090/"
      },
      // pathRewrite: {
      //   '^/api': '/api'
      // }
    }
  },
  devtool: 'cheap-module-eval-source-map',
  plugins:[
    new htmlWebpackPlugin({
      title:'francis-zimo',
      filename: "index.html",
      template: './index.html'
    }),
    new CleanWebpackPlugin()
  ]
}
module.exports=merge(commonConfig,devConfig)