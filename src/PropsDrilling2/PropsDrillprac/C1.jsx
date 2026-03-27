import React from 'react'
import C2 from './C2'

const C1 = () => {
    let d1="hello"
    let d2={
        abc:123,
        def:"qwe"

    }
    let d3=[123,3456,678]
  return (
    <div>
      {/* <C2 data1={d1} /> */}
      {/* <C2 data2 ={d2}></C2> */}



      <C2 data3={d3}></C2>
    </div>
  )
}

export default C1
