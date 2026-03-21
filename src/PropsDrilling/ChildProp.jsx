import React, { Fragment } from 'react'

const ChildProp = ({users}) => {
  return (
    <div>
      {
    users.map((data)=>{
            let {id,name,email,profile:{age,gender,address:{street,city,zip}},hobbies,isActive,roles}=data
            console.log(id,name,email)
            return(
               <Fragment id={id}>
                 <h1>{id}{name}{email}</h1>
                 <h1>{age}{gender}{street}{city}{zip}</h1>
                  
                  {
                    
                  }


               </Fragment> 
               
            )
        })
      }
    </div>
  )
}

export default ChildProp
