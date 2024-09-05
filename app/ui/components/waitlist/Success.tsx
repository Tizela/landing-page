import Link from "next/link";
import React from "react";

import Image from "next/image";

export default function Success() {
  return (
    <div className="popup-container">
      <div className="custom-popup">
        <div className="popup-content">
          <div className="gilroy font-[500] text-center text-white p-[3%]">
            <p className="font-[600] text-[20px] text-center mt-4 text-[#fff]">
              Thank you!
            </p>
            <p className="font-[500] text-center text-[16px] text-[#fff] my-4">
              You've successfully joined the waitlist. Follow our social media
              to see more updates on Tizela.
            </p>

            <Link
              href={"/"}
              className="underline text-[text-[14px] text-[#fff] text-[14px] text-center"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
