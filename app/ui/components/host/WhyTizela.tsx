import Image from "next/image";
import React from "react";

export default function WhyTizela() {
  return (
    <div className="md:flex justify-between items-center my-5 mx-[5%] py-[4%]">
      <div className="">
        <p className="text-center md:text-left font-[400] text-[40px] text-[#292929]">
          Why Tizela?
        </p>
        <p className="gilroy font-[500] text-[16px] text-[#575757] md:w-[508px] text-center md:text-left my-3">
          Tizela is your go-to platform for all travel needs, combining
          accommodations, car rentals, and boat cruises in one place. We offer
          personalized recommendations, a user-friendly experience, and verified
          listings to ensure you get the best options. With flexible booking,
          24/7 customer support, and a seamless process, Tizela makes planning
          your trips easy and enjoyable.
        </p>
      </div>

      <div className="">
        <Image
          src="/images/host-people.png"
          width={600}
          height={500}
          alt="why"
        />
      </div>
    </div>
  );
}
