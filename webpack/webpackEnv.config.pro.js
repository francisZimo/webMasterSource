
const path = require('path')
const htmlWebpackPlugin= require("html-webpack-plugin")
const MiniCssExtractPlugin =require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const PurifyCSS=require('purifycss-webpack')
const glob=require('glob-all')

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
    splitChunks: {
      chunks:'all',
      cacheGroups:{
        react: {
          test: /react/,
          name:"react", // 要缓存的 分隔出来的 chunk 名称
          minChunks: 1
        },
        lodash: {
          test: /lodash/,
          name:"lodash", // 要缓存的 分隔出来的 chunk 名称
          minChunks: 1
        },
      }
    }
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
    }),
    // 清除⽆⽤ css
    new PurifyCSS({
      paths: glob.sync([
        // 要做 CSS Tree Shaking 的路径⽂件
        path.resolve(__dirname, './src/*.html'), // 请注意，我们同样需
        //要对 html ⽂件进⾏ tree shaking
        path.resolve(__dirname, './src/*.js')
      ])
    })


  ]
}
module.exports=proConfig
// module.exports=merge(commonConfig,proConfig)