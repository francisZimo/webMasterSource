const os=require('os')
const mem=os.freemem()
const total=os.totalmem()
console.log(mem,total)
