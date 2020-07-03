const path = require('path')
console.log(process.env.NODE_ENV,'==环境变量')
const htmlWebpackPlugin= require("html-webpack-plugin")
const WebpackBar = require('webpackbar');
const {CleanWebpackPlugin}= require('clean-webpack-plugin')
const BundleAnalyzerPlugin   = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


const commonConfig={
  entry:{
    test1:'./src/test1.js',
  },
  resolveLoader: {
    modules: ["node_modules",path.resolve(__dirname, './loader')]
  },
  module: {
    rules: [
      {
        test:/\.js$/g,
        include: path.resolve(__dirname,'./src'),
        use:[
          {
            loader: path.resolve(__dirname,'loader/authorLoader'),
            options:{
              name:'francis'
            }
          },
        {
          loader: path.resolve(__dirname,'./loader/replaceLoader.js'),
          options:{
            name:'---文明用语和谐--'
          }
        },
        {
          loader: 'babel-loader',
        }]
      },
      {
        test:/\.(png|jpe?g|bmp|gif)$/g,
        include: path.resolve(__dirname,'./src'),
        use:{
          loader: 'file-loader',
          options:{
            name:'[name].[ext]',
            outputPath:'img'
          }
        }
      }
    ]
  },
  plugins:[
    new BundleAnalyzerPlugin(),
    new WebpackBar(),
    new CleanWebpackPlugin()
  ]
}

module.exports=commonConfig