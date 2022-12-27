import React from 'react'

export default function ServicesMenue({icon, title}) {
  return (
   <div className=' flex flex-col  space-y-2 place-items-center w-24 '>
     <div className=' flex flex-col bg-gradient-to-b from-white opacity-75 to-gray-100 w-24 h-24 rounded-2xl justify-center place-items-center'>
     <img
            className=" w-14 h-14 object-contain "
            src={icon}
            alt="drop"
          ></img>
           

          </div>
          <p className=' text-base font-semibold text-black text-center'>{title}</p>
          


   </div>
                  
  )
}
