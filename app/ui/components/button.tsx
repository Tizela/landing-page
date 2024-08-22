import Link from "next/link";

interface Button {
  text: string;
  link: string;
}
export default function Button({ text, link }: Button) {
  return (
    <button className="bg-[#FFFFFF] text-[#1142A0] rounded-[40px] py-[0.5%] px-[1%]">
      <Link href={link}>{text}</Link>
    </button>
  );
}
