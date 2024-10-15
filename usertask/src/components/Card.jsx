import React, { useState } from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDownloadForOffline, MdScale } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion"
import { MdDownloading } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
const Card = ({data, reference}) => {
    const[toggle,setToggle]=useState(true)
    const handleChange=()=>{
      if(toggle) {
     setToggle(false)
      } 
      else{
       setToggle(true)
      }
    }
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative top-5 left-5 w-72 h-[400px] bg-zinc-800 rounded-[30px] overflow-hidden'>   
       
       <div className='text-white px-5 block py-10'>
       <FaRegFileAlt />
       <h1 className='py-2 border-b-2   border-b-white/50 text-center'>{data.title}</h1>
       <p className='font-semibold text-sm text-white/80 absolute top-9 right-6'>{data.date}</p>
       <div className='py-2 block'>
       <p className='break-words'>{data.task}</p>  
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
               <h1 className='text-sm'>{data.tag.tagtext}</h1> 
               {toggle?<MdDownloading />:<FaRegThumbsUp />}
            </div>
         </div>
    </motion.div>
  )
}

export default Card 