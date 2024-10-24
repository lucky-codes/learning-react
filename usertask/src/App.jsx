import React, { useEffect, useLayoutEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import Adminpanel from './components/AdminPanel'
import MovieBooking from './components/MovieBooking'
import Checkout from './components/checkout'
const App = () => {
  const token = localStorage.getItem('accessToken');  
 const uid = useSelector(store=> store.add.id)
 const showNavBar = window.location.pathname !=='/movie'
 useEffect(()=>{
    console.log(uid)
 },[uid])
 
  return (
    <div>
   <BrowserRouter>
   {showNavBar&&<Navbar/>}
    <Routes>
    <Route path='/' element={<Homepage/>}/>
      {!token&&<>
        <Route path='/login' element={<Loginpanel/>}/>
      </>}
      {
        uid==1&&<>
                    <Route path='/admin' element ={<Adminpanel/>}/>  
        </>
      }

      <Route  element={<Privateroute/>}>
      <Route path='/login' element={<Navigate to='/'/>}/>
    <Route path='taskpage' element={<Taskpage/>}/>
    <Route path='manager/:uid' element={<Taskmanager/>}/>
    <Route path='/movie' element={<MovieBooking/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    </Route>
    <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    </BrowserRouter> 
   </div>
  )
}

export default App