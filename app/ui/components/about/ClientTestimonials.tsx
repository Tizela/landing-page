import React from "react";
import Image from "next/image";

export default function ClientTestimonials() {
  return (
    <div>
      <div className="px-[8%] flex items-center my-[20px]">
        <img
          src="/images/user.png"
          alt="User"
          className="w-[480px] h-[460px] rounded-l-[24px]"
        />

        <div className="bg-[#1142A0] p-[64px] gilroy w-[650px] rounded-r-[24px] h-[460px]">
          <div className="flex">
            <img src="/icons/ratings-star.svg" alt="" />
            <img src="/icons/ratings-star.svg" alt="" />
            <img src="/icons/ratings-star.svg" alt="" />
            <img src="/icons/ratings-star.svg" alt="" />
            <img src="/icons/ratings-star.svg" alt="" />
          </div>
          <p className="font-[500] text-[36px] text-white mt-2">
            Love the simplicity of the service and the prompt customer support.
            We can’t imagine working without it.
          </p>
          <p className="text-white text-[16px] font-[500]">- Jane Doe</p>
          <div className="flex items-center mt-[25px]">
            <div className="bg-white w-[10px] h-[10px] rounded-full"></div>
            <div className="bg-[#FFFFFF66] w-[10px] h-[10px] rounded-full mx-2"></div>
            <div className="bg-[#FFFFFF66] w-[10px] h-[10px] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
