import React from 'react'
import Privateroute from './Privateroute'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import Pagination from './Pagination'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TbDatabaseExclamation } from "react-icons/tb";
const Adminpanel = () => {
  const uid = useSelector(store=>store.add.id)
   const[currentPage, setCurrentPage]=useState(1)
   const[userPerpage,setUserPerpage]=useState(5)
  const[data, setData] = useState([])
  const calldata = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      setData(response.data.users)
      }
    catch (error) {
      console.log("error occurred", error)
    }
  }
  useEffect(()=>{
    calldata();

},[])
  const handleDelete = (uid) =>{
    const deleteItem =data.filter(data => data.id!==uid)
    setData(deleteItem)
  }
  const lastIndex = currentPage*userPerpage
  const fistIndex = lastIndex-userPerpage

 
   const currentUSerdata = data.slice(fistIndex, lastIndex)
   console.log(data.length)
    if(data.length<=0){
      return(<div className='text-9xl w-full flex flex-col justify-center items-center h-screen bg-green-100/50'>
       <TbDatabaseExclamation /> <p>All Data Deleted</p>
      </div>)
    } 
 
  return (
    <div className='w-full flex flex-col justify-center items-center h-screen bg-green-100/50'>
  <div className=' border-2 w-[700px]  border-t-black border-x-black '>
    <div>
      <div className='flex px-5 pb-1 font-semibold gap-4 border-b-2 border-black/90'>
      <h1 className='w-1/2'>Username</h1>
      <h1 className='w-1/2'>password</h1>
      </div>
      {currentUSerdata.map((val)=>(<div className='flex px-5 pb-1 gap-10 border-b-2 border-b-black/70' key={val.id}>
      {/* {uid==val.id?<div className='bg-green-800 w-full flex'>
        <p className='w-1/2'>{val.username}</p>
        <p className='w-1/2'>{val.password}</p>
      </div>: */}
      <div className='w-full flex'>
      <p className='w-1/2 border-l-black'>{val.username}</p>
      <p className='w-1/2  border-l-black'>{val.password}</p>
      <button onClick={()=>handleDelete(val.id)}><RiDeleteBin5Fill /></button>
        </div>
      </div>
        
        ))}      
    </div>
   

  
  </div>
  <Pagination currentPage ={currentPage} setCurrentPage={setCurrentPage} data = {data.length} userPerpage={userPerpage}/>
  </div>
  )
}

export default Adminpanel