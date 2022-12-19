import React from "react";

export default function Banner() {
  return (
    
      <div className="flex  w-3/5 h-52 bg-blue-800 rounded-3xl">
        <div className=" flex flex-col w-auto  space-y-10 p-6">
            <p className="text-white font-normal text-2xl ">Good Morning,<br/>Angelina Jecksam </p>
            <button className=" bg-white w-32 h-12 rounded-full  ">View Profile</button>
      </div>
      <div>
      <img className=" w-64 h-44  " src="/icons/Illustration.png" alt="drop"></img>
      </div>
      </div>
    
  );
}
