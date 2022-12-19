import React from "react";

export default function NotificationTile({ title, description, status }) {
  return (
    <div className=" flex justify-between place-items-center">
      <div className=" flex flex-col">
        <p className="font-medium text-lg">{title}</p>
        <p className="font-medium text-sm text-gray-400 divide-x-2">
          {description}
        </p>
      </div>

      <div className="flex justify-end">
        <TagTile status={status}></TagTile>
        
      </div>
    </div>
  );
}

// 1- for accepted, 2- for rejected and 3 for pending
function TagTile({ status }) {
  switch (status) {
    case 1:
      return (
        <div className="text-sm font-semibold text-green-600">Accepted</div>
      );
      case 2:
      return (
        <div className="text-sm font-semibold text-red-600">Rejected</div>
      );
      case 3:
      return (
        <div className="text-sm font-semibold text-blue-600">Pending</div>
      );
    default:
      return (
        <div className="text-sm font-semibold text-blue-600">Pending</div>
      );
  }
}
