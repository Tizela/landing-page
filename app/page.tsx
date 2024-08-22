import Image from "next/image";
import Hero from "./ui/components/home/Hero";
import Offerings from "./ui/components/home/Offerings";
import ComingSoon from "./ui/components/home/ComingSoon";

import Destinations from "./ui/components/home/Destinations";
import Prompt from "./ui/components/home/Prompt";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Offerings />
      <Destinations />

      <ComingSoon />
      <Prompt />
    </div>
  );
}
