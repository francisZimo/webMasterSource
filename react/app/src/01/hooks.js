import React, { useEffect,useState } from 'react'


function DemoHooks(){
  const [counter,setCounter] = useState(0)
  useEffect(()=>{
    console.log('xxxx')
    setCounter(counter+2)
  },[])
  return(
    <div>
      <h3>计数：{counter}</h3>
    </div>
  )
}



export default DemoHooks;
