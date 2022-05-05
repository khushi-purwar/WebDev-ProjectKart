import React from "react";
import { useRouteMatch } from "react-router-dom";

import { useWindowSize } from "../../../redux/movies/movies.utils";

const Footer = () => {
  const [windowWidth, windowHeight] = useWindowSize();

  let signUpUrlMatch = useRouteMatch("/sign-up");
  let signInUrlMatch = useRouteMatch("/sign-in");

  return (
    <footer
      className={`${
        windowWidth && windowHeight < 750 && (signUpUrlMatch || signInUrlMatch)
          ? "hide-display"
          : "footer"
      } `}
    >
      <div className="footer__copyright">
        <span role="img" aria-label="footer">
          &copy; 2020 Made with ❤️ by {""}
          <a
            href="https://www.linkedin.com/in/djohal/"
            target="_blank"
            without="true"
            rel="noopener noreferrer"
          >
            {"Dilpreet Johal"}
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
