const fs=require('fs')
const rs=fs.createReadStream('./index.js')
const ws=fs.createWriteStream('./index2.js')
rs.pipe(ws)