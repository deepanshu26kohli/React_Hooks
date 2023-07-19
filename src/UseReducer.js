import React, { useReducer } from 'react'
import './Style/UseReducer.css'
const UseReducer = () => {
    const reducer = (state,action)=>{
          if (action.type === "Increment"){
            return state + 1
          }
          if (action.type === "Decrement"){
            return state - 1
          }
    }
    const [state,dispatch] = useReducer(reducer,0)
    return (
    <div className='box'>
     <h1>useReducer Hook 🚀</h1>   
    <div className='min-box'>
    <h1>{state}</h1>
      <button onClick={()=>{dispatch({type:"Increment"})}}>incr</button>
      <button onClick={()=>{dispatch({type:"Decrement"})}}>decr</button>
    </div>
     
    </div>
  )
}

export default UseReducer
