import Image from "next/image";
import Destinations from "./Destinations";

export default function Offerings() {
  return (
    <div className="py-[3%] px-[5%]">
      <p className="text-[#272727] font-[500] md:text-[40px] text-[24px] bg-[#fff] text-center">
        Explore our offerings just for you
      </p>{" "}
      <div className="flex justify-center items-center gilroy font-[500] text-[12px] my-[8px]">
        <div className="grid grid-cols-3 gap-[25px]">
          <div className="">
            <div className="">
              <div className="border-[1px] border-[#eeeeee] py-[10px] mx-[1.5%] flex justify-center items-center rounded-[8px] w-[100%] md:px-[8px]">
                <Image
                  src="/icons/buildings.svg"
                  width={30}
                  height={30}
                  alt="Stays"
                />

                <div className="hidden md:inline">
                  <p className="br-firma font-[700] text-[12px] leading-[13.2px] text-[#0F172A] ml-5 mt-1">
                    Stays
                  </p>
                  <p className="gilroy font-[500] text-[12px] leading-[13.2px] text-[#575757] ml-5 mt-1">
                    Book apartments
                  </p>
                </div>
              </div>
              <p className="md:hidden gilroy font-[500] text-[12px] leading-[13.2px] text-[#575757] ml-5 mt-1">
                Stays
              </p>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="border-[1px] border-[#eeeeee] py-[10px] mx-[1.5%] flex justify-center items-center rounded-[8px] w-[100%] px-[8px]">
                <Image
                  src="/icons/car.svg"
                  width={30}
                  height={30}
                  alt="Stays"
                />

                <div className="hidden md:inline">
                  <p className="br-firma font-[600] text-[12px] leading-[13.2px] text-[#0F172A] ml-5 mt-1">
                    Car Rental
                  </p>
                  <p className="gilroy font-[500] text-[12px] leading-[13.2px] text-[#575757] ml-5 mt-1">
                    Renting cars with no hassle
                  </p>
                </div>
              </div>
              <p className="md:hidden gilroy font-[500] text-[12px] leading-[13.2px] text-[#575757] ml-1.5 mt-1">
                Car Rentals
              </p>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="border-[1px] border-[#eeeeee] py-[10px] mx-[1.5%] flex justify-center items-center rounded-[8px] w-[100%] px-[8px]">
                <Image
                  src="/icons/ship.svg"
                  width={30}
                  height={30}
                  alt="Stays"
                />

                <div className="hidden md:inline">
                  <p className="br-firma font-[600] text-[12px] leading-[13.2px] text-[#0F172A] ml-5 mt-1">
                    Boat Cruise
                  </p>
                  <p className="gilroy font-[500] text-[12px] leading-[13.2px] text-[#575757] ml-5 mt-1">
                    Enjoy trips on water
                  </p>
                </div>
              </div>
              <p className="md:hidden gilroy font-[500] text-[12px] leading-[13.2px] text-[#575757] ml-1.5 mt-1">
                Boat cruise
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
