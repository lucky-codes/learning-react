import React from 'react'
import Privateroute from './Privateroute'
import { useEffect, useState } from 'react'

import axios from 'axios'


const Register = () => {
  const tokenSet = localStorage.getItem('accessToken')
  const [authenticate, setAuthenticate] = useState(undefined)
  const calldata = async () => {
    try {
      const response = await axios.post(
        'https://dummyjson.com/auth/login',
        {
          username: 'emilys',
          password: 'emilyspass',
          expiresInMins: 30,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const accessToken = response.data.accessToken
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken)
        // setToken(accessToken)
        setAuthenticate(true)
        console.log('Token set:', accessToken)
        console.log('Authentication status:', authenticate)
      }
    } catch (error) {
      console.log("error occurred", error)
      setAuthenticate(false)
    }
  }
  console.log(tokenSet)
  useEffect(() => {
    if (tokenSet) {
      setAuthenticate(true)
    } else {
      calldata()
    }
  }, [])
  return (
    <div>
      {
       authenticate!==undefined&&<Privateroute authenticate = {authenticate}/>
      }
    </div>
   
  )
}

export default Register