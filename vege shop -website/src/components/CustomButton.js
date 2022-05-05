import React from "react";
import styled from "styled-components";

const CustomButton = ({ text, onClick }) => {
  return <Btn onClick={onClick}>{text}</Btn>;
};

const Btn = styled.div`
  margin: 2rem 2rem;
  font-size: 3rem;
  border: 2px solid #fff;
  padding: 2rem 5rem;
  color: #fff;
  background: none;
  outline: none;
  cursor: pointer;
`;
export default CustomButton;
