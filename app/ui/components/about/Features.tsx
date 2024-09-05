import React from "react";
import Image from "next/image";

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Stay",
      description:
        "Choose from a range of short-stay apartments, from cozy studios to luxury villas. Enjoy verified listings, flexible booking options, and competitive rates for a perfect stay",
      border: "border-l-[4px] border-l-[#1143A0]",
    },
    {
      id: 1,
      title: "Car rentals",
      description:
        "Rent the perfect car for your journey, whether it's a compact city car or a luxury vehicle. Enjoy transparent pricing, insurance options, and convenient pick-up locations.",
      border: "border-l-[4px] border-l-[#F2F4F7]",
    },
    {
      id: 1,
      title: "Boat cruises",
      description:
        "Set sail on a memorable adventure with tailored cruises. From romantic sunset trips to private yacht experiences, we offer options for every occasion.",
      border: "border-l-[4px] border-l-[#F2F4F7]",
    },
  ];
  return (
    <div>
      <div className=" mt-[40px] flex justify-center items-center">
        <div className="text-center">
          <p className="text-[#1143A0] text-[16px] leading-[24px] gilroy font-[600]">
            Features
          </p>
          <p className="text-[#272727] text-[40px] my-1.5 leading-[44px]">
            Unlock every experience
          </p>
          <p className="font-[500] gilroy text-[#575757] text-[16px] leading-[24px] w-[694px] text-center">
            At Tizela, we simplify travel with seamless bookings for stays, car
            rentals, and boat cruises—all in one place.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center px-[5%]">
        <div className="flex flex-col my-6 px-[4%]">
          {features.map((feature) => (
            <div className={`${feature.border} w-[600px] my-1`}>
              <div
                key={feature.id}
                className="px-[6%] md:px-[5%] py-[2.5%] md:py-[1.5%] "
              >
                <div className="">
                  <p className="text-[#272727] text-[20px] leading-[24px] font-[600]">
                    {feature.title}
                  </p>
                  <p className="text-[#575757] text-[16px] leading-[24px] font-[500] gilroy">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/images/hero-stay.png"
            alt="Features Image"
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
