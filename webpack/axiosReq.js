import axios from 'axios'

axios.get('/api/info').then((resolve,reject)=>{
  console.log(resolve,'==接口请求')
})