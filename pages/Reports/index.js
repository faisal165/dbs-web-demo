import React from 'react'
import SideBar from '../../components/SideBar'
import Header from '../../components/Header'
import { SalaryReport } from '../../components/SalaryReport'
import { AttendenceReport } from '../../components/AttendenceReport'
import { LeaveReport } from '../../components/LeaveReport'
import {  CasualLeave } from '../../components/CasualLeave'
import { SickLeave } from '../../components/SickLeave'


export default function Reports() {
  return (
    <div className="flex h-screen w-screen  ">
        
      <SideBar></SideBar>
        <div className=" flex flex-col px-10 space-y-4 bg-gray-100 w-3/4">
            <Header></Header>
            
                <div className=' flex space-x-4'>
                <div className=' flex  w-1/2 h-56 p-4  bg-white rounded-3xl justify-between'> 
                <div><p className='text-sm font-semibold'> Salary Report</p></div>
                <div className='flex w-44 h-44 object-contain'><SalaryReport></SalaryReport></div>
                </div>
                <div className=' flex  w-1/2 h-56 p-4 bg-white rounded-3xl justify-between'> 
                <div><p className='text-sm font-semibold'> Attendence Report</p></div>
                <div className='flex w-44 h-44'><AttendenceReport></AttendenceReport></div>
                </div>
                </div>
                <div className=' flex  w-full h-64 bg-white p-8 rounded-3xl justify-between '>
                 
                 <div className='flex flex-col w-44 h-44 place-items-center'>
                    <p> Leave Report</p>
                    <LeaveReport></LeaveReport>
                    </div>
                    <div className='flex flex-col w-44 h-44 place-items-center'>
                    <p> Casual Leave</p>
                    <CasualLeave></CasualLeave>
                    </div>
                    <div className='flex flex-col w-44 h-44 place-items-center'>
                    <p> SickLeave</p>
                   <SickLeave></SickLeave>
                    </div>

                 
                    
                   
                </div>
                </div>
            
        </div>
       
  )
}
