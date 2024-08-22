import Image from "next/image";
export default function Footer() {
  const data = [
    {
      image: "/icons/Linkedin.svg",
    },
    {
      image: "/icons/Twitter.svg",
    },
    {
      image: "/icons/Github.svg",
    },
  ];
  return (
    <div>
      <div className="mt-[20px] bg-[#000000] py-[2%] px-[5%] flex justify-center items-center">
        <div className="">
          <div className="flex justify-center items-center my-[10px]">
            <Image
              src="/icons/logo.svg"
              alt="footer"
              width={150}
              height={150}
              className="md:hidden"
            />
            <Image
              src="/icons/logo.svg"
              alt="footer"
              width={200}
              height={200}
              className="hidden md:block"
            />
          </div>
          <p className="gilroy font-[500] text-[16px] text-[#ffffff9d] text-center ">
            Hello, we are moduscreate. Our goal is to translate the positive
            effects from revolutionizing how companies.
          </p>

          <button>Join Waitlist</button>

          <div className="flex justify-center items-center">
            {data.map((item) => (
              <div className="flex justify-center items-center my-[10px]">
                <Image
                  src={item.image}
                  alt="footer"
                  width={30}
                  height={30}
                  className="mx-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
