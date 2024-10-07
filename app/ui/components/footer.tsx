import Image from "next/image";
import Link from "next/link";
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
      <div className="mt-[20px] bg-[#000000] py-[2%] px-[5%]">
        <div className="flex justify-between items-center mb-[25px]">
          <div className="">
            <div className=" my-[10px]">
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
            <p className="gilroy font-[500] text-[12px] text-[#ffffff9d] w-[321px]">
              Hello, we are moduscreate. Our goal is to translate the positive
              effects from revolutionizing how companies.
            </p>
            <div className="flex items-center mt-3">
              <Image
                src="/icons/playstore.svg"
                alt="Google Playstore"
                width={162}
                height={50}
              />
              <Image
                src="/icons/appstore.svg"
                alt="App Store"
                width={162}
                height={50}
                className="ml-3"
              />
            </div>
          </div>

          <div className="">
            <div className="gilroy text-[#ffffff9d] text-[14px] font-[500]">
              <Link className="mx-3" href="/about">
                About Us
              </Link>
              <Link className="mx-3" href="/contact">
                Contact Us
              </Link>
              <Link className="mx-3" href="/host">
                Become a host
              </Link>
            </div>
            <div className="flex justify-end items-center mt-[5px]">
              {data.map((item) => (
                <div className=" my-[10px]">
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

        <hr className="border-[#ffffff9d]" />
        <div className="text-[#ffffff9d] gilroy flex justify-between items-center my-4">
          <p className="font-[500] text-[14px]">
            © 2024 Tizela. All rights reserved.{" "}
          </p>

          <div className="font-[500] text-[14px]">
            <span className="mx-3">Terms</span>
            <span className="mx-3">Privacy</span>
            <span className="mx-3">Cookies</span>
          </div>
        </div>
      </div>
    </div>
  );
}
