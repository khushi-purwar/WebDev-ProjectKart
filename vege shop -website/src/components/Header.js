import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Header = ({ currentUser }) => {
  const [offesetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Head>
      <Hero>
        <HeroText>
          <h1>
            Fresh,
            <br /> Healthy & <br />
            Local.
          </h1>
          <span>
            Bringing the best quality food to your locality since 1980.
          </span>
        </HeroText>
        <HeroImage>
          <img
            src="/images/header/mint-leaves-1.png"
            alt=""
            style={{
              transform: `translateY(${offesetY * 0.1}px)`,
            }}
            className="first"
          />
          <img
            src="/images/header/TV-Vegetables-Slider-1.png"
            alt=""
            className="main-image"
          />
          <h1
            className="text"
            style={{ transform: `translateY(${offesetY * 0.4}px)` }}
          >
            Vegetables
          </h1>
          <img
            src="/images/header/mint-leaves-2.png"
            className="last"
            alt=""
            style={{ transform: `translateY(-${offesetY * 0.4}px)` }}
          />
        </HeroImage>
      </Hero>
      <Rotor></Rotor>
      <Back></Back>
    </Head>
  );
};

const Head = styled.header`
  height: 100vh;
  background-color: #1ca854;
  position: relative;
`;

const Hero = styled.div`
  height: 100vh;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 7rem;
  padding-top: 10vh;

  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;
const HeroText = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  & > h1 {
    font-size: 12.5rem;
    font-weight: 600;
    line-height: 14.7rem;
    color: #fff;
  }

  & > span {
    font-size: 2rem;
    font-weight: 300;
    line-height: 5rem;
    color: #fff;
  }
  @media (max-width: 768px) {
    width: 100%;
  } ;
`;
const HeroImage = styled.div`
  height: 80vh;
  width: 60%;
  position: relative;
  /* background-color: blanchedalmond; */
  display: flex;

  & > img {
    width: 20rem;
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & > h1 {
    font-size: 6rem;
  }

  .text {
    color: white;
    position: absolute;
    z-index: 0;
    right: 0;
  }

  .main-image {
    object-fit: contain;
    width: 70rem;
    z-index: 10;
  }

  .first {
    top: 10%;
    left: 70%;
    z-index: 20;
  }

  .last {
    top: 70%;
    left: 20%;
    z-index: 20;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    width: 100%;
    .main-image {
      width: 50rem;
    }
  } ;
`;

const Back = styled.div`
  background-color: #105f36;
  height: 20vw;
  width: 60%;
  border-top-left-radius: 40rem;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Rotor = styled.div``;

export default Header;
