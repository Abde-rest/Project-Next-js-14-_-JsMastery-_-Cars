"use client";
import Image from "next/image";
import React, { useState } from "react";
import imgCra from "@/app/public/hero.png";
import imgiocn1 from "@/app/public/steering-wheel.svg";
import imgiocn2 from "@/app/public/tire.svg";
import imgiocn3 from "@/app/public/gas.svg";
import CustomeBtn from "../CustomeBtn";
import CardMoudule from "./CardMoudule";

const CardBox = ({ car }) => {
  let [isOpenModule, setIsOpenModule] = useState(false);

  return (
    <div>
      <div id="card" className="p-2 relative rounded bg-white   shadow-xl  ">
        <div className="flex items-center justify-between">
          {" "}
          <h1 className="font-bold  text-sm">{car.make + " " + car.model}</h1>
          <p className="p-1 bg-sky-400/15 rounded-sm">{car.year}</p>
        </div>
        <p className="font-bold text-sm">
          <span className="text-sm relative -top-2 ">$</span>
          <span>54</span>
          <span>/day</span>
        </p>

        <div className="relative ">
          <Image
            className="m-auto"
            src={imgCra}
            alt="Photo Imag car "
            width={200}
            height={200}
            //   fill
            priority
          />
        </div>
        <div className="flex items-center justify-between ">
          <div>
            <Image
              src={imgiocn1}
              alt="Icon"
              width={14}
              height={14}
              className="m-auto"
            />
            <p className="text-center text-xs ">
              {car.transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div>
            <Image
              src={imgiocn2}
              alt="Tire"
              width={14}
              height={14}
              className="m-auto"
            />
            <p className="text-center text-xs ">{car.drive.toUpperCase()}</p>
          </div>

          <div>
            <Image
              src={imgiocn3}
              alt="Icon"
              width={14}
              height={14}
              className="m-auto"
            />
            <p className="text-center text-xs ">{car.city_mpg} MPG</p>
          </div>
        </div>

        <div id="Btn-card" className="hidden  w-full absolute bottom-0 left-0 ">
          <CustomeBtn title={"Show More "} setIsOpenModule={setIsOpenModule} />
        </div>
      </div>

      {/* model  */}
      {isOpenModule ? (
        <CardMoudule setIsOpenModule={setIsOpenModule} imgCra={imgCra} car={car} />
      ) : null}
    </div>
  );
};
export default CardBox;
