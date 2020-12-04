Function.prototype.bind1=function(ctx){
  let _this=this
  let other=Array.prototype.slice.call(arguments,1)
  return function(...args){
    return _this.apply(ctx,[...other,...args])
  }
}
function add(x,y){
  console.log(x+y)
}
let addFn=add.bind1(null,1,1)
addFn(2,3)