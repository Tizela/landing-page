"use client";
import React, { useState } from "react";
import ItemCard from "../items/ItemCard";

export default function StaysContainer() {
  const stays = [
    {
      id: 1,
      image: "/images/stays1.jpeg",
      name: "High Valley Villa",
      location: "Lagos Island",
      type: "Studio Apartment",
      amount: 50000,
      dates: "(Avail. 25th - 29th Oct.2024)",
      ratings: 4.8,
    },
    {
      id: 2,
      image: "/images/stays2.jpeg",
      name: "High Valley Villa",
      location: "Lagos Island",
      type: "Studio Apartment",
      amount: 50000,
      dates: "(Avail. 25th - 29th Oct.2024)",
      ratings: 4.8,
    },
    {
      id: 3,
      image: "/images/stays3.jpeg",
      name: "High Valley Villa",
      location: "Lagos Island",
      type: "Studio Apartment",
      amount: 50000,
      dates: "(Avail. 25th - 29th Oct.2024)",
      ratings: 4.8,
    },
    {
      id: 4,
      image: "/images/stays4.jpeg",
      name: "High Valley Villa",
      location: "Lagos Island",
      type: "Studio Apartment",
      amount: 50000,
      dates: "(Avail. 25th - 29th Oct.2024)",
      ratings: 4.8,
    },
    {
      id: 4,
      image: "/images/stays5.jpeg",
      name: "High Valley Villa",
      location: "Lagos Island",
      type: "Studio Apartment",
      amount: 50000,
      dates: "(Avail. 25th - 29th Oct.2024)",
      ratings: 4.8,
    },
    {
      id: 5,
      image: "/images/stays6.jpeg",
      name: "High Valley Villa",
      location: "Lagos Island",
      type: "Studio Apartment",
      amount: 50000,
      dates: "(Avail. 25th - 29th Oct.2024)",
      ratings: 4.8,
    },
  ];

  const locations = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Lagos",
    },
    {
      id: 3,
      name: "Abuja",
    },
    {
      id: 4,
      name: "Ghana",
    },
    {
      id: 5,
      name: "Benin",
    },
  ];

  const [activeTab, setActiveTab] = React.useState(1);
  const selectTab = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-[5%]">
      <p className="font-[700] text-[#272727] text-[16px] br-firma">
        See avaliable location
      </p>

      <div className="flex items-center my-[10px]">
        {locations.map((location) => (
          <div className="" onClick={() => selectTab(location.id)}>
            <p
              className={`cursor-pointer gilroy font-[500] text-[14px] py-[8.54px] px-[28.46px] rounded-[42.69px] mx-1 ${
                location.id === activeTab
                  ? "text-[#FFFFFF] bg-[#1143A0]"
                  : "text-[#575757] border-[1.5px] border-[#EEEEEEEE]"
              }`}
            >
              {location.name}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center  my-[2%]">
        <div className="grid grid-cols-3 gap-[30px] ">
          {stays.map((stay) => (
            <ItemCard
              key={stay.id}
              image={stay.image}
              name={stay.name}
              location={stay.location}
              type={stay.type}
              amount={stay.amount}
              dates={stay.dates}
              ratings={stay.ratings}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
