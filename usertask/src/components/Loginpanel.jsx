import React, { useEffect, useState } from 'react'
import { MdPassword } from 'react-icons/md'

const Loginpanel = () => {
  const[data,setData]=useState({
    email:'',
    password:''

  })
  const[error, setError]=useState({})
  const handleLogin=(e)=>{
const{name,value}=e.target;
setData((prev)=>({...prev,[name]:value}))
  }
  useEffect(()=>{
    let valid = {}
    if(!data.email.trim()){
      valid.email='Field is empty please fill this field'
    }
    if(!data.password.trim()){
      valid.password='Field is empty please fill this field'
    }
    if(Object.keys(valid).length>0){
      setError(valid)
    }
    else{
      setError('')
    }
  },[data])
  
  return (
    <div className='w-full  h-screen flex justify-center items-center'>
      <div className='login w-full h-screen absolute z-[1] opacity-50'></div>
        <div className=' bg-black/90 text-white/90  relative z-[2] block overflow-hidden w-[900px] h-[550px]'>
              <div className='text-center'>
              <h1 className='text-semibold text-red-600 text-[40px]'>Login panel</h1>
              <p className='font-mono	text-[20px]'>Join with us and Add your daily task</p>
            </div>            
      <div className='absolute top-[130px] pl-[20px] w-[50%] h-[250px] border-l-[1px] border-l-gray-600 right-0'>
            <p className='border-b-[1px] border-gray-600 mb-4'>Login</p>
        <form action="" className='flex form flex-col'>
        <label htmlFor="">Email</label>
        <input name='email' value={data.email} onChange={handleLogin} type="text" />{error.email&&<p className='text-xs mt-1 text-red-600'>{error.email}</p>}
        <label htmlFor="">Password</label>
        <input name='password' value={data.password} onChange={handleLogin} type="password" />{error.password&&<p className='text-xs mt-1 text-red-600'>{error.password}</p>}
        <button className='absolute left-6 top-[200px] mt-4 text-gray-600 text-sm'>Forget Password?</button>
        <button className='absolute right-20 top-[210px]  border-2 p-[5px] w-20 rounded-2xl border-none bg-sky-600/40 '>Login</button>
       </form>
         
        </div>
        <div className='absolute p-5 w-[48%] top-[150px] left-2'>
          <p className='text-xs mb-5'>By continuing you indicate that you agree to Quora’s Terms of Service and Privacy Policy.</p>
          <button className='border-[1px] my-2 w-80 h-10 border-white/60 bg-black'>Continue with Google</button>
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