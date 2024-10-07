"use client";
import { useState } from "react";
import Image from "next/image";
import Destinations from "./Destinations";

export default function Offerings() {
  const data = [
    {
      id: 1,
      image: "/icons/buildings.svg",
      title: "Stay",
      description: "Book apartments",
    },
    {
      id: 2,
      image: "/icons/car.svg",
      title: "Car rentals",
      description: "Renting cars with no hassle",
    },
    {
      id: 3,
      image: "/icons/ship.svg",
      title: "Cruises",
      description: "Enjoy trips on water",
    },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const selectTab = (tab: number) => {
    setActiveTab(tab);
  };
  return (
    <div className="py-[3%] px-[5%]">
      <p className="text-[#272727] font-[500] md:text-[40px] text-[24px] bg-[#fff] text-center">
        Explore our offerings just for you
      </p>{" "}
      <div className="flex justify-center items-center gilroy font-[500] text-[12px] my-[8px]">
        <div className="grid grid-cols-3 gap-[25px]">
          {data.map((item) => (
            <div key={item.id} onClick={() => selectTab(item.id)}>
              <div
                className={` py-[10px] mx-[1.5%] flex justify-center items-center rounded-[8px] w-[100%] md:px-[8px] ${
                  activeTab === item.id
                    ? "border-[1px] border-[#164EBB] "
                    : "border-[1px] border-[#eeeeee] opacity-50"
                }`}
              >
                <Image
                  src={item.image}
                  width={30}
                  height={30}
                  alt={item.title}
                />

                <div className="hidden md:inline">
                  <p className="br-firma font-[700] text-[12px] leading-[13.2px] text-[#0F172A] ml-5 mt-1">
                    {item.title}
                  </p>
                  <p className="gilroy font-[500] text-[12px] leading-[13.2px] text-[#575757] ml-5 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
              <p className="md:hidden gilroy font-[500] text-[12px] leading-[13.2px] text-[#575757] ml-5 mt-1">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
