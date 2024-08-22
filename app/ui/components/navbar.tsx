import Image from "next/image";
import Link from "next/link";
import Button from "./button";
export default function Navbar() {
  return (
    <div className="bg-[#1142A0] w-full flex justify-between items-center p-[2%] gilroy">
      <Image src="/logo.svg" alt="logo" width={100} height={100} />

      <div className="text-[16px] font-[500] text-white">
        <Link className="mx-[2.5%] hover:underline active:underline" href={"/"}>
          Home
        </Link>
        <Link
          className="mx-[2.5%] hover:underline active:underline"
          href={"/about"}
        >
          About
        </Link>
        <Link
          className="mx-[2.5%] hover:underline active:underline"
          href={"/contact"}
        >
          Contact
        </Link>
      </div>

      <Button text="Join Waitlist" link="/waitlist" />
    </div>
  );
}
