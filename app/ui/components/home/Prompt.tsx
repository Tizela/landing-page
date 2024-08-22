import Image from "next/image";

export default function Prompt() {
  return (
    <div className="py-[4%] px-[5%] md:flex justify-between items-center">
      <div className="hidden">
        <Image src="/images/why.png" width={500} height={300} alt="why" />
      </div>
      <div className="text-center md:text-left">
        <p className="mt-[10px] md:mt-0 font-[600] text-[18px] md:text-[40px] text-[#272727] md:leading-[33.5px] leading-[24px]">
          Why Use Tizela?
        </p>
        <p className="br-firma text-[#272727] text-[13px] md:text-[16px] font-[300] mt-[15px] w-[100%] md:w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          harum facere quisquam expedita non dolorem obcaecati temporibus totam
          sed? Alias, hic eveniet. Reiciendis ad beatae aspernatur, eos soluta
          minus aperiam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Cumque, quos?Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Corrupti laudantium magnam accusantium, consequuntur doloremque
          maxime!
        </p>
      </div>
      <div className="block md:hidden mt-[15px]">
        <Image src="/images/why.png" width={500} height={300} alt="why" />
      </div>
    </div>
  );
}
