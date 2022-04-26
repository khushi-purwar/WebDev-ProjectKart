import React, { useState } from "react";
import ByNumbers from "../Components/Others/ByNumbers";
import Working from "../Components/Others/Working";
import Footer from "../Components/Others/Footer";
import LoginModal from "../Components/Others/LoginModal";

export default function Interface() {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <section>
        <div className="w-full relative pb-10 px-6 xl:px-0">
          <nav className="lg:hidden relative z-40">
            <div className="flex py-6 justify-between items-center px-4">
              <div className="flex items-center">
                <div className="xl:hidden">
                  <div
                    id="close"
                    className={` ${menu ? "" : "hidden"} close-m-menu`}
                    onClick={() => setMenu(!menu)}
                  >
                    <img
                      src="https://aaronsylvan.com/wp-content/uploads/2019/05/Photo-of-Graduate-alum-alumna-alumnae-alumnus-alumni-768x496.jpg"
                      alt="cross"
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <nav
            role="navigation"
            aria-label="Main"
            tabIndex="0"
            style={{ padding: "4rem", paddingBottom: "2rem" }}
            className="hidden relative z-10 w-full lg:flex justify-between items-center p-20"
          >
            <div className="w-1/6">
              <a
                tabIndex="0"
                aria-label="we care company logo"
                href="javascript:void(0)"
              >
                <div style={{ display: "flex" }}>
                  <svg
                    style={{ marginRight: "16px", marginTop: "11px" }}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6 mr-2 color"
                  >
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                  <p style={{ fontSize: "25px", fontWeight: "600" }}>
                    Alumni Connect
                  </p>
                </div>
              </a>
            </div>
            <div className="w-5/6">
              <div className="flex items-center justify-end">
                <ul className="text-gray-800 lg:space-x-8 flex items-center leading-none">
                  <li className="ml-4 hover:text-indigo-500 focus:text-indigo-500">
                    <a
                      className="focus:text-indigo-500 text-lg"
                      href="javascript:void(0)"
                    >
                      <LoginModal />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div
            style={{ width: "1600px", paddingTop: "4rem", boxShadow: "0 0 0" }}
            className="pt-32 lg:flex items-center relative z-10 container mx-auto"
          >
            <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
              <img
                style={{
                  width: "600px",
                  marginBottom: "91px",
                  boxShadow: "0 7px 7px 10px #e6e6e6",
                  borderRadius: "20px",
                }}
                tabIndex="0"
                role="img"
                aria-label="people smiling"
                className="mx-auto"
                src="https://aaronsylvan.com/wp-content/uploads/2019/05/Photo-of-Graduate-alum-alumna-alumnae-alumnus-alumni-768x496.jpg"
                alt="people smiling"
              />
            </div>
            <div role="contentinfo" className="w-full lg:w-1/2 h-full">
              <p
                style={{ color: "#40A9FF" }}
                tabIndex="0"
                className="text-indigo-700 uppercase text-2xl mb-4"
              >
                Let's Connect
              </p>
              <h1
                style={{ color: "#F96332" }}
                tabIndex="0"
                className="text-indigo-700 text-4xl lg:text-6xl font-black mb-8"
              >
                When it's shared , Success always grows
              </h1>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
            /* Top menu */
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            @keyframes slideDown {
                0% {
                    top: -50%;
                }
                100% {
                    top: 0;
                }
            }
            * {
                outline: none !important;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-tap-highlight-color: transparent;
            }`}
      </style>
      <ByNumbers />
      <br />
      <Working />
      <br />

      <Footer />
    </div>
  );
}
