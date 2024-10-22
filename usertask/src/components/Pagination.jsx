import React from 'react'

const Pagination = ({setCurrentPage,userPerpage ,data, currentPage}) => {
    const pages =[]
for(let i = 1; i<=Math.ceil(data/userPerpage); i++){
  pages.push(i)
}    
  return (
    <div className='ml-[1200px] mt-10 w-full h-auto '>
        <div className='  '>
        {pages.map((value, index)=>(<button onClick={()=>setCurrentPage(value)} className={`border-2 rounded-xl border-black w-20 mr-10 active:bg-green-800 text-white bg-black ${currentPage==value?'bg-green-900':''} `} key={index}>{value}</button>))}
        </div>
 </div>
  )
}

export default Pagination