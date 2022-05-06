import React, { useContext } from 'react'
import styled from 'styled-components'
import CartContext from '../context/Cart/CartContext'

const CheckoutCard = ({ id, name, image, price }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <Card>
            <ImageDiv>
                <img src={image} alt="" />
            </ImageDiv>
            <TextDiv>
                <h1>{price}₹</h1>
                <button onClick={() => removeItem(id)}>Remove</button>
            </TextDiv>
        </Card>
    )
}

const Card = styled.div`
position: relative;
    width: 80%;
    height: 10vh;
    padding: 7rem 0;
    border-radius: 2rem;
    margin: 1rem auto;
    background-color: #FF7128;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const ImageDiv = styled.div`
        padding: 0 2rem;
        display: flex;
        align-items: center;
        width: 70%; 
        color: #fff;
        font-size: 2rem;
        
        & > img {
            object-fit: contain;
            height: 10rem;
            margin: 0 2rem;
        }   
`;
const TextDiv = styled.div`
    width: 30%;
    padding: 0 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #fff;
    font-size: 2rem;

    & > button {
    padding: 1rem 4rem;
    font-size: 2rem;
    margin: 0 3rem;
    font-family: inherit;
    font-weight: 600;
    border-radius: 3rem;
    border: none;
    cursor: pointer;
    background-color: #105f36; 
    color: #fff;
    }
`;



export default CheckoutCard
