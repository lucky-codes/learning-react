import React, { useEffect, useState,useRef } from 'react'
import { MdPassword } from 'react-icons/md'
import { Await, Navigate, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
const Loginpanel = () => {
  const navigate = useNavigate()
  const focusemail = useRef()
  const focuspass = useRef()
  const[error, setError]=useState({})
  const[data,setData]=useState({
    username:'',
    password:''

  })
  const loginInfo = async () => {
    try{
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: data.username,
        password: data.password,
        expiresInMins: 30,
      }, {
        headers: { 'Content-Type': 'application/json' },
      });
       localStorage.setItem('accessToken', response.data.accessToken);
      navigate('/demo/taskpage')
      console.log('succefull')
    }
    catch(error){
      console.log('error', error)
    }
      
    
  };
 

  
  const handleLogin=(e)=>{
const{name,value}=e.target;
setData((prev)=>({...prev,[name]:value}))
  }
  
  let valid = {}
  useEffect(()=>{

    if(focusemail.current===document.activeElement){
      if((!data.username.trim())){
        valid.username='Field is empty please fill this field'
      }
    }
    if(focuspass.current===document.activeElement){
      if(!data.password.trim()){
        valid.password='Field is empty please fill this field'
      }

    }
    if(Object.keys(valid).length>0){
      setError(valid)
    }
    else{
      setError({})

    }
   
  },[data])
  //"ava.taylor@x.dummyjson.com", "avatpass"
  //"emily.johnson@x.dummyjson.com",emilyspass"
  const onSubmit=(e)=>{
    e.preventDefault()

    if(Object.keys(valid).length>0){
      setError(valid)
    }
    else{ 
      loginInfo();
    }

  }
  return (
    <div className='w-full  h-screen flex justify-center items-center'>
      <div className='login w-full h-screen absolute z-[1] opacity-50'></div>
        <div className=' bg-black/90 text-white/90  relative z-[2] block overflow-hidden w-[900px] h-[570px]'>
              <div className='text-center'>
              <h1 className='text-semibold text-red-600 text-[40px]'>Login panel</h1>
              <p className='font-mono	text-[20px]'>Join with us and Add your daily task</p>
            </div>            
      <div className='absolute top-[130px] pl-[20px] w-[50%] h-[250px] border-l-[1px] border-l-gray-600 right-0'>
            <p className='border-b-[1px] border-gray-600 mb-4'>Login</p>
        <form action="" onSubmit={onSubmit}className='flex form flex-col'>
        <label className="after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="">username</label>
        <input name='username' ref={focusemail} value={data.username}  onChange={handleLogin} type="text" />{error.username&&<p className='text-xs mt-1 text-red-600'>{error.username}</p>}
        <label  className="after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="">Password</label>
        <input name='password' ref={focuspass} value={data.password} onChange={handleLogin} type="password" />{error.password&&<p className='text-xs mt-1 text-red-600'>{error.password}</p>}
        <button className='absolute left-6 top-[200px] mt-4 text-gray-600 text-sm'>Forget Password?</button>
        <button className='absolute right-20 top-[210px]  border-2 p-[5px] w-20 rounded-2xl border-none bg-sky-600/40 '  onClick={onSubmit}>Login</button>
       </form>
         
        </div>
        <div className='absolute p-5 w-[48%] top-[150px] left-2'>
          <p className='text-xs mb-5'>By continuing you indicate that you agree to Quora’s Terms of Service and Privacy Policy.</p>
          <img src="https://pngimg.com/uploads/google/google_PNG19635.png" className='w-10 absolute top-20 left-10' alt="" />
          <button className='border-[1px] my-2 w-80 h-10 border-white/60 bg-black'>Continue with Google</button>
          <img src="https://tse3.mm.bing.net/th?id=OIP.rbJTYM02t3O268Nekt8RbAHaFj&pid=Api&P=0&h=180" className='w-9 absolute top-[142px] left-10' alt="" />
          <button className='border-[1px] my-2 w-80 h-10 border-white/60 bg-black'>Continue with Facebook</button>
          <p className='mx-[80px] my-4'>Sign up wiith email</p>
          
        </div>
        <div className=' absolute flex justify-center py-6 bottom-[60px] w-full border-y-[1px] border-gray-600 '>
          <p>Hindi</p>
        </div>
        <p className='absolute bottom-4 text-white/60 flex justify-center w-full'>About.Careers.Privacy.Terms.Contact.Languages.Your Ad ChoicesPress© Task, Inc. 2024</p>
           </div>
        </div>
  )
}

export default Loginpanel