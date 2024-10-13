"use client";
import React, { useState } from "react";

type User = {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  message: string;
};

const inputStyles = `border-[1px] border-[#E5E7EB] rounded-[2px] py-[13px] px-[27px] w-[280px] my-[8px] text-[14px] text-[#878787] outline-[#324D96] bg-white`;

export default function ContactForm() {
  const [user, setUser] = useState<User>({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" br-firma h-full ml-[0.5%] mt-4 md:mt-0 mx-2 md:mx-0"
    >
      <div className="md:grid grid-cols-2 gap-5">
        <div className="">
          <label htmlFor="name" className="block">
            First Name
          </label>
          <input
            type="text"
            placeholder="John"
            required={true}
            value={user.firstname}
            onChange={(e) => handleChange(e)}
            className={inputStyles}
          />
        </div>

        <div className="">
          <label htmlFor="name" className="block">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Doe"
            required={true}
            value={user.lastname}
            onChange={(e) => handleChange(e)}
            className={inputStyles}
          />
        </div>

        <div className="">
          <label htmlFor="name" className="block">
            Email
          </label>
          <input
            type="email"
            placeholder="qgS0i@example.com"
            required={true}
            value={user.email}
            onChange={(e) => handleChange(e)}
            className={inputStyles}
          />
        </div>

        <div className="">
          <label htmlFor="name" className="block">
            Phone
          </label>
          <input
            type="text"
            placeholder="08123456789"
            required={true}
            value={user.phone}
            onChange={(e) => handleChange(e)}
            className={inputStyles}
          />
        </div>

        <div className="">
          <label htmlFor="name" className="block">
            Message
          </label>
          <textarea
            placeholder="Enter message"
            required={true}
            value={user.message}
            onChange={(e) => handleChange(e)}
            className="w-[96%] md:w-[580px] h-[200px] border-[1px] border-[#E5E7EB] rounded-[2px] py-[13px] px-[27px] text-[14px] text-[#878787] outline-[#324D96] bg-white resize-none my-[8px]"
          />
        </div>
      </div>

      <button
        className="bg-[#1143A0] text-[#FFFFFF] rounded-[40px] py-[12px] px-[24px] gilroy font-[500] text-[13px] md:text-[15px] my-[10px]"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
}
