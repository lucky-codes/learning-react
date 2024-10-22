import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import Taskpage from './taskpage';
import { useDispatch, useSelector } from 'react-redux'
import { changevalue } from '../utils/addSlice';
const Navbar = () => {
  const user = localStorage.getItem('accessToken')
  const id = useSelector(store=>store.add.id)
  console.log(id)
    const send = useDispatch()
    const location = useLocation()
    const[toggle, setToggle]=useState(true)
    const loaction = useLocation()
    const addTask=()=>{
      
      send(changevalue())
  }
    const handleClick=()=>{
        setToggle(!toggle)
    }
    const handleLogout=()=>{
     localStorage.clear();
    }
   
  return (<>{
  
    <div className=''>

     {loaction.pathname=='/taskpage' ?<div className='relative z-[5]'>
        {toggle?<button className='float-right mr-[80px]' onClick={handleClick}><GiHamburgerMenu /></button>:
          <div className='float-right'>
            <button><RxCross2 onClick={handleClick} /></button>
                <nav className='w-[100px] h-auto bg-gray-100/40 z-[5] p-[10px] flex-col text-black-400 flex-wrap text-[13px]' >
                <Link to='/' className='block font-sans'>Home</Link>
                <button onClick={addTask} className='block font-sans'>Add Task</button>
                <Link to='/login' className='block font-sans bg-red-400 text-semibold border-2 p-[2px] px-[10px] rounded-md my-[10px] border-gray-600'>Log-out</Link>
                </nav>
            </div>
      
     }</div>: 
        <div className='w-full right-0 fixed z-[5]'>
            <nav className=' w-full  h-[60px] bg-black/40 ' >
            <div className='ml-5   flex p-[10px] gap-10 text-white text-[20px]'>
            <Link to='/' className='font-sans'><img src="https://tse3.mm.bing.net/th?id=OIP.T3pE_qq4w8-lMHgo4oaH9wAAAA&pid=Api&P=0&h=180" className='w-10 rounded-xl' alt="" /></Link>
            <Link to='/taskpage' className='font-sans pt-2'>Features</Link>
            <Link to={`/manager/${id}`} className='font-sans pt-2'>Manage Task</Link>
            
            </div>
            <div className=' absolute top-4 right-5'>
                {user?<Link to='/' className='mr-[30px] border-[1px] pl-[20px] pt-0.5 rounded-xl text-white/80  text-white inline-block w-[90px]' onClick={handleLogout}>Logout</Link>:<Link  to='/login' className='mr-[30px] border-[1px] pl-[25px] pt-0.5 rounded-xl text-white/80  text-white inline-block w-[90px]'>Login</Link>}
                {id==1&&<Link to='/register' className='border-2 border-black p-2 rounded-xl border-none shadow-sm shadow-black bg-red-600/90'>Admin-Panel</Link>}
            </div>

            </nav>
        </div>}
               </div>
}</>)
}
export default Navbar;