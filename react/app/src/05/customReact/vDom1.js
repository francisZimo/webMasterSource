export const initVnode=(vNode,container)=>{// 把vNode转换成Dom
  const {vType}=vNode;
  let node=null;
  if(!vType){
    node=initTextNode(vNode,container)
  }
  if(vType===1){
    //原生标签
    node=initHtmlNode(vNode,container)
  }
  if(vType===2){
    //class 组件
    node=initClassComponent(vNode,container)
  }
  if(vType===3){
    // Function 组件
    node=initFunctionComponent(vNode,container)
  }

  return node
}
function initHtmlNode(vnode,container){
  const {type,props}=vnode;
  const node=document.createElement(type);
  const {children,...res}=props
  if(children){
    children.forEach(item=>{
      if(Array.isArray(item)){
        item.forEach(aryItem=>{
          node.appendChild(initVnode(aryItem,node))
        })
      }else{
        node.appendChild(initVnode(item,node))
      }

    })
  }
  Object.keys(res).map(key=>{
    if(key==='className'){
      node.setAttribute('class',res[key])
    }else if(key.slice(0,2)==='on'){
      // 如果属性值以on开口，暂时理解为click事件
      node.addEventListener('click',res[key])
    }
  })
  return node;
}
function initTextNode(vNode){
  const node=document.createTextNode(vNode)
  return node;
}
function initFunctionComponent(vNode){
  const {type,props}=vNode;
  const vvNode=type(props)
  return initVnode(vvNode)

}
function initClassComponent(vNode,container){

  const {type,props}=vNode;
  const cmp=new type(props);
  const vvNode=cmp.render()
  const node=initVnode(vvNode,container)
  let cache={
    vNode:vvNode,// 当前的虚拟dom节点用户dom
    node, // 真实的dom节点，用于替换
    parentNode:container
  }
  cmp.$cache=cache
  return node


}