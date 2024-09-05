import Form from "../ui/components/waitlist/Form";
import Slider from "../ui/components/waitlist/Slider";

export default function page() {
  return (
    <div className="">
      <div
        className="md:flex justify-center  
      md:justify-between items-center hidden"
      >
        <div className="md:w-[50%]">
          <Form />
        </div>
        <div className="w-[50%] hidden md:inline">
          <Slider />
        </div>
      </div>

      <div className="flex md:hidden w-full">
        <Form />
      </div>
    </div>
  );
}
