import React from "react";
import { useRouteMatch } from "react-router-dom";

import { useWindowSize } from "../../../redux/movies/movies.utils";

import NavBar from "./navbar/navbar.component";

const Header = () => {
  const [windowWidth] = useWindowSize();

  let signUpUrlMatch = useRouteMatch("/sign-up");
  let signInUrlMatch = useRouteMatch("/sign-in");
  let accountUrlMatch = useRouteMatch("/account");
  let notFoundMatch = useRouteMatch("/404");

  return (
    <div
      className={`${
        (windowWidth < 600 && (signUpUrlMatch || signInUrlMatch)) ||
        (accountUrlMatch || notFoundMatch)
          ? "display-none hide-display"
          : "header"
      }`}
    >
      <NavBar />
    </div>
  );
};

export default Header;
