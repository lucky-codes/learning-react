import React, { useRef } from 'react'
import { useState } from 'react';
const CalculateSeats = ({}) => {
    const  seats=[]
    const totalmiddleColoumn = 6
    const totalVipColoumn =5
    const totallowercoloumn =8
  const[selected, setSelected]=useState([]);
  const calculate = (numberofSeats) =>{
    for(let rows=1; rows<=numberofSeats; rows++){
        const row = []
          for( let col=1; col <= numberofSeats; col++){
            row.push(col)
          }
          seats.push(row)
        
        }
     }
        if(selected.length>=5){
            return(
                <div className='flex justify-center items-center w-screen h-screen text-4xl'>No more seats to select</div>
            )
        }
    calculate(totalVipColoumn)
    calculate(totalmiddleColoumn)
    calculate(totallowercoloumn)
        const onClickHandle=(rowIndex,colIndex )=>{
            const seatLocation  = `Row-${rowIndex}`+' '+`Col-${colIndex}`
            if(selected.includes(seatLocation)){
                console.log("already selected")
            }
            else{
                setSelected([...selected,seatLocation])
            }
            
            }
            console.log(selected)
             
  return (
    <div>{
        
        
        <div className='text-center border-black/30 border-2'>
      {seats.map((val, rowIndex)=>(<div key={rowIndex}>
        
            <div className='flex justify-center mt-2 ' >  {val.map((value, colIndex) => {
                const seatLocation = `Row-${rowIndex} Col-${colIndex}`;
                return (
                  <button
                    className={`border-2 bg-yellow-100 border-black/70 mx-5 w-[80px] 
                      
                      ${selected.includes(seatLocation) ?'bg-yellow-800': 'active:bg-red-500'}`}
                    onClick={() => onClickHandle(rowIndex,colIndex )}
                    key={colIndex}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
            
           </div>))}
           
           </div>}</div>
  )
}

export default CalculateSeats