import React from "react";
import Image from "next/image";

export default function ContactBoxes() {
  return (
    <div>
      <div className="bg-[#1142A0] text-white pl-[7%] py-[3.5%] mr-[0.5%] w-[98%] md:w-[398px] h-full">
        <p className="font-[400] text-[20px] md:text-[26px]">
          Contact Information
        </p>
        <span className="gilroy font-[500] text-[#E5E7EB] text-[16px] w-[207px] md:w-[315px]">
          Fill up the form and we’ll get back to you in few hours.
        </span>

        <div className="my-[4.5%] gilroy text-[18px] text-[#E5E7EB] font-[500]">
          <div className="flex items-center my-5">
            <Image src="/icons/Call.svg" width={20} height={20} alt="Call" />
            <span className="ml-3.5">+234 803 456 7890</span>
          </div>

          <div className="flex items-center my-5">
            <Image
              src="/icons/Message.svg"
              width={20}
              height={20}
              alt="Email"
            />
            <span className="ml-3.5">YjX5t@example.com</span>
          </div>

          <div className="flex items-center my-5">
            <Image
              src="/icons/contact-location.svg"
              width={20}
              height={20}
              alt="Location"
            />
            <span className="ml-3.5">123 Street, New York, USA</span>
          </div>
        </div>

        <div className="bf-firma font-[500] flex items-center mt-[95px]">
          <Image
            src="/icons/contact-social-2.svg"
            width={20}
            height={20}
            alt="Location"
            className="mr-3"
          />
          <Image
            src="/icons/contact-social-1.svg"
            width={20}
            height={20}
            alt="Location"
            className="mr-3"
          />

          <Image
            src="/icons/contact-social-3.svg"
            width={20}
            height={20}
            alt="Location"
            className="mr-3"
          />
        </div>
      </div>
    </div>
  );
}
