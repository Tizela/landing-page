import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function MoreQuestions() {
  return (
    <div className="px-[32px] more-questions mx-[8%] my-[20px] rounded-[24px] py-[8px]">
      <div className="flex justify-center items-center ">
        <Image
          src="/images/Avatar group.png"
          alt="more questions"
          width={120}
          height={56}
        />
      </div>
      <div className="">
        <p className="br-firma text-center font-[500] text-[20px] text-[#272727]">
          Still have questions?
        </p>
        <p className="br-firma font-[400] text-[16px] text-[#575757] text-center my-[10px]">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <div className="flex justify-center items-center">
          <button className="bg-[#1143A0] text-[#FFFFFF] rounded-[40px] py-[12px] px-[24px] gilroy font-[500] text-[13px] md:text-[15px] my-[10px]">
            <Link href="/contact">Get in touch</Link>
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
