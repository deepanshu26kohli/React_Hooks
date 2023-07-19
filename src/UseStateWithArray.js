import React, { useState } from 'react'

const UseStateWithArray = () => {
    let data = [
        {id:1,name:"Deepanshu",age:"21"},
        {id:2,name:"Kohli",age:"23"},
]
    // const emptyData = []

const [mydata,setMyData] = useState(data)
const clearData = ()=>{
    setMyData([])
    console.log("cleardata")
    console.log(mydata)
}
  return (
    <>
     {
        mydata.length !== 0?
        mydata.map((e)=>{
             return <div key={e.id}>
                <h3>{e.name}</h3>
                <h4>{e.age}</h4>
                <hr/>

             </div>
        }):<h1>No data to show</h1>
    }
     
     <button onClick={clearData}>Clear Data</button>
    </>
  )
}

export default UseStateWithArray
