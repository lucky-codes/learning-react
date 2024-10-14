import React from 'react'

const Loginpanel = () => {
  return (
    <div className='w-full  h-screen flex justify-center items-center'>
        <div className='relative border-2 border-black block w-[900px] h-[400px]'>
            <div className='absolute w-[50%] h-full border-2 border-yellow-600 right-0'>
            <p className='border-b-2 border-black'>Login</p>
        <form action="" className='flex form flex-col'>
        <label htmlFor="">Password</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="text" />
       </form>
    
        </div>
           </div>
        </div>
  )
}

export default Loginpanel