import diff from './diff'
const createElement=(type,props,...children)=>{
  // 构建树状图
  props.children=children;
  let vType;
  if(typeof type==='string'){
    vType=1;
  }else if(typeof type==='function'){
    // class:2 function:3
    vType=type.isReactComponent?2:3;
  }
  return {
    type,
    vType,
    props
  }
}
class Component{
  constructor (props){
    this.props=props;
    this.state={};
    this.$cache={} // 存储父节点

  }
  static isReactComponent={}
  setState=(nextState,callback)=>{
    // 真实的state是一个批量处理，也称为'异步'
    // 暂时写一个假的
    console.log(this.state,nextState,{...this.state,...nextState},'==hha')
    this.state={
      ...this.state,
      ...nextState
    }
    this.forceUpdate()
    console.log('state',this.state)
  }
  forceUpdate=()=>{
    // vnode->node->contain
    const {$cache:cache}=this
    const newVnode=this.render()
    const newNode=diff(cache,newVnode) // newVnode->node 最终更新到container中
    this.$cache={
      ...cache,
      vNode:newVnode,
      node:newNode
     }
    }

}

const React={createElement,Component}
export default React