const arrayToList=(ary)=>{
  if(ary.length === 0) {
    return null
  }
  let nodes = []

  for(let i = 0; i < ary.length; i++) {
    let node = {}
    node.value = ary[i]
    node.next = null
    nodes.push(node)
  }

  for(let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1]
  }

  return nodes[0]
}