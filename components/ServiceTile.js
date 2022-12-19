import React from "react";

export default function ServiceTile({ iconUrl, iconUrl2, title, category, color }) {
  return (
    <div className="flex w-full h-20 bg-slate-100 place-items-center  justify-between rounded-2xl p-4">
      <div className="flex justify-start place-items-center">
        <div
          className={`flex w-14 h-14 justify-center place-items-center rounded-xl ${color}`}
        >
          <img
            className=" w-10 h-10 object-contain "
            src={iconUrl}
            alt="drop"
          ></img>
        </div>
        <div className=" flex flex-col justify-start">
          <p className="px-4 text-sm">{title}</p>
          <p className="px-4 text-xs">{category}</p>
        </div>
      </div>

      <img
        className=" w-4 h-4 object-contain "
        src={iconUrl2}
        alt="drop"
      ></img>
    </div>
  );
}
