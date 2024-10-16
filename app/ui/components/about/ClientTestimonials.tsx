import React from "react";
import Image from "next/image";

export default function ClientTestimonials() {
  return (
    <div>
      <div className="px-[5%] md:px-[8%] md:flex items-center my-[20px]">
        <img
          src="/images/user.png"
          alt="User"
          className="md:w-[480px] md:h-[460px] rounded-l-[24px] hidden md:inline"
        />

        <div className="bg-[#1142A0] py-[40px] px-[24px] md:p-[64px] gilroy md:w-[650px] hidden md:inline md:rounded-r-[24px] md:h-[460px]">
          <div className="flex">
            <img src="/icons/ratings-star.svg" alt="" />
            <img src="/icons/ratings-star.svg" alt="" />
            <img src="/icons/ratings-star.svg" alt="" />
            <img src="/icons/ratings-star.svg" alt="" />
            <img src="/icons/ratings-star.svg" alt="" />
          </div>
          <p className="font-[500] text-[24px] md:text-[36px] text-white mt-2">
            Join the Tizela Newsletter!{" "}
          </p>
          <p className="text-white text-[16px] font-[500]">
            Get access to the lastests news, updates, features and promos with
            the Tizela newsletter. Register now!
          </p>
          <div className="flex items-center mt-[25px]">
            <div className="bg-white w-[10px] h-[10px] rounded-full"></div>
            <div className="bg-[#FFFFFF66] w-[10px] h-[10px] rounded-full mx-2"></div>
            <div className="bg-[#FFFFFF66] w-[10px] h-[10px] rounded-full"></div>
          </div>
        </div>

        <div className="bg-[#1142A0] py-[40px] px-[24px] md:p-[64px] gilroy md:w-[650px] md:hidden block rounded-t-[24px] md:h-[460px]">
          <div className="flex">
            <img src="/icons/ratings-star.svg" alt="" />
            <img src="/icons/ratings-star.svg" alt="" />
            <img src="/icons/ratings-star.svg" alt="" />
            <img src="/icons/ratings-star.svg" alt="" />
            <img src="/icons/ratings-star.svg" alt="" />
          </div>
          <p className="font-[500] text-[24px] md:text-[36px] text-white mt-2">
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

        <img
          src="/images/user.png"
          alt="User"
          className="md:w-[480px] md:h-[460px] rounded-b-[24px] md:hidden block"
        />
      </div>
    </div>
  );
}
