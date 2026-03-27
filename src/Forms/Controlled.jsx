import React, { useState } from 'react'

const Controlled = () => {
    let [formData , setFormData]=useState({
        Uname:"",
        password:""
    })
    function handleChange(e){
      let {name ,value}= e.target;
     
       setFormData({...formData, [name]:value})
    }
     
    function handleSubmit(e){
      e.preventDefault()
      console.log(formData)
      setFormData({
        Uname:"",
        password:""
      })
    }
  return (
    <div>
      <h1>controlled Forms</h1>
      <input type="text" value={formData.Uname} name='Uname'  onChange={handleChange}/>
      <input type="email" name="password" value={formData.password} onChange={handleChange}/>
      <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Controlled
