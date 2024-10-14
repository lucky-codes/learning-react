import React from 'react'
import { useEffect } from 'react'
const Register = () => {
   useEffect(()=>{
    setTimeout(()=>{
    window.location='/'
    },1000)
   },[])
  return (
    <div className='flex justify-center items-center w-full h-screen bg-black'>
        <p className='font-bold text-[100px] text-white/80'>Work in progresss......................</p>
    </div>
  )
}

export default Register