const http=require('http')
const server=http.createServer((request,response)=>{
  console.log('log  ....')
  response.setHeader('Content-Type','text/html;charset=utf-8')

  response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})

  response.end('<p>i am francis 我是</p>')
})
server.listen(3000);