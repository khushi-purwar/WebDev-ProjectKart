import Image from "next/image";

const Footer = () => {
  return (
    <div
      id="contact"
      className="flex flex-col w-full p-5 py-20 scroll-m-20 md:p-20 bg-sapGreen-600"
    >
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto border-b-[1px] pb-20 border-white/10">
        <h3 className="md:w-[56%] text-center md:text-left w-full md:text-5xl text-3xl font-medium text-white font-Montserrat">
          Make your house look amazing with our furniture today!
        </h3>
        <div className="flex items-center mt-5 space-x-3 md:mt-0">
          <button className="px-8 py-2 font-medium bg-gray-100 rounded-full text-sapGreen-600 font-Inter">
            Get Started
          </button>
          <button className="px-8 py-2 font-medium text-white rounded-full bg-sapGreen-100 font-Inter">
            Contact Sales
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between w-full p-10 mt-20 ml-2 md:flex-row">
        <div className="flex flex-col items-start">
          <Image
            src="/logo-white.svg"
            alt="logo"
            className="w-32 h-32"
            width={133}
            height={37}
            objectFit="contain"
          />
          <p className="text-white text-OpenSans max-w-[250px] mt-5">
            Helping you make modern interior.
          </p>
        </div>
        <div className="flex flex-col items-start mt-8 space-y-3 md:mt-0">
          <h4 className="text-lg font-semibold text-white text-OpenSans">
            Entity types
          </h4>
          <p className="text-gray-300 font-Inter">Knowledge base</p>
          <p className="text-gray-300 font-Inter">Security</p>
          <p className="text-gray-300 font-Inter">Privacy Policy</p>
          <p className="text-gray-300 font-Inter">Partners</p>
          <p className="text-gray-300 font-Inter">About us</p>
          <p className="text-gray-300 font-Inter">FAQs</p>
        </div>

        <div className="flex flex-col items-start mt-8 space-y-3 md:mt-0">
          <h4 className="text-lg font-semibold text-white text-OpenSans">
            Services
          </h4>
          <p className="text-gray-300 font-Inter">Contact Us</p>
          <p className="text-gray-300 font-Inter">Press</p>
          <p className="text-gray-300 font-Inter">Payroll</p>
          <p className="text-gray-300 font-Inter">Library</p>
          <p className="text-gray-300 font-Inter">Blog</p>
          <p className="text-gray-300 font-Inter">Help Center</p>
        </div>

        <div className="flex flex-col items-start mt-8 space-y-3 md:mt-0">
          <h4 className="text-lg font-semibold text-white text-OpenSans">
            Resources
          </h4>
          <p className="text-gray-300 font-Inter">Pricing</p>
          <p className="text-gray-300 font-Inter">FAQs</p>
          <p className="text-gray-300 font-Inter">Contact Support</p>
          <p className="text-gray-300 font-Inter">Privacy Policy</p>
          <p className="text-gray-300 font-Inter">Terms</p>
        </div>

        <div className="flex flex-col items-start mt-8 space-y-3 md:mt-0">
          <h4 className="text-lg font-semibold text-white text-OpenSans">
            Support
          </h4>
          <p className="text-gray-300 font-Inter">Contact</p>
          <p className="text-gray-300 font-Inter">Affiliates</p>
          <p className="text-gray-300 font-Inter">Sitemap</p>
          <p className="text-gray-300 font-Inter">Cancellation Policy</p>
          <p className="text-gray-300 font-Inter">Pricing</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
