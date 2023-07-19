import React, { useContext } from 'react'
import { BioData } from './ComA'
const ComC = () => {
  const data = useContext(BioData)
  return (
    <div>
      ComC
      <br />
      {data}
    </div>
  )
}

export default ComC
