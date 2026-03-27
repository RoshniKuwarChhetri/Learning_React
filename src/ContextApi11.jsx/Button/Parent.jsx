import React from 'react'
import GrandParent from './GrandParent'
import Child from './Child'

const Parent = () => {
  return (
    <div style={{padding:10, backgroundColor:'blue',color:'wheat'}}>
      <h1>Parent</h1>
      <Child/>
    </div>
  )
}

export default Parent
