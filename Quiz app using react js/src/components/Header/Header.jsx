import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="title" to="/">
        QuizCheck
      </Link>
      <hr />
    </div>
  );
};

export default Header;
