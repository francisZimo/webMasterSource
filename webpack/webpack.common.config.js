const path = require('path')
console.log(process.env.NODE_ENV,'==环境变量')
const htmlWebpackPlugin= require("html-webpack-plugin")
const WebpackBar = require('webpackbar');

const commonConfig={
  entry:{
    test1:'./src/index.js',
  },
  module: {
    rules: [
      {
        test:/\.js$/g,
        include: path.resolve(__dirname,'./src'),
        use:{
          loader: 'babel-loader',
        }
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
    new WebpackBar()
  ]
}

module.exports=commonConfig