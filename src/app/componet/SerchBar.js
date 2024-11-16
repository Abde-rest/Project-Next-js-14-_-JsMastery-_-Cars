"use client";
// import { Select } from "@headlessui/react";
import React, { useState } from "react";
// import FetchDataCars from "./FetchDataCars";

import { useRouter } from "next/navigation";

const SerchBar = ({ dataList }) => {
  let [isOpenList, setisOpenList] = useState(false);

  let router = useRouter();

  // اسم السيارىة التي اخترتها من list
  // الاستعلام الذي كتبته
  let [Carname, setcarname] = useState("");
  // let [query, setquery] = useState("");

  // فتح القائمة عندما نقوم بالضفط
  function hansClick() {
    setisOpenList(!isOpenList);
  }

  // اختيار السيارة من القائمة
  async function SelectCarfnctionwhenClick(CarName) {
    setisOpenList(!isOpenList);
    setcarname(CarName);
  }

  // function changeForm(e) {
  //   // (e) => {

  //   setquery(e.target.value);
  //   setcarname(e.target.value);
  //   // }
  // }

  function handelform(e) {
    e.preventDefault();
    // Her Is Fetch

    // Get the Path Name Your Serach Bar and Put Info to him

    if (Carname) {
      let SerachParms = new URLSearchParams(window.location.search);

      SerachParms.set("Make", Carname);
      // SerachParms.set("Ysers", 2020);

      let NewPathName = `${window.location.pathname}?${SerachParms}`;

      router.push(NewPathName);
    }
  }
  //   let Car_List_Array = [];

  //   dataList.data.map((car) => {
  //     Car_List_Array.push(car.make.name);
  //   });

  //   // Fiter list Car  when i change input
  //   let filterList =
  //     query === ""
  //       ? ""
  //       : Car_List_Array.filter((car) =>
  //           car
  //             .toLowerCase()
  //             .replace(/\s+/g, "")
  //             .includes(query.toLowerCase().replace(/\s+/g, ""))
  //         );

  //   console.log(filterList);

  return (
    <div className="w-fit relative">
      <div className="  shadow shadow-black/20items-center bg-white w-fit ">
        <form className="flex items-center" onSubmit={handelform}>
          {/* <button className="bg-sky-500 text-white h-full p-2">Serach</button> */}
          <input
            type="text "
            onChange={() => {
              changeForm();
            }}
            value={Carname}
            placeholder="Your Car  Modula"
            className="p-2 rounded-md outline-none border-none placeholder:text-black placeholder:text-sm"
          />
          {/* <button onClick={hansClick}> */}{" "}
          <span>
            {" "}
            <svg
              onClick={hansClick}
              className="cursor-pointer"
              width="16"
              height="10"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.43004 0.148193L5.00004 3.67356L8.57004 0.148193L9.66671 1.23351L5.00004 5.8519L0.333374 1.23351L1.43004 0.148193Z"
                fill="#9195A1"
              />
            </svg>
          </span>
          {/* </button> */}
          <button type="submit" className="bg-sky-500 ml-3 p-2 text-white">
            Serach
          </button>
        </form>
      </div>

      {/* list car  */}
      <div className="mt-3 bg-white   rounded-sm  absolute z-50 w-full  shadow-2xl shadow-black">
        {/* h-0  */}
        <ul
          className={` ${
            isOpenList ? "max-h-40" : "max-h-0"
          }  overflow-y-scroll transition`}>
          {dataList &&
            dataList.data.map((car) => {
              return (
                <li
                  onClick={() => {
                    SelectCarfnctionwhenClick(car.name);
                  }}
                  key={car.id}
                  className="p-2  hover:bg-slate-100 hover:cursor-pointer">
                  {car.name}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default SerchBar;
