"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./button";

import { useState } from "react";
import Mobilenav from "./mobilenav";

import { useRouter } from "next/router";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();
  return (
    <>
      {isOpen ? (
        <></>
      ) : (
        <div className="bg-[#1142A0] w-full flex justify-between items-center px-[6%] md:px-[5%] py-[3.5%] md:py-[2%] gilroy">
          <Image src="/icons/logo.svg" alt="logo" width={100} height={100} />
          <div className="text-[16px] font-[500] text-white hidden lg:inline">
            <Link
              className="mx-[6%] hover:underline active:underline"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="mx-[6%] hover:underline active:underline"
              href={"/about"}
            >
              About
            </Link>
            <Link
              className="mx-[6%] hover:underline active:underline"
              href={"/faqs"}
            >
              FAQs
            </Link>
          </div>
          <div className="hidden lg:inline">
            <Button text="Join Waitlist" link="/waitlist" />
          </div>{" "}
          <div className="inline md:hidden">
            <Image
              src="/icons/menu.svg"
              alt="menu"
              width={30}
              height={30}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      )}

      {isOpen && (
        <div className="bg-white h-[100vh] top-[-10px] w-[100%] px-[6%] md:px-[5%] py-[3.5%] md:py-[2%]">
          <div className="flex justify-between items-center ">
            <Image
              src="/icons/logo-blue.svg"
              alt="Logo"
              width={100}
              height={100}
            />
            <Image
              src="/icons/close.svg"
              alt="close"
              width={20}
              height={20}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>

          <div className="bg-white flex justify-center items-center mt-[60px]">
            <div className="text-center gilroy font-[500] text-[16px] text-[#575757]">
              <Link className="block my-3" href={"/"}>
                Home
              </Link>
              <Link className="block my-3" href={"/about"}>
                About
              </Link>
              <Link className="block my-3" href={"/faqs"}>
                FAQs
              </Link>
            </div>
          </div>

          <div className="mt-[50px] flex justify-center items-center">
            <button
              className="bg-[#1142A0] text-[#fff] rounded-[40px] py-[12px] px-[24px] gilroy font-[500] text-[13px] md:text-[16px] w-[200px]"
              onClick={() => router.push("/waitlist")}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </>
  );
}
