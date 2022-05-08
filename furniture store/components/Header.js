import Image from "next/image";
import { useEffect, useState } from "react";
import { MoreIcon, SearchIcon } from "./icons";

const Header = () => {
  const [animateHeader, setAnimatedHeader] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 50) {
        setAnimatedHeader(true);
      } else setAnimatedHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const items = [
    {
      name: "Home",
      href: "",
    },
    {
      name: "About",
      href: "about",
    },
    {
      name: "Products",
      href: "products",
    },
    {
      name: "Contact",
      href: "contact",
    },
  ];

  return (
    <nav
      className={`fixed ${
        animateHeader
          ? "bg-white/30 backdrop-blur-xl shadow-xl duration-100"
          : ""
      } top-0 z-50 flex items-center justify-between w-screen px-10 lg:px-32 py-5`}
    >
      <Image
        src="/logo.svg"
        alt="logo"
        className="w-32 h-32"
        width={133}
        height={37}
        objectFit="contain"
      />
      <div className="hidden w-3/5 lg:flex justify-evenly">
        {items.map((item, i) => (
          <a
            key={i}
            href={`#${item.href}`}
            className="text-lg font-medium cursor-pointer hover:underline font-Montserrat"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex">
        <SearchIcon className="hidden w-5 h-5 mr-4 lg:flex" />
        <MoreIcon
          onClick={handleShow}
          className="flex w-5 h-5 ml-4 lg:hidden"
        />
      </div>
      {show && (
        <div className="absolute z-50 p-10 bg-white rounded-lg shadow-xl top-16 right-5">
          <div className="flex flex-col items-center justify-center w-full">
            {items.map((item, i) => (
              <a
                onClick={handleShow}
                key={i}
                href={`#${item.href}`}
                className="text-lg font-medium cursor-pointer hover:underline font-Montserrat"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
