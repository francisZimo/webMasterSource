const loaderUtils=require("loader-utils")
module.exports=function(source){

  const options=loaderUtils.getOptions(this)
  console.log(options,'==options')
  source=source.replace(/你妹|尼玛|我擦|卧槽|我操|我艹/g,options.name!==undefined?options.name:'***')
  const callback=this.async()
  setTimeout(()=>{
    callback(null,source)
  },1000)

}