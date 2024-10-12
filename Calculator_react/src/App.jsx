import React from 'react'
import Background from './components/Background'
import Foregound from './components/Foregound'

const App = () => {
  return (
    <div className=' relative  bg-zinc-600 w-full h-screen'>
      <Background/>
      <div className='fixed top-0 left-0  z-[3] w-full h-full bg-sky-800/20'></div>
      <Foregound/>
    </div>
  )
}

export default App