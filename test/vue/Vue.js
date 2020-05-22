
function Vue(options={}){
  this.$options = options; //将所有属性挂在在$options
  //this._data
  let data = this._data = this.$options.data;
  observe(data);//观察data对象，将每一项做一个数据劫持，就是将data中每一项用Object.defineProperty定义新属性并返回这个对象
}

function Observe(data){ //主要逻辑
  for(let key in data){
    let val = data[key];
    observe(val)
    Object.defineProperty(data,key,{
      enumerable:true,//支持枚举
      get(){
        return val;
      },
      set(newVal){
        if(newVal == val){
          return;
        }
        val = newVal;
        observe(newVal) //赋值是对象时也进行object.definePropety监测
      }
    })
  }
}

function observe(data){
  if(!data || typeof data != 'object'){
    return
  }
  return new Observe(data);
}