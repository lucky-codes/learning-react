import React, { useEffect } from 'react'
import Background from './components/Background'
import Foregound from './components/Foregound'
import {BrowserRouter, Navigate, Route, Routes, useLocation} from 'react-router-dom'
import Taskpage from './components/taskpage'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Loginpanel from './components/Loginpanel'
import { useState } from 'react'
import Taskmanager from './components/Taskmanager'
import Card from './components/Card'
import Privateroute from './components/Privateroute'
import Register from './components/AdminPanel'
import { useDispatch } from 'react-redux'
import { userIdReducer } from './utils/addSlice'
const App = () => {
  const dispatch = useDispatch()
  const[uid, setUid] =useState(null)
  const token = localStorage.getItem('accessToken');
  useEffect(()=>{
    if (token) {
      const base64Url = token.split('.')[1]; // Get the payload part of the JWT
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const decodedPayload = JSON.parse(window.atob(base64)); // Decode from Base64
      setUid(decodedPayload.id)
    }
  },[])
  useEffect(()=>{
    if(uid){
      dispatch(userIdReducer(uid))
      }
  },[uid,dispatch])
  if(uid===null){
    <div className='flex justify-center w-screen items-center'>
      Loading...........
    </div>
  }
  console.log("user",uid)
  return (
    <div>
   <BrowserRouter>
   <Navbar/>
  
    <Routes>
    <Route path='/' element={<Homepage/>}/>
      {!token&&<>
        <Route path='/login' element={<Loginpanel/>}/>
      </>}
      {
        uid==1&&<>
      <Route path='/register' element ={<Register/>}/>  
        </>
      }
      <Route  element={<Privateroute/>}>
      <Route path='/login' element={<Navigate to='/'/>}/>
    <Route path='taskpage' element={<Taskpage/>}/>
    <Route path='manager/:uid' element={<Taskmanager/>}/>
    </Route>
    <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    </BrowserRouter> 
   </div>
  )
}

export default App