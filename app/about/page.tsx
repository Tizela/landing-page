import Image from "next/image";

import Navbar from "../ui/components/navbar";
import Footer from "../ui/components/footer";
import Features from "../ui/components/about/Features";
import Header from "../ui/components/about/Header";
import ClientTestimonials from "../ui/components/about/ClientTestimonials";
import ComingSoon from "../ui/components/home/ComingSoon";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />

      <Features />

      <ClientTestimonials />
      <ComingSoon />
    </div>
  );
}
