
const path = require('path')
const htmlWebpackPlugin= require("html-webpack-plugin")
const MiniCssExtractPlugin =require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const  merge =require('webpack-merge')
const commonConfig=require('./webpack.common.config')

const proConfig={
  mode:'production',
  output: {
    filename: '[name]-[chunkhash:5].js',
    path:path.resolve(__dirname,'./build')
  },
  module: {
    rules: [
      {
        test:/\.css$/g,
        include: path.resolve(__dirname,'./src'),
        use: [MiniCssExtractPlugin.loader,'css-loader']
      },
      {
        test:/\.less$/g,
        include: path.resolve(__dirname,'./src'),
        use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','less-loader']
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false, // 移除注释
          },
          compress: {
            drop_console: true,
            drop_debugger: false,
            pure_funcs: ['console.log'] // 移除console
          }
        },
        extractComments: false,
      }),
    ],
  },
  plugins:[
    new htmlWebpackPlugin({
      title:'francis-zimo',
      filename: "index.html",
      template: './index.html',
      minify: {
        removeComments:true, // 移除html中的注视
        collapseWhitespace:true, // 删除空白符与换行符
        minifyCSS:true  // 压缩内联css
      }
    }),

    new MiniCssExtractPlugin({
      filename:'css/[name][contenthash:8].css'
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor:require("cssnano"),
      cssProcessorOptions:{
        discardComments:{removeAll:true}
      }
    })
  ]
}
module.exports=merge(commonConfig,proConfig)