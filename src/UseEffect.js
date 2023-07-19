import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const [count,setCount] = useState(0)
useEffect(()=>{
    console.log("1st useEffect")
    if (count === 0){
        document.title = `Chats`
    }
    else{
    document.title = `Chats(${count})`}
},[count])   
useEffect(()=>{
    console.log("2nd useEffect")
}) 
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Click Me</button>
    </div>
  )
}

export default UseEffect
