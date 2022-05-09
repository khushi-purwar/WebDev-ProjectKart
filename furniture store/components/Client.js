import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "./icons";

const Client = ({ image, name, role, feedback }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative flex">
        <img className="object-contain w-80 h-96" src={image} alt={name} />

        <StarIcon className="absolute flex items-center justify-center w-16 h-16 pt-3 bg-white rounded-full shadow-lg -left-6 top-20" />
      </div>

      <div className="flex flex-col items-center justify-center pt-4 md:ml-20 md:items-start">
        <Image
          src="/logo.svg"
          alt="logo"
          className="w-32 h-32"
          width={133}
          height={37}
          objectFit="contain"
        />
        <h3 className="md:max-w-[405px] max-w-[350px] my-8 text-[#5E7388] italic font-OpenSans font-semibold text-2xl">
          {feedback}
        </h3>
        <h4 className="text-[#152137] font-OpenSans font-medium text-xl">
          {name}
        </h4>
        <p className="text-[#647383] text-sm font-OpenSans">{role}</p>

        <div className="flex mt-10 space-x-4">
          <ArrowLeftIcon className="w-12 h-12 p-4 cursor-pointer rounded-full shadow-xl border-[1px] bg-white border-[#DDEDF4]" />
          <ArrowRightIcon className="w-12 h-12 p-4 rounded-full shadow-xl border-[1px] bg-white border-[#DDEDF4] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Client;
