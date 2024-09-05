import Image from "next/image";

export default function Prompt() {
  return (
    <div className="py-[4%] px-[5%] md:flex justify-between items-center">
      <div className="hidden md:block">
        <Image src="/images/why.png" width={500} height={300} alt="why" />
      </div>
      <div className="text-center md:text-left">
        <p className="mt-[10px] md:mt-0 font-[600] text-[18px] md:text-[40px] text-[#272727] md:leading-[33.5px] leading-[24px]">
          Why Use Tizela?
        </p>
        <p className="br-firma text-[#272727] text-[13px] md:text-[16px] font-[300] mt-[15px] w-[100%] md:w-[500px]">
          Tizela is your go-to platform for all travel needs, combining
          accommodations, car rentals, and boat cruises in one place. We offer
          personalized recommendations, a user-friendly experience, and verified
          listings to ensure you get the best options. With flexible booking,
          24/7 customer support, and a seamless process, Tizela makes planning
          your trips easy and enjoyable.
        </p>
      </div>
      <div className="block md:hidden mt-[15px]">
        <Image src="/images/why.png" width={500} height={300} alt="why" />
      </div>
    </div>
  );
}
