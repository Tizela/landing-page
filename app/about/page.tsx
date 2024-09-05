import Image from "next/image";

import Navbar from "../ui/components/navbar";
import Footer from "../ui/components/footer";
import Features from "../ui/components/about/Features";
import Header from "../ui/components/about/Header";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Features />
      <Footer />
    </div>
  );
}
