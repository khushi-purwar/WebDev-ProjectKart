import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "../components/CustomButton";

//AUTH
import { signInWithGoogle } from "../firebase/firebase";

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onFormChange = (e) => {
    const { value, name } = e.target;

    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    alert(data.email);
  };

  return (
    <Sign>
      <form onSubmit={onFormSubmit}>
        <h1>I Already have an Account</h1>
        <span>Sign In with your email and password</span>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={onFormChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={onFormChange}
        />
        <div>
          <CustomButton text="Sign In" type="submit" />
          <CustomButton text="Sign In With Google" onClick={signInWithGoogle} />
        </div>
      </form>
    </Sign>
  );
};

const Sign = styled.div`
  height: 100vh;
  width: 100%;
  background: #eec438;

  form {
    padding: 0 8rem;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    & > input {
      font-size: 5rem;
      background: rgba(238, 196, 26, 0.2);
      border: none;
      border-bottom: 2px solid #fff;
      padding: 2rem;
      color: #fff;
      outline: none;
      margin: 3rem 0rem;
    }

    & > h1 {
      font-size: 4rem;
      color: #fff;
    }

    & > span {
      font-size: 2rem;
      color: #fff;
    }

    & > div {
      display: flex;
    }
  }
`;

export default Signin;
