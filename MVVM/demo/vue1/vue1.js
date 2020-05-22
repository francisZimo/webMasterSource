// target:数据劫持
function Vue(options={}){
  this.options=options
  let data=this._data=this.options.data
  observe(data)
  // this.__proto__=this._data
  console.log(this)
  for(let key in data){
    Object.defineProperty(this,key,{
      enumerable:true,
      get () {
        return this._data[key]
      },
      set (newValue) {
        this._data[key]=newValue
      }
    })
  }

  // 编辑模板compile
  Compile(this.options.el,this._data)

}
// 模板编译
function Compile(el,vm){
  let replacePart=document.querySelector(el)
  let fragment=document.createDocumentFragment() // 文档片段
  let child=''
  while( child=replacePart.firstChild){
    // console.log(child,'===child')
    fragment.appendChild(child)
  }
  replace(fragment,vm)
  replacePart.appendChild(fragment)
  function replace(fragment,vm){
    // console.log(fragment.childNodes)
    Array.from(fragment.childNodes).forEach((node)=>{
      let text=node.textContent;
      console.log(text,'text')
      let reg=/\{\{(.+?)\}\}/g;
      // 文本节点
      // https://www.w3school.com.cn/jsref/dom_obj_url.asp
      console.log(getAllMatch(reg, text),'==匹配结果')
      let arrs=getAllMatch(reg, text);
      // if(node.nodeType===3&&reg.test(text)){
      if(node.nodeType===3){
        arrs.forEach(item=>{
          let arr=item.split('.')
          // let arr=RegExp.$1.split('.')
          let value=''
          if(arr.length>1){
            value=arr.reduce((total,current)=>{
                return total[current]
              },vm
            )
          }else{
            value=vm[arr[0]]
          }
          console.log(value,'===匹配')
          let reg1=/\{\{(.+?)\}\}/;
          text=text.replace(reg1,value)
        })
        node.textContent=text


        // let value=''
        // arr.forEach(k=>{
        //   value=vm[k]
        // })

        // let value=vm[RegExp.$1]


      }
      if(node.childNodes){
        replace(node,vm)
      }
    })


  }
}

//数据劫持
function Observe(data){
  for(let key in data){
    let value=data[key]
    observe(value)
    Object.defineProperty(data,key,{
      // enumerable:true,
      get () {
        return value
      },
      set (newValue) {
        if(newValue===value){
          return
        }
        observe(newValue)
        value= newValue
      }
    })
  }
}
function observe(data){
  if(Object.prototype.toString.call(data)!=='[object Object]'){
    return
  }
  return new Observe(data)
}
function getAllMatch(reg,str){ //默认有g
  let ary=reg.exec(str);
  let result=[];
  while(ary){
    result.push(ary[1]);
    ary=reg.exec(str);
  }
  return result;
}


