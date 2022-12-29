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
        <div className="flex flex-col space-y-2">
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

        </div>
      </div>
    </div>
  );
}
