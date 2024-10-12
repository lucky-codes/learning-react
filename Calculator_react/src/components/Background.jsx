import React from 'react'

const Background = () => {
  return (
    <div className='fixed w-full h-screen z-[2]'>
        <p className='text-center text-white absolute left-1/2 top-[20px]'>Document</p>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[200px] text-sky-200'>Docs</h1>
    </div>
  )
}

export default Background