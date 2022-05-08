import Image from "next/image";

const Deal = ({ title, icon, description }) => {
  return (
    <div className="flex items-start my-8 md:space-y-4 md:flex-col md:my-0">
      <Image src={icon} width={32} height={35} alt="deal" />
      <div className="flex flex-col ml-2 -mt-2 md:-mt-0 md:ml-0">
        <h4 className="text-xl font-bold text-gray-700 font-OpenSans">
          {title}
        </h4>
        <p className="text-gray-700 font-OpenSans max-w-[200px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Deal;
