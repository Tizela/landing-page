import React from "react";
import Image from "next/image";
import HostHeader from "../ui/components/host/HostHeader";
import WhyTizela from "../ui/components/host/WhyTizela";
import FAQ from "../ui/components/about/FAQ";

export default function page() {
  return (
    <div>
      <div className="">
        <HostHeader />

        <WhyTizela />
        <FAQ />
      </div>
    </div>
  );
}
