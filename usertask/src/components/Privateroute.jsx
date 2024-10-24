import React, { useEffect, useMemo, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { userIdReducer } from '../utils/addSlice'
const Privateroute = () => {
  const dispatch=useDispatch()
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

  
  if(uid===null){
    <div className='flex justify-center w-screen items-center'>
      Loading...........
    </div>
  }  
  useEffect(() => {
    if (uid) {
      dispatch(userIdReducer(uid));
    }
  }, [uid, dispatch]);
   
  const tokenSet = localStorage.getItem('accessToken')
  if (tokenSet) {
    return <Outlet />
  } else {
    return <Navigate to="/login" />
  }
}

export default React.memo(Privateroute)
