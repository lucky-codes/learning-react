import React from 'react'

const Mydetails = ({udata}) => {
  return (
    <div>
          <div className='text-white w-[95%] z-[10] left-[2.5%] absolute bg-black/90 px-10  top-[100px]'>
          <div className='flex justify-center'>
          <h1 className=' text-[50px] text-green-600  font-bold'>My Details</h1>
          <img src={udata.image} alt="" className='w-20 h-20' />
          </div>
          <div className='grid gap-10'>
          <h1 className='hover:bg-white/10 px-4 text-white/80'>Name:-{udata.firstname} {udata.lastName}</h1>
            <ol className='bgcolor grid gap-10'>
              <li> Age:-{udata.age}</li>
               <li>Email:-{udata.email}</li>
               <li>Phone:-{udata.phone}</li>
               <li>Username:-{udata.username}</li>
               <li>Blood Group:-{udata.bloodGroup}</li>
            </ol>

          </div>
          
       </div>
    </div>
  )
}

export default Mydetails