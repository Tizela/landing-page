import React from "react";
import ContactForm from "./ContactForm";
import ContactBoxes from "./ContactBoxes";

export default function ContactContainer() {
  return (
    <div className="md:grid grid-cols-2 mx-[5%]">
      <ContactBoxes />
      <ContactForm />
    </div>
  );
}
