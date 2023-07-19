import React,{ useState} from 'react'

const UseState = () => {
   const [myText,setMyText] = useState("Deepanshu Kohli")
   const [btnText,setBtnText] = useState("New Text")
   const changeText = ()=>{
    // let val = myText
    if (myText === "Deepanshu Kohli"){
        setMyText("My name is Deepanshu")
        setBtnText("previous text")
    }
    else{
        setMyText("Deepanshu Kohli")
        setBtnText("New Text")
    }

   }
  return (
    <div>
      <h1>useState Hook</h1>
      <h2>{myText}</h2>
      <button onClick={changeText}>{btnText}</button>
    </div>
  )
}

export default UseState
