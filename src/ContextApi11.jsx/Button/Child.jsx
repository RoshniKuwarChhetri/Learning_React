import React, { useContext } from 'react'
import Parent from './Parent'
import { MyContext } from './ContextData'
const Child = () => {
    const greet=useContext(MyContext)
  return (
    <div style={{padding:10,backgroundColor:'pink',color:'purple'}}>
     <h1>greeting is{greet}</h1>
    </div>
  )
}

export default Child
