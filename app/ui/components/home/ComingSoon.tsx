import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="bg-[#1142A0] mt-[10px] pt-[2%] px-[5%] text-white">
      <div className="md:flex justify-between items-center">
        <Image
          src="/images/coming-soon.png"
          alt="coming soon"
          width={500}
          height={500}
          className="hidden md:block"
        />
        <div className="mt-[100px]">
          <p className="text-center font-[400] md:text-[40px] text-[24px] leading-[33.5px]">
            Tizela is coming Soon! Unlock every experience.
          </p>
          <p className="text-center font-[500] text-[16px] gilroy leading-[24px] my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur maiores iusto minima ipsam aut deleniti praesentium
            illum impedit corrupti fugit.
          </p>

          <div className="flex justify-center items-center">
            <button className="bg-[#fff] text-[#1142A0] rounded-[40px] py-[12px] px-[24px] gilroy font-[500] text-[13px] md:text-[16px] w-[200px]">
              Join Waitlist
            </button>
          </div>
        </div>
        <Image
          src="/images/coming-soon.png"
          alt="coming soon"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
