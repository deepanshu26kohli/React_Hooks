import React from 'react'

const UseStateTodoList = () => {
    let data = [
        {id:1,name:"Deepanshu",age:"21"},
        {id:2,name:"Kohli",age:"23"},
        {id:3,name:"Deep",age:"25"},
        {id:4,name:"Dk",age:"28"},
]
    // const emptyData = []

const [mydata,setMyData] = React.useState(data)
const clearData = ()=>{
    setMyData([])
    console.log("cleardata")
    console.log(mydata)
}
function removeElem(id){
 const newData = mydata.filter((e)=>{
    return e.id !== id
 })
 setMyData(newData)
}

  return (
    <>
     {
        mydata.length !== 0?
        mydata.map((e)=>{
             return <div key={e.id}>
                <h3>{e.name}</h3>
                <h4>{e.age}</h4>
                <button onClick={()=>{removeElem(e.id)}}>Remove</button>
             
                <hr/>

             </div>
        }):<h1>No data to show</h1>
    }
     
     <button onClick={clearData}>Clear Data</button>
    </>
  )
}

export default UseStateTodoList
