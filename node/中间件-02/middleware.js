const add =(x,y) => x+y
const square = z => z*z
//
// const compose=(...[first,...other])=>(...args)=>{
//   let ret=first(...args)
//   other.forEach(fn=>{
//     ret = fn(ret)
//   })
//   return ret
// }
//
// const fn=compose(add,square,square)
// console.log(fn(1, 2))

// const compose=(fn1,fn2)=>(...args)=>fn2(fn1(...args))
// const fn=compose(add,square)
// console.log(fn(1, 2))

const compose=(...[first,...others])=>(...args)=>{
  let ret=first(...args)
  others.forEach(fn=>{
    ret=fn(ret)
  })
  return ret
}

const fn=compose(add,square,add)
console.log(fn(1,2))
