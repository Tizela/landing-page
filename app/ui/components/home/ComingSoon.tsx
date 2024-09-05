import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="bg-[#1142A0] mt-[10px] pt-[2%] text-white">
      <div className="md:flex justify-between items-center">
        <Image
          src="/images/coming-soon.png"
          alt="coming soon"
          width={520}
          height={520}
          className="hidden md:block md:mr-[1.5%]"
        />
        <div className="md:ml-[5.5%] mt-[100px]">
          <p className="text-center font-[400] md:text-[40px] text-[24px] leading-[33.5px]">
            Coming Soon! Unlock every experience
          </p>
          <p className="text-center font-[500] text-[16px] gilroy leading-[24px] my-3">
            At Tizela, we simplify travel with seamless bookings for stays, car
            rentals, and boat cruises—all in one place.
          </p>

          <div className="flex justify-center items-center">
            <button className="bg-[#fff] text-[#1142A0] rounded-[40px] py-[12px] px-[24px] gilroy font-[500] text-[13px] md:text-[16px] w-[200px]">
              Join Waitlist
            </button>
          </div>
        </div>
        <Image
          src="/images/coming-soon-2.png"
          alt="coming soon"
          width={800}
          height={800}
          className="mt-[19px] hidden md:inline"
        />
        <Image
          src="/images/coming-soon.png"
          alt="coming soon"
          width={520}
          height={520}
          className="block md:hidden md:mr-[1.5%]"
        />
      </div>
    </div>
  );
}
