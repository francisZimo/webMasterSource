const http=require('http')
const fs=require('fs')
const { promisify } = require('util')
const server=http.createServer(async(request,response)=>{
  const {url,method}=request
  if(url === '/' && method === 'GET'){
    fs.readFile('./test.html',(err,data)=>{
      if(err){
        response.writeHead(500,{'Content-Type':'text/plain;charset=utf-8'})
        response.end('500,服务器错误')
        return
      }
      response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
      response.end(data)
    })
  }

  else if(url==='/users'&&method==='GET'){
    response.writeHead(200,{'Content-Type':'application/json'})
    response.end(JSON.stringify([{name:'tom',age:20}]))
    return;
  } else if(url==='/image'&&method==='GET'){

return;
}else{
  response.writeHead(404,{'Content-Type':'text/plain;charset=utf-8'})
  response.end('404, 页面没有找到')
}

})
server.listen(3001);