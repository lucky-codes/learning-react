import React, { useEffect } from 'react'
import Background from './Background'
import Foregound from './Foregound'
import Navbar from './Navbar'
import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addReducer } from '../utils/addSlice'
import { RxCross2 } from "react-icons/rx";
import { changevalue, deleteReducer } from '../utils/addSlice'
const Taskpage = () => {
  const select= useSelector(store=>store.add.value)
  const Delete = useRef()
  const add = useRef()
  const[toggle,setToggle]=useState(false)
  const[validate,setValidate]=useState({})
  const dispatch=useDispatch()
  const[data, setData]=useState({
    date:'',
    title:'',
    task:'',
    file:'',
    tag:{tagtitle:false, tagtext:'Downloaded-succefully', tagcolor: 'green'},
    iconsign:true
  })
  const handleInput=(e)=>{
   const{name ,value}=e.target
   setData(prev =>({...prev,[name]:value}))
  }
  const handleClick =(e)=>{
    if(e.currentTarget===add.current){
      dispatch(addReducer(data))
      
    }
    if(e.currentTarget===Delete.current){
       dispatch(deleteReducer(data))
    }
    
  }
  const error = {}
  const handleValidation=()=>{
    if(!data.title.trim()){
     error.title = 'Title field is required'
    }
    if(!data.task.trim()){
      error.task = 'Title field is required'
     }
     if(Object.keys(error).length>0){
     setValidate(error)
     }
     else{
      setValidate({})
     }
  }
  useEffect(()=>{
    handleValidation()
  },[data])
  useEffect(()=>{
     setToggle(select)
     
  },[select])
  const handleToggle=()=>{
    setToggle(prev=>!prev)
    dispatch(changevalue(false))
    }
  return (
    
   <div className=' relative  bg-zinc-600 w-full h-screen'>
        <Background/>
    <div className='fixed top-0 left-0  z-[3] w-full h-full bg-sky-800/20'></div>
    {select&&
    <div>{toggle&&     
       <div>

          <div className=' w-full h-screen absolute z-[4] bg-sky-600/40'></div>
      <div className='absolute p-5  top-[50%] z-[9] left-[50%] -translate-x-[50%] -translate-y-[50%]  bg-black/70 text-white/80 w-[500px] border-2 border-black h-[500px]'>
      <button onClick={handleToggle} className=''> <RxCross2 className='w-[22px] h-[22px]'/></button>

      <p className='text-center font-bold'>Add Docs</p>
      <span >Enter date:</span>
      <input className='my-2 pl-2 mx-2 text-black/90' name='date' value={data.date} onChange={handleInput} placeholder='Enter task Date' type="date" /><br/>
      <span>Enter title:</span>
      <input type="text" name='title' value={data.title} onChange={handleInput} className='my-2 mx-4  pl-2 text-black/90' placeholder='Enter task title' />{validate.title&&<p className='text-xs mt-1 text-red-600'>{validate.title}</p>}
      <p>Enter Description</p>
      <textarea type="text" name='task' value={data.task} onChange={handleInput} className='border-2  pl-2 text-black/90 w-full h-[100px] border-black' placeholder='Enter all task'/>{validate.task&&<p className='text-xs mt-1 text-red-600'>{validate.task}</p>}
      <p>Upload Docs</p>
      <input name='file' value={data.file} onChange={handleInput} type="file" />
      <div className=' flex mt-2 justify-between'>
      <button ref={add} onClick={handleClick} className="relative inline-block w-20 text-white bg-white bg-gradient-to-r from-indigo-600 to-pink-500 p-[2px] rounded-lg">
          <span className="flex items-center justify-center bg-green-500 w-full h-full rounded-md">
            ADD
          </span>
        </button>
      <button ref={Delete} onClick={handleClick} className='relative inline-block w-20 text-black bg-red-600 bg-gradient-to-r from-indigo-400 to-yellow-600 p-[2px] rounded-lg'>
        <span className='flex items-center justify-center bg-red-500 w-full rounded-md'>
          DELETE
        </span>
        </button>
      </div>
    </div>
    </div>
    }</div>}
        <Foregound/>
        
    </div>
  )
}

export default Taskpage