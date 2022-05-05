import React, { useState } from "react";
import styled from "styled-components";
import SHOP_DATA from "../shop.data";
import Product from "./Product";

const ProductsList = () => {
  const [data, setData] = useState(SHOP_DATA);

  const filterItem = (cateItem) => {
    const updatedItems = SHOP_DATA.filter((currElement) => {
      return currElement.category === cateItem;
    });

    if (cateItem) {
      setData(updatedItems);
    } else {
      setData(SHOP_DATA);
    }
  };

  return (
    <Page id="product">
      <Head1>Fresh Products</Head1>
      <Filter>
        <li onClick={() => filterItem("")}>{`All ${data.length}`}</li>
        <li onClick={() => filterItem("veg")}>Vegetables</li>
        <li onClick={() => filterItem("fruit")}>Fruits</li>
      </Filter>
      <Data>
        {data.map((veg) => (
          <Product
            key={veg.id}
            name={veg.name}
            image={veg.image}
            price={veg.price}
            product={veg}
            id={veg.id}
          />
        ))}
      </Data>
    </Page>
  );
};

const Page = styled.div`
  min-height: 100vh;
  background: url("/images/pattern.svg");
  background-repeat: repeat;
`;

const Head1 = styled.div`
  text-align: center;
  padding: 5rem;
  font-size: 9.5rem;
  font-weight: 600;
  line-height: 9.7rem;
  color: #105f36;
  text-shadow: 3px 2px 0.2rem rgba(0, 0, 0, 0.4);
`;

const Filter = styled.ul`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2rem 0;

  & > li {
    list-style: none;
    font-size: 4rem;
    background-color: #105f36;
    padding: 1rem 4rem;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
  }
`;

const Data = styled.div`
  padding: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default ProductsList;
