import React from 'react'
import Component3 from './Component3';

const Component2 = ({d1,d2,d3}) => {
    
  return (
    <div>
{/* <h1>{d1}</h1>
<h2>{d2}</h2>
<h3>{d3}</h3> */}
<Component3 info={d3.Fname}/>
    </div>
  )
}

export default Component2
