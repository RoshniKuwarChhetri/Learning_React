import React from 'react'
import Component2 from './Component2';

const Component1 = () => {
    let data1=1234;
    let data2=["HTML","CSS","JS"]
    let data3={
        id:123,
        Fname:"rose",
        sub:"wer"
    }
  return (
    <div>
      <Component2 d1={data1} d2={data2} d3={data3}/>
    </div>
  )
}

export default Component1
