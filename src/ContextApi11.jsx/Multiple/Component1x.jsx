import React from 'react'
import { ContextMulti } from './ContextApi'
import Component3 from './Component3'
import Component2 from './Component2'

const Component1x = () => {
    let data1="hi"
    let data2="hello"
    let data3="by"
  return (
    <div style={{padding:10,backgroundColor:'pink',color:'purple'}}>
      < ContextMulti.Provider value={{data1,data2,data3}}>
      <Component2/>
      </ContextMulti.Provider>
    </div>
  )
}

export default Component1x
