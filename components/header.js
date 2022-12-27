

import Link from 'next/link'
import React from 'react'
import {navBarElements} from './NavBarElements'

  


export default function Header() {
  return (
    <div className=" flex w-full  h-16 bg-white rounded-b-3xl  justify-between px-10 place-items-center">
      {
      navBarElements.map((element)=>{
        return<Link href={element.ref}><p>{element.name}</p></Link>
      })
      }
      </div>
    
    
  //   <div><div className=" flex w-full  h-16 bg-white rounded-b-3xl  justify-between px-10 place-items-center">
  //   <div className="flex flex-col w-12  place-items-center ">
  //     <img
  //       className=" w-6 h-6 "
  //       src="/icons/Category.png"
  //       alt="drop"
  //     ></img>
  //     <p className=" text-sm font-medium pt-2 text-slate-900"> Menu</p>
  //   </div>
  //   <div className="flex flex-col w-12  place-items-center ">
  //     <img className=" w-6 h-6 " src="/icons/Chart.png" alt="drop"></img>
  //     <p className=" text-sm font-medium pt-2 text-zinc-400"> Menu</p>
  //   </div>
  //   <div className="flex flex-col w-12  place-items-center ">
  //     <img className=" w-6 h-6 " src="/icons/Bag-2.png" alt="drop"></img>
  //     <p className=" text-sm font-medium pt-2 text-zinc-400"> Menu</p>
  //   </div>
  //   <div className="flex flex-col w-12  place-items-center ">
  //     <img
  //       className=" w-6 h-6 "
  //       src="/icons/Profile1.png"
  //       alt="drop"
  //     ></img>
  //     <p className=" text-sm font-medium pt-2 text-zinc-400"> Menu</p>
  //   </div>
  //   <div className="flex flex-col w-12  place-items-center ">
  //     <img className=" w-6 h-6 " src="/icons/Search.png" alt="drop"></img>
  //     <p className=" text-sm font-medium pt-2 text-zinc-400"> Menu</p>
  //   </div>
  //   <div className="flex flex-col w-12  place-items-center ">
  //     <img
  //       className=" w-6 h-6 "
  //       src="/icons/Setting.png"
  //       alt="drop"
  //     ></img>
  //     <p className=" text-sm font-medium pt-2 text-zinc-400"> Menu</p>
  //   </div>
  // </div></div>
  )
}
