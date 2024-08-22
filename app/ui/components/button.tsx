import Link from "next/link";

interface Button {
  text: string;
  link: string;
}
export default function Button({ text, link }: Button) {
  return (
    <button className="bg-[#FFFFFF] text-[#1142A0] rounded-[40px] py-[12px] px-[24px] gilroy font-[500] text-[13px] md:text-[15px]">
      <Link href={link}>{text}</Link>
    </button>
  );
}
