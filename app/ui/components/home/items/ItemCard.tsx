import React from "react";
import Image from "next/image";

interface CardProps {
  image: string;
  name: string;
  location: string;
  type: string;
  amount: number;
  dates: string;
  ratings: number;
}

export default function ItemCard({
  image,
  name,
  location,
  type,
  amount,
  dates,
  ratings,
}: CardProps) {
  return (
    <>
      <div className="w-[364px]">
        {/* <Image
          src={image}
          alt={name}
          width={382.59}
          height={281.72}
          className="rounded-[9.43px]"
        /> */}

        <img
          src={image}
          alt=""
          className="rounded-[9.43px] w-[382.50px] h-[281px]"
        />

        <div className="gilroy my-[10px]">
          <div className="flex justify-between items-center">
            <p className="gilroy font-[600] text-[16px] text-[#0F172A]">
              {name}
            </p>
            <p className="font-[600] text-[14px] text-[#0F172A] flex items-center">
              <Image
                src="/icons/ratings-star.svg"
                width={20}
                height={20}
                alt=""
              />{" "}
              {ratings}
            </p>
          </div>
          <p className="font-[500] text-[#475569] gilroy text-[12px]">{type}</p>
          <p className="font-[500] text-[#475569] gilroy text-[14px] flex items-center">
            <Image
              src="/icons/location.svg"
              width={10}
              height={11.5}
              alt=""
              className="mr-1"
            />
            {location}
          </p>
          <div className="flex justify-between items-center">
            <p className="font-[600] text-[#1142A0] gilroy text-[16.5px]">
              ₦{amount} <span className="text-[16px]">/ per night</span>
            </p>
            <p className="font-[500] text-[#272727] text-[12px]">{dates}</p>
          </div>
        </div>
      </div>
    </>
  );
}
