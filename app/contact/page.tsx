import React from "react";
import Navbar from "../ui/components/navbar";
import ContactContainer from "../ui/components/contact/ContactContainer";

export default function page() {
  return (
    <div>
      <div className="my-[5%]">
        <p className="text-[32px] md:text-[56px] text-center font-[400] text-[#1B1B1B]">
          Contact Us
        </p>
        <div className="flex justify-center items-center">
          <p className="br-firma font-[400] text-[#5C5C5C] text-center w-[516px]">
            Have any question or feedback, feel free to reach out to us. We are
            always available to help.
          </p>
        </div>
      </div>

      <ContactContainer />
    </div>
  );
}
