import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartContext from "../context/Cart/CartContext";
import { auth } from "../firebase/firebase";

const Navbar = ({ currentUser }) => {

  const { cartItem } = useContext(CartContext)
  // console.log(currentUser)
  const [nav, setNav] = useState({
    display: "none",
  });

  const handleOpen = () => {
    setNav({
      display: "block",
    });
  };
  const handleClose = () => {
    setNav({
      display: "none",
    });
  };

  const onSignOut = () => {
    auth.signOut()
    handleClose()
  }

  return (
    <Nav>
      <Panel style={{ display: nav.display }}>
        <Up>
          <Logo>
            <img src="/images/header/logo.svg" alt="" />
          </Logo>
          <Menu onClick={handleClose}>
            <h1>CLOSE</h1> <i className="fas fa-bars"></i>
          </Menu>
        </Up>
        <Links>
          <li>
            <Link to="/" onClick={handleClose}><i className="fas fa-home"></i> HOME</Link>
          </li>
          <li>
            {
              currentUser ? <Link to="/" onClick={onSignOut}> <i className="fas fa-sign-out-alt"></i> SIGN OUT</Link> : <Link to="/signin" onClick={handleClose}> <i className="fas fa-sign-in-alt"></i> SIGN IN</Link>
            }
          </li>
          <li>
            <Link to="/product" onClick={handleClose}><i className="fas fa-carrot"></i> PRODUCTS</Link>
          </li>
          <li>
            <Link to="/checkout" onClick={handleClose}>
              <span className="cart-badge">
                <i className="fas fa-shopping-cart"></i>
                {cartItem.length ? <small className="badge">{cartItem.length}</small> : ""}
              </span> CHECKOUT</Link>
          </li>
        </Links>
      </Panel>
      <Logo>
        <img src="/images/header/logo.svg" alt="" />
      </Logo>
      <UserNav>
        <img src={currentUser ? currentUser.photoURL : '/images/man.png'} alt="" />
        <Menu onClick={handleOpen}>
          <h1>MENU</h1> <i className="fas fa-bars"></i>
        </Menu>
      </UserNav>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  z-index: 1000;
  height: 20vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;
  transition: all 2s ease;

  /* &:hover {
    height: 100vh;
    width: 100%;
  } */
`;

const Panel = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 8rem;
  transition: all 2s ease;
  background-color: rgba(0, 0, 0, 1);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

const Up = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.ul`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  .cart-badge {
    position: relative;

    .badge {
      height: 5rem;
      width: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1ca854;
      border-radius: 50%;
      position: absolute;
      top: -10%;
      right: -15%;
      font-size: 3rem;
    }
  }

  & > li {
    list-style: none;

    & > a {
      text-decoration: none;
      font-size: 8rem;
      line-height: 12rem;
      color: #105f36;
      font-weight: 700;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }
    }

    & > div {
      font-size: 8rem;
      line-height: 12rem;
      color: #105f36;
      font-weight: 700;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }
`;

const Logo = styled.div`
  img {
    height: 10vh;
  }
`;

const UserNav = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 5rem;
  border-bottom-left-radius: 5rem;
transition: all 1s ease;

  &:hover {
    background-color: #111;
  }

  & > img {
    border-radius: 50%;
    object-fit: contain;
    height: 8rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > h1 {
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 400;
    font-family: Poppins, sans-serif;
    color: #fff;
    margin: 0 1rem;
  }
  & > i {
    font-size: 2rem;
    line-height: 3rem;
    color: #fff;
    margin-right: 1rem;
  }
`;

export default Navbar;
