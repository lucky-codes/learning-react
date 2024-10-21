import React from 'react'
import Background from './components/Background'
import Foregound from './components/Foregound'
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom'
import Taskpage from './components/taskpage'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Loginpanel from './components/Loginpanel'
import { useState } from 'react'
import Taskmanager from './components/Taskmanager'
import Card from './components/Card'
import Privateroute from './components/Privateroute'
import Register from './components/Register'
const App = () => {

  return (
    <div>
   <BrowserRouter>
   <Navbar/>
    <Routes>
    <Route path='/login' element={<Loginpanel/>}/>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/register' element ={<Register/>}/>
    <Route path='/demo' element={<Privateroute/>}>
    <Route path='taskpage' element={<Taskpage/>}/>
    <Route path='manager/:uid' element={<Taskmanager/>}/>
    </Route>
    </Routes>
    </BrowserRouter> 
   </div>
  )
}

export default App