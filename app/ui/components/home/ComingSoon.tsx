"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ComingSoon() {
  const router = useRouter();
  return (
    <div className="">
      <div className="bg-[#1142A0] text-white md:flex items-center pt-[40px]">
        <div className="">
          <img
            src="/images/coming-soon.png"
            alt=""
            className="hidden md:inline"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="text-center">
            <p className="text-center  font-[400] md:text-[34px] text-[32px] leading-[33.5px]">
              {" "}
              Download our app to enjoy seamless experience
            </p>
            <p className="text-center font-[500] text-[16px] gilroy leading-[24px] my-3 mx-3 md:mx-0">
              {" "}
              Plan, book and manage your trips all in one place
            </p>

            <div className="flex justify-center items-center">
              <Image
                src="/icons/appstorewhite.svg"
                alt="Download our app"
                width={160}
                height={50}
              />
              <Image
                src="/icons/playstorewhite.svg"
                alt="Download our app"
                width={160}
                height={50}
                className="ml-1.5"
              />
            </div>
          </div>
        </div>

        <div className="">
          <img
            src="/images/coming-soon-2.png"
            alt=""
            className="hidden md:inline"
          />
          <img
            src="/images/coming-soon.png"
            alt=""
            className="md:hidden block"
          />
        </div>
      </div>
    </div>
  );
}
