import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../context/Cart/CartContext";
import { Link } from 'react-router-dom'

const Product = ({ id, name, image, price, product }) => {

  const { addToCart } = useContext(CartContext)

  return (
    <Prod>
      <h1>{name}</h1>
      <Link to={`/product/${id}`}>
        <img src={image} alt="" />
      </Link>
      <span>
        {`₹${price}`}
        <button onClick={() => addToCart(product)}>Add to Basket</button>
      </span>
    </Prod>
  );
};

const Prod = styled.div`
  position: relative;
  height: 40rem;
  width: 40rem;
  background-color: #105f36;
  margin: 8rem;
  border-top-left-radius: 20rem;
  border-top-right-radius: 20rem;

  & > h1 {
    position: absolute;
    bottom: 20%;
    left: 0;
    color: #fff;
    transform: rotate(-90deg);
    z-index: 20;
  }

  & > a {
    & > img {
      position: absolute;
      height: 30rem;
      bottom: -20%;
      right: -20%;
      z-index: 10;
    }
  }

  & > span {
    position: absolute;
    top: 20%;
    color: #fff;
    font-size: 8rem;
    opacity: 0;
    transform: translateX(20rem);
    transition: all 1s ease;
    z-index: 0;
    display: flex;
    flex-direction: column-reverse;

    & > button {
      padding: 1rem 4rem;
    margin-top: 2rem;
    font-size: 2rem;
    font-family: inherit;
    font-weight: 600;
    border-radius: 3rem;
    border: none;
    cursor: pointer;
    background-color: #1ca854; 
    color: #fff;
    }
  }

  &:hover span {
    opacity: 1;
    transform: translateX(5rem);
  }
`;

export default Product;
