import React from 'react'
import Card from './Card';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
const Foregound = () => {
    const ref = useRef(null)
    // const data2 = [{
    //   text:"Hi, I'm Raj Malhotra, a passionate traveler and adventure seeker. I love exploring new cultures and cuisines, and when I'm not on the road, you can find me reading about history or learning new languages.",
    //   mb:'0.4mb',
    //   iconsign:true,
    //   tag:{tagtitle:false, tagtext:'Downloaded-succefully', tagcolor: 'green'}
    // },{
    //     text:"Hello, my name is Aisha Patel. I'm a software engineer with a love for all things tech. In my free time, I enjoy experimenting with new coding projects and practicing yoga to keep myself balanced.",
    //     mb:'0.8mb',
    //     iconsign:false,
    //     tag:{tagtitle:true , tagtext:'Downloading.............', tagcolor: 'blue'}
    //   },{
    //     text:"Hey there! I'm Arjun Kapoor, a marketing professional by day and a fitness enthusiast by night. I'm always on the lookout for new challenges, whether it's a marathon or a creative marketing campaign!",
    //     mb:'0.9mb',
    //     iconsign:true,
    //     tag:{tagtitle:false, tagtext:'Downloaded-succefully', tagcolor: 'green'}
    //   },{
    //     text:"Greetings! My name is Meera Sharma. I'm a nature lover and environmental advocate, working towards making the world a greener place. On weekends, I enjoy hiking and photographing wildlife.",
    //     mb:'10mb',
    //     iconsign:false,
    //     tag:{tagtitle:true, tagtext:'Downloading.............', tagcolor: 'blue'}
    //   },]
   const data = useSelector(store=>store.add.adddata)
    return (
   
        <div ref={ref} className=' fixed z-[3] h-full w-full flex flex-wrap gap-10'>
            {data.map((value,key)=>( <div key={key}><Card data={value} reference={ref}/></div>     
))}
         </div>
  )     
}

export default Foregound