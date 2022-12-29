import React from 'react'
import Link from 'next/link'
import { ServicesElements } from './ServicesElements'

export default function ServicesMenuTile({title,iconUrl}) {
  return (
    <div className=' flex flex-col w-24 justify-center place-items-center'>
        <div className="p-4 bg-gradient-to-b from-white  to-gray-100 rounded-2xl flex  w-20 h-20 justify-center place-items-center">
        <div className='flex w-10 h-10 object-contain place-items-center '>
        <img
        src={iconUrl}></img>
               
        </div>
        </div>
        <div className='flex  '>
            <p className='text-center  font-medium pt-2'>{title}</p>
        </div>
    </div>
            

            
  )
}
