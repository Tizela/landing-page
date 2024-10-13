import Image from "next/image";
import React, { useState } from "react";

interface Props {
  answer: string;
  question: string;
}

export default function FAQItem({ answer, question }: Props) {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState("/icons/minus-plus.svg");
  const handleShow = () => {
    if (show) {
      setShow(false);
      setIcon("/icons/minus-plus.svg");
    } else {
      setShow(true);
      setIcon("/icons/minus-circle.svg");
    }
  };

  return (
    <div className="">
      <div className="gilroy">
        <div className="flex justify-between items-center">
          <p className="font-[500] md:font-[600] text-[16px] md:text-[18px] text-[#272727]">
            {question}
          </p>
          <Image
            src={icon}
            alt=""
            width={20}
            height={20}
            onClick={handleShow}
          />
        </div>

        {show && (
          <div className="w-[95%]">
            <p className="font-[500] text-[#575757] text-[16px] my-3">
              {answer}
            </p>
          </div>
        )}
      </div>
      <hr className="border-[#E4E7EC] my-4" />
    </div>
  );
}
