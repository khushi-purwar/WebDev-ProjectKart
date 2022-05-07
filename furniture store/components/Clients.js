import { DocIcon } from "./icons";
import Image from "next/image";
import Client from "./Client";

const Clients = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden md:mx-auto w-screen md:w-[95vw] relative my-10 p-10 bg-gray-200 rounded-lg">
      <div className="flex w-full">
        <div className="absolute hidden -top-32 -left-32 w-80 h-80 md:inline-flex">
          <Image src="/circle-pattern.svg" layout="fill" alt="circle pattern" />
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-10">
          <h2 className="font-semibold text-5xl max-w-[450px]  text-center text-sapGreen-600">
            What our happy client say
          </h2>
          <p className="text-lg font-OpenSans text-[#3A4F65] mt-4 max-w-[450px]">
            Furniture is a very important part of a home and furni shop is the
            best place to find it.
          </p>
        </div>
        <DocIcon className="absolute z-20 flex items-center justify-center w-16 h-16 pt-3 rounded-full shadow-lg md:top-20 md:right-40 right-5 top-5" />
      </div>

      <div className="mt-20">
        <Client
          image="https://res.cloudinary.com/didkcszrq/image/upload/v1638605651/Client_ey2glu.png"
          name="Larry Diamond"
          feedback="Furniture is a very important part of a home and furni shop is the best place to find it."
          role="Chief Executive Officer"
        />
      </div>
    </div>
  );
};

export default Clients;
