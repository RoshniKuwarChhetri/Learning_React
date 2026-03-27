import React, { useState } from 'react'

const ComtrolledPractice = () => {
    let [data,setData]=useState({
        id:"",
        Sname:""
    })
    function handleChange(e){
        let{name,value}=e.target;
        setData({...data, [name]:value})

    }
    function handleSubmit(e){
       e.preventDefault()
       console.log(data)
       setData({
        id:"",
        Sname:""
       })
    }
  return (
    <div>
      <h1>Controlled Practice</h1>
      <form action="" onSubmit={handleSubmit}>
      <input type="number" name="id" value={data.id} onChange={handleChange}/>
      <input type="text" name='Sname' value={data.Sname}  onChange={handleChange}/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default ComtrolledPractice
