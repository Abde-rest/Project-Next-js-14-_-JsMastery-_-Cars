import React from "react";
// import imgCra from "@/app/public/hero.png";
import Image from "next/image";
const CardMoudule = ({ setIsOpenModule, imgCra, car }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-40">
      <div className=" bg-slate-200 shadow-2xl p-2 rounded-md  center-div z-50  top-1/2 left-1/2 center-div w-72 sm:w-1/2 lg:w-1/3 fixed ">
        <div className="relative">
          <button
            className="p-2 bg-red-300 rounded-full absolute -top-6 -left-6"
            onClick={() => {
              setIsOpenModule(false);
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path
                fill="#000"
                d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
            </svg>
          </button>
        </div>

        {/* Her images  */}
        <div>
          <div className="relative ">
            <Image
              className="m-auto"
              src={imgCra}
              alt="Photo Imag car "
              width={120}
              height={120}
              //   fill
              priority
            />
          </div>
        </div>

        {/* Info Car  */}
        <div className="px-3">
          <h2 className="font-semibold mt-2 ">{car.make + " " + car.model}</h2>
          <ul>
            {Object.entries(car).map(([key, value], index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between border-t-2 border-black/5 py-1">
                  <li className="text-black/65 font-medium  text-[13px]">
                    {key}
                  </li>
                  <li className="text-black/65 font-medium  text-[13px]">
                    {value}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardMoudule;
