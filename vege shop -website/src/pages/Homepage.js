import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Quality>
        <h1>
          High Quality hand picked <br /> products from local <br /> farmers.
        </h1>
        <img src="/images/badge.svg" alt="" />
      </Quality>
      <ProductsList />
      <Foot>
        <div>
          <h1>
            Products that <br />
            keeps your family
            <br /> healthy
          </h1>
        </div>
      </Foot>
    </div>
  );
};

const Quality = styled.section`
  height: 100vh;
  background-color: #2d3531;
  display: flex;
  padding: 0 8rem;
  position: relative;

  & > h1 {
    font-size: 10.5rem;
    font-weight: 400;
    line-height: 13.7rem;
    color: #1ca854;
    position: absolute;
    top: 20%;
  }

  & > img {
    object-fit: contain;
    height: 30rem;
    position: absolute;
    bottom: 20%;
    right: 10%;
  }
`;

const Foot = styled.footer`
  height: 100vh;
  background: url("/images/footer.jpg");
  background-position: center;
  background-size: cover;

  & > div {
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    & > h1 {
      padding: 5rem;
      font-size: 10.5rem;
      font-weight: 600;
      line-height: 15.7rem;
      color: #1ca854;
    }
  }
`;

export default Homepage;
