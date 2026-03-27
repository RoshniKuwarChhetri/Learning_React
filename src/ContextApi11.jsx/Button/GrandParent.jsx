import React from 'react'
import GreateGrandParent from './GreateGrandParent'
import Parent from './Parent'

const GrandParent = () => {
  return (
    <div style={{padding:10,backgroundColor:'purple',color:'black'}}>
        <h1>GrandParent</h1>
     <Parent/>
    </div>
  )
}

export default GrandParent
