let ws= require("nodejs-websocket")
console.log('开始建立链接')
let server=ws.createServer((conn)=>{
  console.log('新的链接')
  conn.on('text',function(str){
    console.log('received'+str)
    conn.sendText(str.toUpperCase()+ '!!!!')
  })
  conn.on('close',()=>{
    console.log('connect close')
  })
}).listen(8889)