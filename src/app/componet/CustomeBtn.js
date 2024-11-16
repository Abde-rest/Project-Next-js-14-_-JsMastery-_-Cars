// "use client";
import React from "react";

const CustomeBtn = ({ title, setIsOpenModule }) => {
  return (
    <button
      className="bg-sky-500 text-white rounded-md p-2 w-full hover:bg-sky-200"
      onClick={() => {
        setIsOpenModule(true);
      }}>
      {title}
    </button>
  );
};

export default CustomeBtn;
