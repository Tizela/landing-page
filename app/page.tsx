import Image from "next/image";
import Hero from "./ui/components/home/Hero";
import Offerings from "./ui/components/home/Offerings";

import Destinations from "./ui/components/home/Destinations";

import Navbar from "./ui/components/navbar";
import StaysContainer from "./ui/components/home/stays/StaysContainer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Offerings />
      <Destinations />
      <StaysContainer />
    </div>
  );
}
