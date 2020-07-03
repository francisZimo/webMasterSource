const express= require('express')
let app = new express()
app.get('/api/info',(req,res)=>{
  res.json({
    name:'francis',
    age:'20'
  })
})
app.listen('9090')