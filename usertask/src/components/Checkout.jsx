import React, { useState } from 'react'
import Mydetails from './Details'
import { useSelector } from 'react-redux'
const Checkout = () => {
  const[percentage,setPercentage]=useState(0)
  const[timer,setTimer]=useState(0)
  const handleStart = ()=>{
     window.interval=setInterval(()=>{
     setTimer(prev=>prev+1)
    },1000)
  }
  const handleStop = () =>{
    return clearInterval(window.interval)
  }
  const handReset = () =>{
    clearInterval(window.interval)
    setTimer(0)
  }
  return (
    <div className='flex flex-col justify-center w-screen h-screen items-center'>
      <div className='flex gap-5 m-2 flex-col'>
      <h1 className='text-4xl text-center'>Progress bar</h1>
      <div className='w-[1000px] relative rounded-full box-border flex overflow-hidden justify-start border-2 border-black  text-black h-[80px]'>
   <div className={`text-6xl transition-[1.5s] ease-[0.5] bg-gradient-to-r from-purple-600 to-pink-500 h-[80px]`} style={{ width: `${percentage}%` }}> <p className='mx-3 absolute z-2 my-2'>{percentage}%</p> </div> 
    </div>
      </div>
      <div className='flex gap-5'>
      <label htmlFor="">input percentage</label>
      <input type="number"  value={percentage} min={0} max={100} onChange={(e)=>setPercentage(Number(e.target.value))} className='w-20 p-2  rounded-xl border-2 border-black'/>
      </div>
      <div className='mt-10 grid gap-2'>
        <div className='flex gap-6'>
        <h1 className='text-2xl text-center'>Timer :-</h1>
        <p className='text-2xl text-center'>{Math.floor(timer/60)}min</p>
        <p className='text-2xl text-center'>{timer}secs</p>
        </div>
        <div className='flex gap-5'>
        <button className='w-20 p-2  rounded-xl border-2 border-black' onClick={handleStart}>Start</button>
        <button className='w-20 p-2  rounded-xl border-2 border-black' onClick={handleStop}>Stop</button>
        <button className='w-20 p-2  rounded-xl border-2 border-black' onClick={handReset}>Reset</button>
        </div>
        
      </div>
   </div>
  )
}

export default Checkout