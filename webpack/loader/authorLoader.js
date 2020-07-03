
const loaderUtils=require("loader-utils")
module.exports=function(source){
  let options=loaderUtils.getOptions(this)
  source+=`  alert("${options!==undefined?options.name:'版权保护'}") // 防伪标签:${options!==undefined?options.name:''} `
  console.log(source,'==xx')
  return source
}