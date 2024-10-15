import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtaskReducer } from '../utils/taskslice'
import { RxCross2 } from "react-icons/rx";
import { shwotaskReducer } from '../utils/taskslice';
const Addtask = () => {
  const dispatch =  useDispatch()
  const dataDispatch = useDispatch()
  const select  = useSelector(store=>store.task.showtask)
  const[data,setData]=useState({
    project:'',
    team:''
  })
  const onChangehandle=(e)=>{
  const{name,value}=e.target;
  setData((prev=>({...prev,[name]:value})))
  }
  const sendData = () =>{
    dataDispatch(addtaskReducer(data))
  }
  return (
    <div>
      <div className='absolute w-full  h-screen z-[5] bg-black/80'></div>
        <div className='absolute flex justify-center items-center  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  w-[500px] border-2 text-white/80 border-yellow-800 bg-black/20 h-[400px] z-[5]'>
        <button onClick={()=>dispatch(shwotaskReducer(false))} className='absolute top-1 left-2'><RxCross2 className='w-[22px] h-[22px]'/></button>
           <div className='grid gap-4'>
           <p>Add Project Tasks</p>
            <input name='project' value={data.value} onChange={onChangehandle} className='h-[40px] px-2 rounded-lg mb-2 text-black/80' type="text" />
            <p>Add Team Tasks</p>
           <input name='name' value={data.value} onChange={onChangehandle} className='h-[40px] rounded-lg mb-10  text-black/80 ' type="text" />
           <button onClick={sendData} className='block shadow-sm shadow-white/40 w-20 border-2 rounded-xl bg-green-800 border-black'>ADD</button>
           </div>
           
        </div>
        
    </div>
  )
}

export default Addtask