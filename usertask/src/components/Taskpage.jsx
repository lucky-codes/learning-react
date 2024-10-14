import React from 'react'
import Background from './Background'
import Foregound from './Foregound'
const Taskpage = () => {
  return (
    <div className=' relative  bg-zinc-600 w-full h-screen'>
        <Background/>
    <div className='fixed top-0 left-0  z-[3] w-full h-full bg-sky-800/20'></div>
        <Foregound/>
        
    </div>
  )
}

export default Taskpage