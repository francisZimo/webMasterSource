
class BusDemo1{
  constructor (){
    this.eventPool={}
  }
  $on(name,fn){
    this.eventPool[name]=this.eventPool[name]||[];
    this.eventPool[name].push(fn)
    console.log('我从风中走来',this.eventPool)
  }
  $emit(name,args){
    console.log('wolai333',this.eventPool[name])
    if(this.eventPool[name]){
      console.log('wolai')
      this.eventPool[name].forEach(cb=>{
        cb(args)
      })
    }
  }
}
export default BusDemo1;