import Image from "next/image";
import DestinationItem from "./DestinationItem";

export default function Destinations() {
  const data = [
    {
      image: "/images/destination-1.png",
      title: "Victoria Island",
      description: "Lagos, Nigeria.",
    },
    {
      image: "/images/destination-2.png",
      title: "Lekki",
      description: "Lagos, Nigeria.",
    },
    {
      image: "/images/destination-3.png",
      title: "Mainland",
      description: "Lagos, Nigeria.",
    },
    {
      image: "/images/destination-4.png",
      title: "Ikeja",
      description: "Lagos, Nigeria.",
    },
  ];

  return (
    <div className="mb-[1.5%] mx-[5%]">
      <p className="gilroy md:br-firma md:font-[700] font-[600] text-[#272727] md:text-[18px] text-[16px] my-3">
        Popular Destinations
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
        {data.map((item) => (
          <DestinationItem
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
      <br />
    </div>
  );
}
