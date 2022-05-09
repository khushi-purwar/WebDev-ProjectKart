import React from "react";
import TrollFace from "./assets/Troll Face.png";
import styled from "styled-components";

const HeaderCompo = styled.div`
    display: flex;
    background-image: linear-gradient(to right , #FF6B6B,#F10086 , #F190B7);
    padding: 10px;

    .header-image{
        margin: 5px 8px;
    }
    .header-text{
        color: #fff;
        font-size: 1.5rem;
        margin: 10px 0;
    }
`

function Header() {
  return (
    <HeaderCompo>
      <img
        className="header-image"
        src={TrollFace}
        alt="troll face"
        width="50px"
        height="40px"
      ></img>
      <h3 className="header-text">MemeGenerator</h3>
    </HeaderCompo>
  );
}

export default Header;
