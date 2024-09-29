import React from "react";

export const FillButton = ({ name}) => {
  return (
    <>
      <div
        className={`bg-primary text-white rounded-lg px-3 py-2 text-xs lg:px-4 lg:text-sm hover:bg-secondary text-center`}
      >
        {name}
      </div>
    </>
  );
};
import { IoPlayCircleOutline } from "react-icons/io5";

export const OutlineButton = ({ name }) => {
  return (
    <>
      <div className="flex items-center rounded-md px-6 py-2 space-x-2 border border-transparent hover:border-primary cursor-pointer text-center">
        <IoPlayCircleOutline className="w-6 h-6 fill-primary" />
        <div className="text-primary text-xs lg:text-sm">
          {name}
        </div>
      </div>
    </>
  );
};


