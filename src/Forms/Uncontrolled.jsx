import React, { useRef } from 'react'

const Uncontrolled = () => {
    let userNmaeRef=useRef()
    let passwordRef=useRef()
    function handleSubmit(e){
    e.preventDefault()
   let formData={
      username:userNmaeRef.current.value,
      password:passwordRef.current.value
    }
    console.log(formData)
    }
  return (
    <div>
      <h1>Uncontrolled</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" ref={userNmaeRef} />
        <input type="password" ref={passwordRef}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default Uncontrolled
