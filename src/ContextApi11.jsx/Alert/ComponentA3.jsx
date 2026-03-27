import React, { useContext } from 'react'
import { ContextA } from './ContextApi'

const ComponentA3 = () => {
    let {name,greet}=useContext(ContextA)
  return (
    <div style={{backgroundColor:"black", padding:"10"}}>
      <h1>{data}</h1>
    </div>
  )
}

export default ComponentA3
