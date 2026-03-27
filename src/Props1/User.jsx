import React from 'react'

const User = ({name,age}) => {
    console.log(name)
  return (
    <div>
      <h1>{name},{age}</h1>
    </div>
  )
}

export default User
