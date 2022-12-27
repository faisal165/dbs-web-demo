import * as React from "react";
import { useState } from "react";
import Banner from "../../components/banner";
import ServiceTile from "../../components/ServiceTile";
import NotificationTile from "../../components/NotificationTile";
import Header from '../../components/Header'

import { LineChart } from "../../components/LineChart";
import ShiftTimingTile from "../../components/ShiftTimingTile";
import { LeaveReport } from "../../components/LeaveReport";


export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  React.useEffect(()=>{

  },[])

  return (
    <div className="flex h-screen w-screen">
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

      <div className=" flex flex-col px-10 space-y-4 w-3/4 bg-gray-100">
        {/* <div className=" flex w-1/2 mx-10 h-80 bg-black"></div> */}
        <Header></Header>
        <div className="flex pt-8 space-x-4">
          <Banner></Banner>

          <div className="flex flex-col w-2/5 h-52 bg-white  rounded-3xl p-4">
            <p className="font-medium">Notification</p>
            <div className=" flex flex-col">
              <NotificationTile
                title={"Sick Leave"}
                description={"bsbksabakbdk"}
                status={1}
              ></NotificationTile>
              <NotificationTile
                title={"Sick Leave"}
                description={"bsbksabakbdk"}
                status={2}
              ></NotificationTile>
              <NotificationTile
                title={"Sick Leave"}
                description={"bsbksabakbdk"}
                status={3}
              ></NotificationTile>
            </div>
          </div>
        </div>
        <div className=" flex space-x-3 ">
          <div className=" flex flex-col w-2/5 space-y-3">
          <div className="flex w-full h-44 rounded-3xl p-3 bg-white ">
            <p className=" font-medium text-sm">Leave Report</p>
            <div className=" flex place-items-center justify-center">
            <LeaveReport></LeaveReport>
            </div>
            
          </div>
          <div className=" flex w-full h-32 bg-white rounded-3xl">
          <ShiftTimingTile></ShiftTimingTile>
            </div>
          </div>
          <div className="flex w-3/5 h-80 rounded-3xl p-3 bg-white ">
            
            <LineChart></LineChart>
          </div>
          
        </div>
        
        
      </div>
    </div>
  );
}
