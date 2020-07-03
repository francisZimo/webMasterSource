const commonConfig=require('./webpackEnv.common.config')
const proConfig=require('./webpackEnv.config.pro')
const testConfig=require('./webpackEnv.config')
const merge=require('webpack-merge')
const env=process.env.NODE_ENV
if(env==='pro'){
  module.exports= merge(commonConfig,proConfig)
}else{
  module.exports= merge(commonConfig,testConfig)
}