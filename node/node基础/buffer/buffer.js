
const buf1=Buffer.alloc(10)
console.log(buf1)

const buf2=Buffer.from('a,d')
console.log(buf2.toString())

const buf3=Buffer.alloc(6)
buf3.write('你好')
console.log(buf3.toString())

const buf4=Buffer.from('我')
console.log(buf4)

const buf5=Buffer.concat([buf3,buf4])
console.log(buf5.toString())