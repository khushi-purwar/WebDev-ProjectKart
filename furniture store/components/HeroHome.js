import Header from "./Header";
import Image from "next/image";
import { ArrowDownIcon } from "./icons";

const HeroHome = () => {
  return (
    <div id="home" className="relative flex flex-col w-full lg:h-screen">
      <Header />
      <div className="relative flex items-center w-full mt-20 lg:mx-10">
        <div className="absolute z-30 lg:w-32 lg:h-32 top-10 left-10">
          <Image
            src="/DOTS.svg"
            alt="Hero Home"
            layout="fill"
            className="w-full h-full"
          />
        </div>

        <div className="z-20 hidden md:flex items-center justify-center  flex-col  -mr-56 w-[50vw] py-32 bg-white/40 backdrop-blur-3xl">
          <div className="w-9/12">
            <h2
              style={{ lineHeight: "70px" }}
              className="text-6xl font-bold font-Noto text-sapGreen-600"
            >
              We Help You Make Modern Interior
            </h2>
            <p className="mt-10">
              We will help you to make an elegant and luxurious interior
              designed by professional interior designer.
            </p>
          </div>
        </div>
        <div className="relative !w-screen sm:h-[510px]  h-[300px] flex items-center justify-center z-10 md:w-[991px] md:h-[700px]">
          <Image
            layout="fill"
            objectFit="contain"
            className="absolute inset-0 z-10"
            src="https://res.cloudinary.com/didkcszrq/image/upload/v1638275638/Mask_Group_p1hclc.png"
            alt=""
          />
          <h2 className="z-40 flex text-2xl w-[60vw] py-5 px-10 font-bold text-center md:hidden md:absolute bg-white/60 backdrop-blur-3xl text-sapGreen-600">
            We Help You Make Modern Interior
          </h2>
        </div>
        <div className="absolute z-20 items-center justify-center hidden w-32 h-32 md:flex -bottom-4 bg-white/40 backdrop-blur-3xl right-20">
          <ArrowDownIcon className="w-8 h-16 text-white" />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
