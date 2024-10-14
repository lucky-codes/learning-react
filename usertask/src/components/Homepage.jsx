import React from 'react'
import { Link } from 'react-router-dom'
const Homepage = () => {
  return (
    <div className='w-full h-screen  relative'>
      <div className='absolute top-[200px] left-[200px] h-auto  w-[500px]'>

        <h1 className='text-[50px] font-bold mb-5'>Organize your work and life, finally</h1>
       <p className='text-[22px]'>Simplify life for both you and your team with the world’s #1 task manager and to-do list app.</p>
     <Link  to='/register' className='border-[1px] shadow-xl shadow-gray-900 bg-red-400/80 p-5 mt-5 inline-block rounded-[30px]'>Start for free</Link>
      </div>
      <img className="absolute top-[200px] left-[700px] w-[800px]" src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_1536/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fwide%2Fheaderui.en.png" alt="" />
    
    </div>
  )
}

export default Homepage