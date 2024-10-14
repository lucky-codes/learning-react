import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
const Navbar = () => {
    const location = useLocation()
    const[toggle, setToggle]=useState(true)
    const loaction = useLocation()
    const handleClick=()=>{
        if(toggle===true){
            setToggle(false)

        }
        else
        {
            setToggle(true)
        }
    }
  return (
    <div className='w-full fixed z-[5]'>

     {loaction.pathname=='/taskpage' ?<div>
        {toggle?<button className='float-right mr-[80px]' onClick={handleClick}><GiHamburgerMenu /></button>:
          <div className='float-right'>
            <button><RxCross2 onClick={handleClick} /></button>
                <nav className='w-[100px] h-auto bg-gray-100/40 z-[5] p-[10px] flex-col text-black-400 flex-wrap text-[13px]' >
                <Link to='/' className='block font-sans'>Home</Link>
                <Link to='/taskpage' className='block font-sans'>Add Task</Link>
                <Link to='/login' className='block font-sans bg-red-400 text-semibold border-2 p-[2px] px-[10px] rounded-md my-[10px] border-gray-600'>Log-out</Link>
                </nav>
            </div>
      
     }</div>: 
        <div>
            <nav className=' w-full  h-[60px] bg-black/40 ' >
            <div className='ml-5 p-2  flex p-[10px] gap-10 text-white text-[20px]'>
            <Link to='/' className='font-sans'><img src="https://tse3.mm.bing.net/th?id=OIP.T3pE_qq4w8-lMHgo4oaH9wAAAA&pid=Api&P=0&h=180" className='w-10 rounded-xl' alt="" /></Link>
            <Link to='/taskpage' className='font-sans pt-2'>Features</Link>
            <Link className='font-sans pt-2'>For Teams</Link>
            
            </div>
            <div className=' absolute top-4 right-5'>
                {location.pathname=='/login'?"":<Link to='/login' className='mr-[30px] border-[1px] pl-[30px] pt-1 rounded-xl text-white/80 border-black/80 inline-block w-[100px]'>Login</Link>}
                <Link className='border-2 border-black p-2 rounded-xl bg-red-600/90'>Start for free</Link>
            </div>

            </nav>
        </div>}
            <p></p>
           
               </div>
  )
}
export default Navbar;