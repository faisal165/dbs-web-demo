import React from 'react'
import Header from '../../components/Header'
import ServicesMenue from '../../components/ServicesMenue'
import SideBar from '../../components/SideBar'

export default function Services() {
  return (
    <div className=' flex w-screen h-screen'>
        <SideBar></SideBar>
        <div className=" flex flex-col px-10 space-y-4 bg-gray-100 w-3/4">
            <Header></Header>
            <div className='flex flex-col space-y-4'>
                <p className=' text-lg font-semibold text-black'>Services</p>
                <div className='flex justify-between bg-slate-200 rounded-3xl w-full h-72 p-8'>
                    <ServicesMenue
                     icon={"/Icons/AttendanceReport2.png"}
                     title={"Attendance Report"}>
                   
                    </ServicesMenue>
                    <ServicesMenue
                     icon={"/Icons/AttendanceReport2.png"}
                     title={"Attendance Report"}>
                   
                    </ServicesMenue>
                    <ServicesMenue
                     icon={"/Icons/AttendanceReport2.png"}
                     title={"Attendance Report"}>
                   
                    </ServicesMenue>
                    <ServicesMenue
                     icon={"/Icons/AttendanceReport2.png"}
                     title={"Attendance Report"}>
                   
                    </ServicesMenue>

                </div>
            </div>
        </div>
    </div>
  )
}
