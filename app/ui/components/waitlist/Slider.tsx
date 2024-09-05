import Image from "next/image";
export default function Slider() {
  return (
    <div>
      <div className="bg-[#1142A0] h-[100vh] flex justify-center items-center">
        <div className="">
          <p className="text-white text-[16px] gilroy font-[500] text-center">
            Unlock Every Experience{" "}
            <span className="text-[24px] block">
              Stay, Car rental, Boat cruise.
            </span>
          </p>
          <div className="flex justify-center items-center">
            <Image
              src="/images/slider-one.png"
              alt="slider"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
