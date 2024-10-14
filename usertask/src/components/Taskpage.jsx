import React from 'react'
import Background from './Background'
import Foregound from './Foregound'
import Navbar from './Navbar'
import { useState } from 'react'
import { useSelector } from 'react-redux'
const Taskpage = () => {
  const select= useSelector(store=>store.add.value)
  return (
    
   <div className=' relative  bg-zinc-600 w-full h-screen'>
        <Background/>
    <div className='fixed top-0 left-0  z-[3] w-full h-full bg-sky-800/20'></div>
    {select&&
    <div>
      <div className=' w-full h-screen absolute z-[4] bg-sky-600/40'></div>
    <div className='absolute p-5  top-[50%] z-[4] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[9]  bg-black/70 text-white/80 w-[500px] border-2 border-black h-[300px]'>
    
      <p className='text-center font-bold'>Add more task</p>
      <span>Enter task date:</span>
      <input className='my-2 mx-2 text-black/90' placeholder='Enter task Date' type="text" /><br/>
      <span>Enter task title:</span>
      <input type="text" className='my-2 mx-4 text-black/90' placeholder='Enter task title' />
      <p>Enter task</p>
      <input type="text" className='border-2 text-black/90 w-full h-[100px] border-black' placeholder='Enter all task'/>
    </div>
    </div>}
        <Foregound/>
        
    </div>
  )
}

export default Taskpage