import React from 'react'

const Loginpanel = () => {
  return (
    <div className='w-full  h-screen flex justify-center items-center'>
        <div className='relative border-2 border-black block overflow-hidden w-[900px] h-[500px]'>
              <div className='text-center'>
              <h1 className='text-semibold text-[40px]'>Login panel</h1>
              <p className='font-mono	text-[20px]'>Join with us and Add your daily task</p>
            </div>            
      <div className='absolute top-[130px] w-[50%] h-80 border-2 border-l-yellow-600 right-0'>
            <p className='border-b-2 border-black'>Login</p>
        <form action="" className='flex form flex-col'>
        <label htmlFor="">Password</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="text" />
        <button className='absolute left-1 top-[190px] text-gray-600 text-sm'>Forget Password?</button>
       </form>
    
        </div>
           </div>
        </div>
  )
}

export default Loginpanel