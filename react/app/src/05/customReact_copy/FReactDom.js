import {initVnode} from './vDom1'
import './demo.css'
const render=(vNode,container)=>{
  // vnode-》node
  //  container.appendChild(node)
  // vnode->node
  const node=initVnode(vNode,container)
  console.log(node,'===node11')
  //把真实的dom节点放到container中
  container.appendChild(node);

}

const FReactDom ={
  render
}

export default FReactDom;