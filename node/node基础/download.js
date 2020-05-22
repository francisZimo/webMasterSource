module.exports.clone=async function clone(repo,desc) {
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