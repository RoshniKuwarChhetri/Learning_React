import React, { useState } from 'react'
import { ContextA } from './ContextApi'
import ComponentA3 from './ComponentA3'
import ComponentA2 from './ComponentA2'

const ComponentA1 = () => {
    
let [data,setData]=useState("")
let name="Roshni";
    function greet(){
      alert(`Hello ${name}`)
    }
  return (
    
    <div style={{backgroundColor:"pink", padding:"10"}}>  
    
      <ContextA.Provider value={{name,greet}}>
        <ComponentA2/>
      </ContextA.Provider>
    </div>
  )
}

export default ComponentA1
