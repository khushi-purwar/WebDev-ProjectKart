import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./styles/meme.css";

const Form = styled.div`
  margin: 3rem 10rem;
  .form {
    display: grid;
    grid-template-columns: 25rem 25rem;
    gap: 18rem;
  }

  input {
    width: 350px;
    height: 50px;
    border-radius: 10px;
    border: 2px solid #f10086;
    font-size: 1.2rem;
    color: #c65d7b;
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    color: #c65d7b;
  }

  button {
    width: 100%;
    height: 40px;
    margin: 30px 0;
    background-image: linear-gradient(to right, #ff6b6b, #f10086, #f190b7);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
  }

  button:hover {
    box-shadow: -2px 2px 5px #444;
  }
`;

function MemeGenerator() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMeme, setAllMeme] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMeme(data.data.memes))
}, []);

  function handleClick() {
    const randomNum = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNum].url;
    setMeme((prevValue) => ({ ...prevValue, randomImage: url }));
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme((prevValue) => ({ ...prevValue, [name]:value}));
    console.log(name);
  }

  return (
    <>
      <Form>
        <form className="form">
          <input
            placeholder="Text at top"
            onChange={handleChange}
            type="text"
            name="topText"
            value={meme.topText}
          ></input>
          <input
            placeholder="Text at bottom"
            onChange={handleChange}
            type="text"
            name="bottomText"
            value={meme.bottomText}
          ></input>
        </form>
        <button onClick={handleClick}>Get a new image 🙌</button>
      </Form>
      <div className="meme-image">
        <img src={meme.randomImage}></img>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
}

export default MemeGenerator;
