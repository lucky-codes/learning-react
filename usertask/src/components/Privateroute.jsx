import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const Privateroute = () => {
 
  const tokenSet = localStorage.getItem('accessToken')
  if (tokenSet) {
    return <Outlet />
  } else {
    return <Navigate to="/login" />
  }
}

export default Privateroute
