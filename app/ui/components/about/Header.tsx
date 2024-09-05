import Image from "next/image";
import Button from "../button";

export default function Header() {
  return (
    <div className="bg-[#1142A0] w-full">
      <div className=" bg-[#1142A0] w-full px-[6%] md:px-[5%] lg:flex py-[4%] md:py-[2%]">
        <div className="flex justify-between items-center">
          <div className="">
            <span className="br-firma font-[600] text-[16px] text-[#E9D7FE] ml-2">
              Nice to meet you
            </span>
            <p className="font-[400] text-[32px] md:font-[500] md:text-[56px] text-white md:w-[489px]">
              About Tizela
            </p>
          </div>
          <p className="text-[16px] font-[500] text-white gilroy w-[281px] md:w-[667px] my-4">
            Tizela was born out of a passion for travel and a desire to simplify
            the booking process. We saw the challenges faced by travelers in
            managing multiple bookings for accommodations, transportation, and
            activities. Our solution? A unified platform that brings everything
            together, making travel planning as seamless as possible. Starting
            in Nigeria, we aim to expand globally, offering top-tier travel
            services that cater to the diverse needs of today’s modern traveler.
          </p>
        </div>
      </div>
    </div>
  );
}
