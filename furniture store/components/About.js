import AboutCard from "./AboutCard";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col scroll-m-20 justify-between w-full p-10 md:p-20"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold text-sapGreen-600">About Us</h2>
          <p className="mt-2 text-gray-500 font-OpenSans">
            At Furni shop, we take pride in our values <br /> – service,
            integrity, and excellence.
          </p>
        </div>

        <button className="hidden px-6 py-3 text-gray-500 bg-gray-200 rounded-md md:flex button-boxshadow">
          Learn more
        </button>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col w-5/6 mt-10 space-y-10 md:w-1/2">
          <div className="flex flex-col space-y-10 md:space-x-2 md:flex-row md:space-y-0 ">
            <AboutCard
              number={1}
              title="Who We Are?"
              desc="We make furniture suitable for the humans of 2021"
            />

            <AboutCard
              number={2}
              title="What Do We Do?"
              desc="We give you the best, modern furniture at the best prices."
            />
          </div>

          <div className="flex flex-col space-y-10 md:space-x-2 md:flex-row md:space-y-0">
            <AboutCard
              number={3}
              title="How Do We Help"
              desc="We are going to make the world a better place."
            />

            <AboutCard
              number={4}
              title="Create success story"
              desc="Big companies use our products."
            />
          </div>
        </div>
        <div className="hidden md:flex">
          <div className="flex flex-col mt-10">
            <div className="mt-5">
              <Image
                width={250}
                height={150}
                src="https://res.cloudinary.com/didkcszrq/image/upload/v1638431334/Rectangle_4078_bborbt.png"
                alt=""
              />
            </div>

            <div className="mt-5">
              <Image
                width={250}
                height={270}
                src="https://res.cloudinary.com/didkcszrq/image/upload/v1638431334/Rectangle_4076_fww2gh.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col ml-5">
            <div className="mt-5">
              <Image
                width={250}
                height={270}
                src="https://res.cloudinary.com/didkcszrq/image/upload/v1638431334/Rectangle_4075_vuvtdm.png"
                alt=""
              />
            </div>
            <div className="mt-5">
              <Image
                width={250}
                height={150}
                src="https://res.cloudinary.com/didkcszrq/image/upload/v1638431334/Rectangle_4077_pgs58b.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
