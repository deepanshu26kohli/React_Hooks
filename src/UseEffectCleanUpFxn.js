import React, { useEffect, useState } from 'react'

const UseEffectCleanUpFxn = () => {
    const [width,setWidth] = useState(window.screen.width)
    const [height,setHeight] = useState(window.screen.height)
    useEffect(()=>{
        window.addEventListener('resize',()=>{setWidth(window.innerWidth)})
        window.addEventListener('resize',()=>{setHeight(window.innerHeight)})
    })

  return (
    <div>
      The actual window width is {width} <br/>
      The actual window height is {height}
    </div>
  )
}

export default UseEffectCleanUpFxn
