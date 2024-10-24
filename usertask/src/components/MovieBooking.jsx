import React from 'react'
import { useState , useEffect} from 'react';
import CalculateSeats from './CalculateSeats';
const MovieBooking = () => {
    const[selected, setSelected]=useState([]);
  return (
    <div className='relative w-screen h-screen'>
        <div className='absolute background z-0 w-screen h-[100%]'></div>
        <div className='fixed z-5 border-white border-2 left-20  text-grey-900 bg-white/60'>
        <h1 className='text-4xl text-center'>Welcome to Movie Booking</h1>
      <CalculateSeats  selected={selected} setSelected={setSelected}/>
      <div className='border-2 ml-[200px] p-2 gap-5 text-white/70 flex mt-1 bg-slate-800/70 border-grey-900 mr-10 w-[80vw] h-[18vh]'>
      <p>seatLocation=</p>
      {selected.map((val,index)=><div key={index} className='flex'><p > {index+1 +'. '+ val}</p></div>)}
      </div>
        </div>
    </div>
  )
}

export default MovieBooking