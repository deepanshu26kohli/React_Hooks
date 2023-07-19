import React, { useState } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0)
    function myFun(num) {
        for (let i = 0; i < 1000000; i++) { }
        return num
    }
    const newCount = myFun(count)
    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>Counter</button><br />
            {newCount}
            <br />
            <button>Get new number</button>
        </div>
    )
}
export default UseMemo
