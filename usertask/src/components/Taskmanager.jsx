import React from 'react'
import Sidebar from './Sidebar'
import Addtask from './Addtask'
import {useSelector } from 'react-redux'
const Taskmanager = () => {
const select =   useSelector(store=>store.task.showtask)
const data = useSelector(store=>store.task.addtask)
console.log(data);

  return (
    <div className='w-screen h-screens'>
        <Sidebar/>
        <div>
         {select && <Addtask/>}
         <div className='text-black absolute left-[500px] top-[100px]'>
          <h1 className='text-[30px] font-bold'>My projects</h1>
          {data.map((value, key)=>(
          <div keys={key}>
            <ol>
              <li> {value.project}</li>
            </ol>
          </div>
         ))} 
        <h1 className='text-[30px] font-bold'>My teams</h1>
        <div className='text-black'>
        {data.map((value, key)=>(
          <div keys={key}>
            <ol>
              <li> {value.team}</li>
            </ol>
          </div>
         ))}
        </div>
         </div>
         
     </div>
        
    </div>
    
  )
}

export default Taskmanager