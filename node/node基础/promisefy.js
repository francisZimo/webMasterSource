

// const download=require('download-git-repo')
// const ora=require('ora')
// const process=ora('下载项目。。。')
// process.start()
// download('github:su37josephxia/vue-template','test',err=>{
//
//   if(err){
//     process.fail()
//   }else{
//     process.succeed()
//   }
// })
const reposition='github:su37josephxia/vue-template'
const desc='test'
clone(reposition,desc)
async function clone(repo,desc) {
  const { promisify } = require('util')
  const ora=require('ora')
  const process=ora('下载项目。。。')
  process.start()
  const download = promisify(require('download-git-repo'))
  try {
    await download(repo, desc)
  }catch (err){
    process.fail()
  }
  process.succeed()
}