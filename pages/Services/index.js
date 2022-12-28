import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

export default function index() {
  return (
    <div className=" flex w-screen h-screen bg-gray-100">
      <SideBar></SideBar>
      <div className=" flex flex-col w-3/4 space-y-4 px-8">
        <Header></Header>
        <div className="flex flex-col space-y-4">
          <p>shas</p>
          <div className="p-8 bg-white round">
            <div className="grid grid-cols-4 gap-4 justify-center place-items-center">
              <div className="p-4 bg-slate-500 rounded-md flex w-12 h-12 justify-center place-items-center">1</div>
              <div className="p-4 bg-slate-500 rounded-md flex w-12 h-12 justify-center place-items-center">1</div>
              <div className="p-4 bg-slate-500 rounded-md flex w-12 h-12 justify-center place-items-center">1</div>
              <div className="p-4 bg-slate-500 rounded-md flex w-12 h-12 justify-center place-items-center">1</div>
              
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
