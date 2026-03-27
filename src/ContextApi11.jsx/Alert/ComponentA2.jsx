import React, { useContext } from 'react'
import ComponentA3 from './ComponentA3'
import { ContextA } from './ContextApi'

const ComponentA2 = () => {
    let {name,greet}=useContext(ContextA)
  return (
    <div style={{backgroundColor:"purple", padding:"10"}}>
        <button onClick={greet}>Greet</button>
      <ComponentA3/>
    </div>
  )
}

export default ComponentA2
