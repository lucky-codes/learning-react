import React from 'react'
import { useState , useEffect} from 'react';
import CalculateSeats from './CalculateSeats';
const MovieBooking = () => {

  return (
    <div className='relative w-screen h-screen'>
        <div className='absolute background z-0 w-screen h-screen'></div>
        <div className='absolute z-5 border-white border-2 left-20 text-grey-900 bg-white/60'>
        <h1 className='text-4xl text-center'>Welcome to Movie Booking</h1>
      <CalculateSeats   />
      <div className='border-2 ml-[200px] mt-1 bg-slate-800/70 border-grey-900 mr-10 w-[80vw] h-[18vh]'></div>
        </div>
    </div>
  )
}

export default MovieBooking