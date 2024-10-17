import React from 'react'
import { useEffect } from 'react'
const Register = () => {
   useEffect(()=>{
    setTimeout(()=>{
    window.location='/'
    },100)
   },[])
  return (
    <div className='flex justify-center items-center w-full h-screen text-white bg-black'>
      <p className='break-words'>Work in progress.......</p>
      <br/>
      <label htmlFor="">FirstName</label>
      <input type="text" />
      <label htmlFor="">Lastname</label>
      <input type="text" />
      <label htmlFor="">Age</label>
      <input type="phn" />
      <label htmlFor="">Gender</label>
      <input type="text" />
      <label htmlFor="">username</label>
      <input type="text" />
    </div>
  )
}

export default Register