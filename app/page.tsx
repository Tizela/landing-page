import Image from "next/image";
import Hero from "./ui/components/home/Hero";
import Offerings from "./ui/components/home/Offerings";
import ComingSoon from "./ui/components/home/ComingSoon";

import Destinations from "./ui/components/home/Destinations";
import Prompt from "./ui/components/home/Prompt";

import Navbar from "./ui/components/navbar";
import Footer from "./ui/components/footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Offerings />
      <Destinations />

      <ComingSoon />
      <Prompt />
      <Footer />
    </div>
  );
}
