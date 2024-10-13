import React from "react";
import Image from "next/image";

export default function HostHeader() {
  return (
    <div className="bg-[#1142A0] text-white pt-[4%]">
      <div className="flex justify-center items-center">
        <p className="text-[50px] w-[911px]  font-[400] text-center">
          List your apartments, car & boat, profitably on Tizela.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <span className="gilroy text-[16px] font-[500] text-center w-[552px] block">
          Experience the convenience and luxury of our well-curated services. We
          offer the best options tailored to your desires.{" "}
        </span>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="bg-[#fff] text-[#1142A0] rounded-[40px] py-[12px] px-[24px] gilroy font-[500] text-[13px] md:text-[16px] w-[200px] flex justify-center items-center my-4"
          //   onClick={() => router.push("/waitlist")}
        >
          Get Started
        </button>
      </div>

      <div className="grid grid-cols-3 ml-[8%] mr-[5%] mt-[2%]">
        <Image
          src="/images/host-stay.png"
          alt="host"
          width={320}
          height={330}
          className="border-transparent rounded-[13.65px]"
        />

        <Image
          src="/images/host-cars.png"
          alt="host"
          width={330}
          height={330}
          className="border-transparent rounded-[13.65px]"
        />

        <Image
          src="/images/host-boat.png"
          alt="host"
          width={320}
          height={330}
          className="border-transparent rounded-[13.65px]"
        />
      </div>
    </div>
  );
}
