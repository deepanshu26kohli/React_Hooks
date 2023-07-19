import React , {useRef} from 'react'

const UseRef = () => {
    const [show,setShow] = React.useState(true)
    const LuckyName = useRef(null);
    const submitForm = (e)=>{
      e.preventDefault()
      let name = LuckyName.current.value
      if (name){
        setShow(true)
      }
      else{
        alert("please fill the data")
      }
     
    }
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <label htmlFor="LuckyName">Lucky Name </label>
        <input type="text" id = "LuckyName" ref = {LuckyName} />
        <button>Submit</button>
      </form>
      <div>
        {show ? `${LuckyName.current.value}`: "  "}
      </div>
    </div>
  )
}

export default UseRef
