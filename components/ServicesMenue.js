import React from 'react'

export default function ServicesMenue({icon, title}) {
  return (
   <div className=' flex flex-col  space-y-2 place-items-center w-24 '>
     <div className=' flex flex-col bg-gradient-to-b from-white opacity-75 to-gray-100 w-20 h-20 rounded-2xl justify-center place-items-center'>
     <img
            className=" w-12 h-12 object-contain "
            src={icon}
            alt="drop"
          ></img>
           

          </div>
          <p className=' text-sm font-semibold text-black text-center'>{title}</p>
          


   </div>
                  
  )
}
