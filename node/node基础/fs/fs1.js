
const fs=require('fs')
// 同步
// const data=fs.readFile('./demo.json')
// console.log(data.toString())

// 异步
// const data=fs.readFile('./demo.json',(err,data)=>{
//   if(err){
//     throw (err)
//   }
//   console.log(data.toString())
// })
// console.log('我先执行')

// Promises API node v10
const fsp=require('fs').promises;
fsp.readFile('./demo.json').then(data=>{
  console.log(data.toString())
}).catch(err=>console.log(err))
console.log('我是哈哈')