"use client";
import React, { useState } from "react";
import FAQItem from "./FAQItem";

export default function FAQ() {
  const [show, setShow] = useState(false);
  return (
    <div className="py-[1.5%] md:py-[3%] px-[4%] md:px-[8%]">
      {" "}
      <p className="text-[#272727] font-[500] md:text-[40px] text-[24px] bg-[#fff] text-center mt-3">
        Frequently asked questions
      </p>{" "}
      <p className="gilroy font-[500] text-[#575757] text-[16px] text-center">
        Everything you need to know about Tizela.
      </p>
      <div className="mt-[40px] px-[6%] md:px-[9%] h-[70vh]">
        <FAQItem
          answer="Tizela is an all-in-one travel platform that provides bookings for short-stay accommodations, car rentals, and boat cruises. Our goal is to offer a seamless and personalized travel experience, all from a single, user-friendly app."
          question="What services does Tizela offer?"
        />
        <FAQItem
          answer="We carefully vet all our accommodation listings, car rental partners, and boat cruise operators. Each listing and service provider is reviewed and rated by users, ensuring you have access to high-quality options that meet your standards."
          question="How does Tizela ensure the quality of accommodations and services?"
        />
        <FAQItem
          answer="Yes, Tizela allows you to book multiple services in one transaction. Our platform is designed to integrate all your travel needs, making it easy to plan your entire trip in a single, seamless process."
          question="Can I book multiple services (stay, car rental, and boat cruise) in one transaction?"
        />
        <FAQItem
          answer="Cancellation policies vary depending on the service and provider. We recommend checking the specific cancellation terms listed for each booking before completing your reservation. Tizela provides clear guidelines and support to help you navigate any changes to your plans."
          question="What is Tizela’s cancellation policy?"
        />
        <FAQItem
          answer="Currently, Tizela is focused on high-demand destinations in Nigeria. However, we have plans to expand to international markets, and we will be rolling out our services in other countries soon."
          question="Is Tizela available outside Nigeria?"
        />
        <FAQItem
          answer="You can reach our customer support team 24/7 through the app’s help section, via email, or by calling our support hotline. We are here to assist with any questions or issues you may have during your travel experience with Tizela."
          question="How do I contact Tizela’s customer support?"
        />
      </div>
    </div>
  );
}
