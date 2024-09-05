"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import Success from "./Success";

export default function Form() {
  const [email, setEmail] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const nameRef = useRef<string>();
  const emailRef = useRef<string>();
  const phoneRef = useRef<string>();

  const [show, setShow] = useState(false);

  const router = useRouter();
  const inputBoxes = `border-[1px] border-[#C4C4C4CC] rounded-[10px] p-[16px] md:p-[12px] w-[100%] md:w-[75%] my-[10px] text-[14px] text-[#878787] outline-[#324D96]`;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://tizelaapp-latest.onrender.com/waitlist/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ name: fullname, email: email, phone: phone }),
        }
      );
      const data = await response.json();
      console.log(data);
      setShow(!show);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="md:flex justify-center items-center">
        {" "}
        <div
          className="hidden md:block gilroy font-[500] md:px-[15%] "
          onClick={() => router.back()}
        >
          <div className="flex items-center mb-[10px]">
            <Image
              src="/icons/chevron_down.svg"
              alt="Back"
              width={10}
              height={10}
            />

            <p className="ml-4">Back</p>
          </div>
          <h1 className="text-[26px] gilroy font-[600] text-[#0F172A] mt-[45px] md:mt-0">
            Join the Waitlist
          </h1>
          <p className="gilroy font-[500] text-[14px] text-[#475569] my-3 w-[400px]">
            Enter your details to join the waitlist for Tizela
          </p>

          <input
            type="text"
            placeholder="Fullname"
            name="name"
            ref={nameRef}
            onChange={(e) => setFullname(e.target.value)}
            className={inputBoxes}
          />

          <input
            type="email"
            placeholder="Email address"
            name="email"
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            className={inputBoxes}
          />

          <input
            type="number"
            placeholder="Phone Number"
            name="number"
            ref={phoneRef}
            onChange={(e) => setPhone(e.target.value)}
            className={inputBoxes}
          />

          <div className="">
            <button
              className="my-4 bg-[#1142A0] text-[#fff] rounded-[40px] py-[16px] md:py-[12px] px-[24px] gilroy font-[500] text-[13px] md:text-[16px] w-[100%] md:w-[75%] block shadow"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="block md:hidden p-[5%]">
          <div
            className="my-[20px] md:hidden flex items-center gilroy font-[500]"
            onClick={() => router.back()}
          >
            <Image
              src="/icons/chevron_down.svg"
              alt="Back"
              width={15}
              height={15}
            />

            <p className=" text-[17px] font-[600] ml-3">Back</p>
          </div>
          <h1 className="text-[26px] gilroy font-[600] text-[#0F172A] mt-[50px] md:mt-0">
            Join the Waitlist
          </h1>
          <p className="gilroy font-[500] text-[14px] text-[#475569] my-3 md:w-[400px]">
            Enter your details to join the waitlist for Tizela
          </p>
          <div className="gilroy font-[500]">
            <input
              type="text"
              placeholder="Fullname"
              name="name"
              ref={nameRef}
              onChange={(e) => setFullname(e.target.value)}
              className={inputBoxes}
            />

            <input
              type="email"
              placeholder="Email address"
              name="email"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
              className={inputBoxes}
            />

            <input
              type="number"
              placeholder="Phone Number"
              name="number"
              ref={phoneRef}
              onChange={(e) => setPhone(e.target.value)}
              className={inputBoxes}
            />

            <div className="flex justify-center items-center">
              <button
                className="my-4 bg-[#1142A0] text-[#fff] rounded-[40px] py-[16px] md:py-[12px] px-[24px] gilroy font-[500] text-[13px] md:text-[16px] w-[100%] md:w-[75%] block shadow"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>{" "}
        </div>
      </div>

      {show && (
        <>
          <Success />
        </>
      )}
    </>
  );
}
