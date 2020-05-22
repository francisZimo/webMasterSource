import { initVnode } from './vDom1'

const diff=(cache,newVnode)=>{
  // newvNode
  //diff 逻辑
  const {vNode,parentNode,node}=cache;

  const newNode=initVnode(newVnode,parentNode)
  console.log('新旧node====',newNode,node)
  console.log(parentNode,'==parentNode')

  parentNode.replaceChild(newNode,node)
  return newNode;

}
export default diff