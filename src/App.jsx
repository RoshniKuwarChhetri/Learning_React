import React from 'react'
// import ParentProp from './PropsDrilling/ParentProp'
// import User from './Props1/User'
// import UserObject from './Props1/UserObject'
// import Array from './Props1/Array'
// import Child from './PropsDrilling2/Practice/Child'
// import Component1 from './PropsDrilling2/Task/Component1'
// import C3 from './PropsDrilling2/PropsDrillprac/C3'
// import C1 from './PropsDrilling2/PropsDrillprac/C1'
// import GrateGrandParent from './PropsDrilling2/Practice/GrateGrandParent'
// import GreateGrandParent from './ContextApi11.jsx/Button/GreateGrandParent'
// import Component1x from './ContextApi11.jsx/Multiple/Component1x'
// import ComponentA1 from './ContextApi11.jsx/Alert/ComponentA1'
import Controlled from './Forms/Controlled'
import ComtrolledPractice from './Forms/ComtrolledPractice'
import Uncontrolled from './Forms/Uncontrolled'
// import Component2 from './ContextApi11.jsx/Multiple/Component1'

const App = () => {
  let userData1={
    name:"roshni",
    roll:123,
    university:"GU"
  }
 let userData2={
    name:"roshni",
    roll:123,
    university:"GU"
  }
 let userData3={
    name:"roshni",
    roll:123,
    university:"GU"
  }
  let College=["it", "gu","mdu"]
  let age=55
  let name="roshni";
  return (
    <div>
      {/* <ParentProp/> */}
      {/* <User name={name} age={age}></User> */}
      {/* <UserObject data={userData1}/> */}
      
    {/* <Array Cname={College}/> */}
    {/* <Child Uage={age} /> */}
    {/* <Component1/> */}
    {/* <C1/> */}
     {/* <Child/> */}
     {/* <GreateGrandParent/> */}
  {/* <Component1x/> */}
  {/* <ComponentA1/> */}
  {/* <Controlled/> */}
  {/* <ComtrolledPractice/> */}
  <Uncontrolled/>
    </div>
  )
}

export default App
