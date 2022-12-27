import React from 'react'
import ServiceTile from './ServiceTile'

export default function SideBar() {
  return (
    <div className=" flex flex-col w-1/4 bg-white  p-4 place-items-center">
        <img
          className=" w-36 h-20  object-contain"
          src="/icons/logo.png"
          alt="drop"
        ></img>
        <div className="flex  space-x-6 place-items-center my-4">
          <img className=" w-5 h-5  " src="/icons/bell.png" alt="drop"></img>
          <img
            className=" w-12 h-12 "
            src="/icons/profile.png"
            alt="drop"
          ></img>
          <p className="font-semibold text-sm text-black">Emilia Clerk</p>
          <img
            className=" w-5 h-5  "
            src="/icons/angle-down.png"
            alt="drop"
          ></img>
        </div>
        <div className="flex flex-col w-full space-y-2">
          <ServiceTile
            color={"bg-green-100"}
            iconUrl={"/Icons/Attendance-report.png"}
            iconUrl2={"/Icons/Right.png"}
            title={"Attendance Report"}
            category={"Report"}
          ></ServiceTile>
          <ServiceTile
            color={"bg-yellow-100"}
            iconUrl={"/Icons/Leave-Request.png"}
            iconUrl2={"/Icons/Right.png"}
            title={"Leave Request"}
            category={"Request"}
          ></ServiceTile>
          <ServiceTile
            color={"bg-blue-100"}
            iconUrl={"/Icons/Access Card Request.png"}
            iconUrl2={"/Icons/Right.png"}
            title={"Access Card Request"}
            category={"Request"}
          ></ServiceTile>
        </div>
      </div>
  )
}
