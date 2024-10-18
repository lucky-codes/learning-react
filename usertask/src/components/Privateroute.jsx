import React, { useEffect,useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Loginpanel from './Loginpanel';
import ApiTokenReducer from '../utils/addslice.jsx'
import { useDispatch } from 'react-redux';
import axios from 'axios';
const Privateroute = () => {
    const dispatch = useDispatch()
    const[authenticate,setAuthenticate]=useState(false)
    const[token,setToken]=useState('');
    // const calldata = async()=>{
    //     try{
    //         const call =await fetch('https://dummyjson.com/auth/login', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
                  
    //               username: 'emilys',
    //               password: 'emilyspass',
    //               expiresInMins: 30, 
    //             }),
    //             // credentials: 'include' // Include cookies (e.g., accessToken) in the request
    //           })
    //    const data = await call.json()
    //    console.log(data.accessToken)
       
    //    if(data.accessToken){
    
    //    }
    //   }
    //   catch(error){
    //    console.log("error occured",error)
    //   } 
    // };
       const calldata = async()=>{
    try{
        const response =await axios.post('https://dummyjson.com/auth/login', {
            headers: { 'Content-Type': 'application/json' },
            
              
              username: 'emilys',
              password: 'emilyspass',
              expiresInMins: 30, 
            // credentials: 'include' // Include cookies (e.g., accessToken) in the request
          })

          localStorage.setItem('accessToken', response.data.accessToken)
          setAuthenticate(true)

        //   setToken(call.data.accessToken)
        //     if(call.data.accessToken){
        //         dispatch(ApiTokenReducer(token.accessToken))
        //         console.log(dispatch(ApiTokenReducer(token.accessToken)))
        //         console.log('inn')
        //     }
        //     else{
        //         console("error ocurred")
        //     }
        //     console.log(call.data.accessToken);
            
  }
  catch(error){
   console.log("error occured",error)
   setAuthenticate(false)

  } 
};
        useEffect(()=>{
            calldata();
    },[])

console.log(authenticate)
    return (
    <div>
   {
    authenticate?<Outlet/>:<Navigate to='/login'/>
   }      
   
    </div>
  )
}

export default Privateroute