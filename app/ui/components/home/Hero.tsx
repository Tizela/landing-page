import Image from "next/image";
import Button from "../button";

export default function Hero() {
  return (
    <div className="bg-[#1142A0] w-full">
      <div className=" bg-[#1142A0] w-full px-[6%] md:px-[5%] lg:flex py-[4%] md:py-[2%]">
        <div className="">
          <p className="font-[400] text-[32px] md:font-[500] md:text-[56px] text-white w-[286px] md:w-[489px]">
            Unlock every experience: Stay, Car rentals, & Boat cruise
          </p>
          <p className="text-[16px] font-[500] text-white gilroy w-[281px] md:w-[364px] my-4">
            Experience the convenience and luxury of our well-curated services.
            We offer the best options tailored to your desires.{" "}
          </p>
          <Button text="Join Waitlist" link="/waitlist" />
        </div>
        <div className="flex mt-[15px] md:mt-0 mb-[10px] md:mb-0">
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

        {/* <Image src="/icons/overlay.svg" alt="hero" fill className="" /> */}
      </div>
    </div>
  );
}
