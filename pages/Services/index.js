import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { ServicesElements } from "../../components/ServicesElements";
import ServicesMenuTile from "../../components/ServicesMenuTile";

export default function index() {
  return (
    <div className=" flex w-screen h-screen bg-gray-100">
      <SideBar></SideBar>
      <div className=" flex flex-col w-3/4 space-y-4 px-8">
        <Header></Header>
        <div className="flex flex-col space-y-4">
          <p className="text-lg font-semibold">Services</p>
          <div className="p-8 bg-slate-200 w-full h-84 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 justify-center place-items-center">
            {
              ServicesElements.map((menu)=>{
                return <ServicesMenuTile title={menu.title} iconUrl={menu.iconUrl}></ServicesMenuTile>
              })
            }
              
            </div>
            

          </div>
          <div className="flex  rounded-3xl w-full h-40  bg-slate-200 justify-between place-items-center p-8">
            <div className="flex flex-col  ">
              <p className=" font-semibold text-lg ">Shift Details</p>
              <p className="text-sm pt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
              <div className=" flex w-40 h-30 object-contain">
              <img src="images/ShiftDetailIllustration.png">
              </img>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
}
