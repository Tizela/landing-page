import Image from "next/image";
import Button from "../button";

export default function Hero() {
  return (
    <div className="bg-[#1142A0] w-full relative">
      <div className=" bg-[#1142A0] w-full px-[6%] md:px-[5%] lg:flex py-[4%] md:py-[2%]">
        <div className="">
          <p className="font-[400] text-[32px] md:font-[500] md:text-[56px] text-white w-[286px] md:w-[489px]">
            Unlock every experience: Stay, Car rentals, & Boat cruise
          </p>
          <p className="text-[16px] font-[500] text-white gilroy w-[281px] md:w-[364px] my-4">
            Experience the convenience and luxury of our well-curated services.
            We offer the best options tailored to your desires.{" "}
          </p>
          <div className="flex justify-center items-center">
            <Image
              src="/icons/playstorewhite.svg"
              alt="Download our app"
              width={160}
              height={50}
            />
            <Image
              src="/icons/appstorewhite.svg"
              alt="Download our app"
              width={160}
              height={50}
              className="ml-1.5"
            />
          </div>
        </div>
        <div className="hidden md:flex mt-[15px] md:mt-0 mb-[10px] md:mb-0">
          <div className="mr-[16px] md:relative">
            <Image
              src="/images/hero-car.png"
              alt="Car Rental"
              width={200}
              height={200}
              className="border-transparent rounded-[13.65px] md:absolute right-0"
            />
            <Image
              src="/images/hero-stay.png"
              alt="Stay Rental"
              width={300}
              height={300}
              className="mt-[4%] md:mt-[75%]"
            />
          </div>
          <Image
            src="/images/hero-cruise.png"
            alt="Boat Cruise"
            width={300}
            height={300}
            className="border-transparent rounded-[13.65px]"
          />
        </div>

        <div className="mt-[15px] flex justify-between items-center md:hidden">
          <div className="w-[50%] flex items-end">
            <div className="">
              <img
                src="/images/hero-car.png"
                alt=""
                className="w-[121.89px] h-[126.66px] ml-[18%] my-3 rounded-[6.94px] border-transparent"
              />
              <img
                src="/images/hero-stay.png"
                alt=""
                className="w-[154.85px] h-[148.34px] rounded-[6.94px] border-transparent"
              />
            </div>
          </div>
          <div className="w-[50%]">
            <img
              src="/images/hero-cruise.png"
              alt=""
              className="w-[164.83px] h-[304.06px] rounded-[6.94px] border-transparent"
            />
          </div>
        </div>

        {/* <Image src="/icons/overlay.svg" alt="hero" fill className="" /> */}
        <img
          src="/icons/star.svg"
          className="w-[50px] h-[50px] absolute right-[44.5%] top-[72.5%] md:hidden"
        />
        <img
          src="/icons/star.svg"
          className="w-[70px] h-[70px] absolute right-[29%] md:top-[34%] hidden md:inline"
        />
      </div>

      <div className="hidden md:block absolute bottom-0 left-0 blur-2xl w-[73.61px] h-[101px] rounded-full header-bg"></div>
      <div className="hidden md:block absolute blur-2xl bottom-[90px] left-[380px] w-[203px] h-[198.8px] rounded-l-full header-bg opacity-[0.4] z-[]"></div>
      <div className="hidden md:block absolute blur-2xl w-[119.87px] h-[115px] rounded-full header-bg right-0 bottom-0"></div>
    </div>
  );
}
