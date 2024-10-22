import React, { useState,useEffect } from 'react'
import Sidebar from './Sidebar'
import Addtask from './Addtask'
import {useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Mydetails from './Details'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
const Taskmanager = () => {
  const {uid} =useParams()
  const checkid = useSelector(store=>store.add.id) 
const select =   useSelector(store=>store.task.showtask)
const data = useSelector(store=>store.task.addtask)
const details = useSelector(store=>store.task.showDetails)
const[udata, setUdata]=useState({})
const[task,setTask] = useState({})
const Apicall = async()=>{
  const call = await fetch(`https://dummyjson.com/users/${uid}`).then(data=> data.json()).then(data=>setUdata(data))
  const taskcall = await fetch(`https://dummyjson.com/todos/${uid}`).then(data=> data.json()).then(data=>setTask(data))
}
console.log(udata);

const addtask = async() =>{
  const post = await axios.post('https://dummyjson.com/todos', {
    id:uid,
    todo:'Go to gym'
  }).then(res=>console.log(res)).then(error=>console.log(error))
}
useEffect(()=>{
Apicall()
},[])
console.log("useridparam",uid)
  return (<>{
    <div className='w-screen h-screens'>
        <Sidebar/>
        <div>
         {select && <Addtask/>}
       {details&&<Mydetails udata ={udata}/>}
         <div className='absolute top-[100px] left-[500px]'> 
          <h1 className='flex gap-2'>Hii <p className='underline hover:cursor-pointer text-red-800'>{udata.firstName}</p> Your today task are:</h1>
         <p> Default-Task :- {task.todo}</p> 
         <button onClick={addtask}>add task</button>
         </div>
     </div>
        
    </div>}</>
    
  )
}

export default Taskmanager