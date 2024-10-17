import React, { useState } from 'react'
import { LuHash } from "react-icons/lu";
import { FaCirclePlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { LuInbox } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { SiNextcloud } from "react-icons/si";
import { IoNotifications } from "react-icons/io5";
import { TbFilterSearch } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";
import { BsWindowStack } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { shwotaskReducer,showDetailsReducer } from '../utils/taskslice';
const Sidebar = () => {
    const dispatch = useDispatch()
const handleshowtask=()=>{
 dispatch(shwotaskReducer())  
 
}
const handleShowDeatails=()=>{
  dispatch(showDetailsReducer())
}
  return (
    
<div className='fixed top-[61px]  bg-yellow-100/30  w-[300px] h-auto  p-2   min-h-[100vh] border-2 overflow-hidden'>
    <div className='flex flex-row mb-10 justify-between'>
        <div className='flex gap-3'>
        <h1>Details</h1>
    <button onClick={handleShowDeatails}><FaAngleDown className='w-6 h-6 ' /></button>  
      </div>
      <div className='flex gap-3 '>
        <button className=''><IoNotifications className='w-6 h-6 ' /></button>
        <button><BsWindowStack className='w-6 h-6'/></button>
      </div>
    </div>
        
        <div className='btnstyle hv flex gap-2 w-full text-start flex-col'>
        <button className='text-red-700 ' onClick={handleshowtask} ><FaCirclePlus className='w-5 h-5 text-red-700'/>Add task</button>
    <button><FaSearch />Search</button>
    <button><LuInbox />inbox</button>
    <button ><SlCalender />Today</button>
    <button><SiNextcloud />Upcoming</button>
    <button><TbFilterSearch />Filters&Labels</button>        
        </div>
        <div className='btnstyle hv gap-2 mt-10 flex flex-col'>
            <p>My projects</p>
            <button><LuHash className='w-5 h-5 text-blue-600/80'/>Fitness</button>
            <button><LuHash className='w-5 h-5 text-yellow-800'/>Grocery</button>
            <button><LuHash className='w-5 h-5 text-green-900'/>Appoitment</button>
        </div>
        <div className='btnstyle hv gap-2 mt-10 flex flex-col'>
            <p>Team</p>
            <button><LuHash className='w-5 h-5 text-blue-600'/>New Brand</button>
            <button><LuHash className='w-5 h-5 text-green-600' />Website update</button>
            <button><LuHash className='w-5 h-5 text-red-600'/>Product Roadmap</button>
            <button><LuHash className='w-5 h-5 text-purple-600' />Meeting Agenda</button>
        </div>
    </div>
  )
}

export default Sidebar