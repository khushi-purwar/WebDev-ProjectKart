import React from 'react'
import { useContext } from 'react'
import CartContext from '../context/Cart/CartContext'
import styled from 'styled-components'
import CheckoutCard from '../components/CheckoutCard'

const CheckoutPage = () => {

  const { cartItem } = useContext(CartContext)

  const total = cartItem.length > 0 ? cartItem.map(item => item.price).reduce((a, b) => a + b) : 0;


  return (
    <Cart>
      {cartItem.length === 0 ? <h1>Cart is Empty 🌾</h1> : (
        <ul>
          {
            cartItem.map(item => <CheckoutCard name={item.name} price={item.price} image={item.image} id={item.id} key={item.id + "tr"} />)
          }
        </ul>
      )}
      <Total>
        <h1>Total: {total}</h1>
        <button>CheckOut</button>
      </Total>
    </Cart>
  )
}

const Cart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background: #eec438;

    & > h1 {
      font-size: 6rem;
      color: #fff;
    }

    & > span {
      font-size: 2rem;
      color: #fff;
    }

    & > div {
      display: flex;
    }

    & > ul {
      margin: 30vh 0;
      width: 100%;
    }
`;

const Total = styled.div`
    background-color: #105f36;
    position: fixed;
    border-top-left-radius: 30rem;
    bottom: 0%;
    right: 0%;
    height: 15vh;
    width: 80%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & > button{
    margin: 0 5rem;
    padding: 1rem 4rem;
    font-size: 2rem;
    font-family: inherit;
    font-weight: 600;
    border-radius: 3rem;
    border: none;
    cursor: pointer;
    background-color: #FF7128; 
    color: #fff;
    }

    & > h1 {
      font-size: 4rem;
      color: #fff;
    }
`;

export default CheckoutPage
