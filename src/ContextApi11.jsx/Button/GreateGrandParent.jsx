import React, { useState } from 'react'
import GrandParent from './Button/GrandParent'
import { MyContext } from './Button/ContextData'

const GreateGrandParent = () => {
let [data , setData]=useState("")

    

  return (
    <div style={{padding:10,backgroundColor:'pink',color:'purple',padding:10}}>
        <button onClick={()=>setData(prompt("Enter data"))}>Click me</button>
        <h1>GreatGrandParent</h1>
        <MyContext.Provider value={data}>
            <GrandParent/>
        </MyContext.Provider>
    </div>
  )
}

export default GreateGrandParent
