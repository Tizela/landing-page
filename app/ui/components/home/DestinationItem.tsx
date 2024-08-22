interface DestinationItemProps {
  image: string;
  title: string;
  description: string;
}

import Image from "next/image";

export default function DestinationItem({
  image,
  title,
  description,
}: DestinationItemProps) {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="border-transparent rounded-[13.65px]"
      />

      <p className="gilroy font-[600] text-[16px]  text-[#272727] mt-[7px]">
        {title}
      </p>
      <span className="gilroy font-[500] text-[12px]  text-[#575757]">
        {description}
      </span>
    </div>
  );
}
