import React, { useState,useRef } from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDownloadForOffline, MdScale } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion"
import { MdDownloading } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { useSelector,useDispatch} from 'react-redux';
import { deleteSelectedReducer } from '../utils/addSlice';
import { FaRegEdit } from "react-icons/fa";
const Card = ({data, reference}) => {
  const deleteFile  = useDispatch()
    const[toggle,setToggle]=useState(true)
    const ref =useRef()
    const handleChange=()=>{
      if(!data.file){
        alert('No file to download')
      }
      if(toggle&&data.file) {
      
     setToggle(false)
      } 
      else{
       setToggle(true)
      }
    }
    const deleteHandle = ()=>{
    deleteFile(deleteSelectedReducer(data.id))
    }
    const editHandle = () =>{
      
    }
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative top-5 z-[6] left-5 w-72 h-[400px] bg-zinc-800 rounded-[30px] overflow-hidden'>   
       
       <div className='realtive text-white px-5 block py-10'>
        <div className='flex justify-between'>
        <FaRegFileAlt />
        <button className=' top-10 right-6' onClick={deleteHandle}><RiDeleteBin3Fill /></button>
        <button onClick={editHandle}><FaRegEdit /></button>
        </div>
       <h1 className='py-2 border-b-2   border-b-white/50 text-center'>{data.title}</h1>
       <p className='font-semibold text-sm text-white/80 absolute top-9 right-6'>{data.date}</p>
       <div className='py-2 block'>
       <p className='break-words'>{data.task}</p>
       <p className='absolute w-auto p-2 bottom-[90px] rounded-2xl left-4 border-2 flex gap-2 border-gray-600/80 '><FaFileInvoice className='w-5 h-5' />{data.file}</p>  
            </div>
       </div>
       
        <div className='absolute bottom-0 w-full h-20'>
            <div className='flex justify-between py-2 px-4  text-gray-400'>
             <h1>{data.mb}</h1>
                <button onClick={handleChange}>{
                toggle?<MdOutlineDownloadForOffline />:<RxCross2 />
             }
             
             </button>

             

            </div>
           <div className={`py-2 h-full  flex justify-center  ${toggle===false?'bg-green-400':'bg-blue-400'}`}>
               <h1 className='text-sm'>{toggle?"Start Downloading.........":"Download-Sucessfully"}</h1> 
               {toggle?<MdDownloading />:<FaRegThumbsUp />}
            </div>
         </div>
    </motion.div>
  )
}

export default Card 