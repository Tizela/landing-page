import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ComingSoon() {
  const router = useRouter();
  return (
    <div className="bg-[#1142A0] mt-[10px] pt-[2%] text-white">
      <div className="md:flex justify-between items-center">
        <img src="/images/coming-soon.png" alt="" className="hidden " />
        <div className="md:ml-[5.5%] mt-[100px]">
          <p className="text-center md:text-left font-[400] md:text-[40px] text-[32px] leading-[33.5px]">
            <span className="md:text-[48px] block my-5">Coming Soon!</span>{" "}
          </p>
          <p className="text-center md:text-left font-[500] text-[16px] gilroy leading-[24px] my-3 mx-3 md:mx-0">
            At Tizela, we simplify travel with seamless bookings for stays, car
            rentals, and boat cruises—all in one place. Tizela is an all-in-one
            travel platform that provides bookings for short-stay
            accommodations, car rentals, and boat cruises. Our goal is to offer
            a seamless and personalized travel experience, all from a single,
            user-friendly app.
          </p>

          <div className="flex justify-center items-center md:justify-start md:items-start">
            <button
              className="bg-[#fff] text-[#1142A0] rounded-[40px] py-[12px] px-[24px] gilroy font-[500] text-[13px] md:text-[16px] w-[200px]"
              onClick={() => router.push("/waitlist")}
            >
              Join Waitlist
            </button>
          </div>
        </div>

        <img
          src="/images/coming-soon-2.png"
          alt=""
          className="hidden md:inline"
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
