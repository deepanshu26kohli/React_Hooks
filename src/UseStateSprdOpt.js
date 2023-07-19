import React from 'react'

const UseStateSprdOpt = () => {
    const data = {
        name:"Deepanshu",
        Rollno : "1900643",
        semester : "7"
    }
    const [obj,setObj] = React.useState(data)
    function changeObj(){
        setObj({...data,semester:"8"})
    }
    return (
    <div>
      <h2>Name : {obj.name}</h2>
      <h4>Rollno : {obj.Rollno}</h4>
      <h4>Semester : {obj.semester}</h4>
      <button onClick={changeObj}>Change Object</button>
    </div>
  )
}

export default UseStateSprdOpt
