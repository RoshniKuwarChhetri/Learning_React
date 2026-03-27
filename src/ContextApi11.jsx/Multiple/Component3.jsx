import React, { useContext } from 'react'
import { ContextMulti } from './ContextApi'

const Component3 = () => {
    let {data1,data2,data3}=useContext(ContextMulti)
  return (
    <div style={{padding:10,backgroundColor:'red',color:'white'}}>
      <h1>context value is {data1},{data2},{data3}</h1>
    </div>
  )
}

export default Component3
