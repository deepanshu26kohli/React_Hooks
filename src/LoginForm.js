import React,{useState} from 'react'

const LoginForm = () => {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[allEntry,setAllEntry] = useState([])
    function submitForm(e){
        e.preventDefault()
        if (email&&password&&password.length>=6){
        let newEntry = {email:email,password:password}
        setAllEntry([...allEntry,newEntry])
        setEmail("")
        setPassword("")}
        else if(password.length < 6){
            alert("Enter a Valid Password")
        }
        else{
            alert("Please enter details")
        }
    }
  return (
    <>
    <form action='submit' onSubmit={submitForm}>
        <label>Email</label>
        <input type="text" id="email" autoComplete='off' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        <br/>
        <label>Password</label>
        <input type="password" id="email" autoComplete='off' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        <br/>
        <button type="submit">Login</button>
    </form>
    {
        allEntry.map((entry)=>{
            return <div key={entry.email}>
                <h3>{entry.email}</h3>
                <h3>{entry.password}</h3>
                <hr/>
            </div>
        })
    }
    </>
  )
}

export default LoginForm
