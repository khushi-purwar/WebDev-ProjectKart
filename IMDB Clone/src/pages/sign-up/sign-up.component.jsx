import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";

import Logo from "../../static/assets/logo.png";
import SignUpForm from "../../components/auth/sign-up/sign-up-form.component";
import { useWindowSize } from "../../redux/movies/movies.utils";

const SignUpPage = () => {
  const [windowWidth] = useWindowSize();

  return (
    <div className="sign-in-sign-up">
      <div className="form-page">
        <Helmet>
          <body class="light-bg"></body>
        </Helmet>
        <Container>
          <img src={Logo} alt="logo" />
          <div className="form-container">
            <SignUpForm />
            <div className="spacing"></div>
            <div className="divider-section">
              <div className="divider-inner"></div>
              <div
                className={`${
                  windowWidth < 600 ? "divider-break" : "account-exist"
                }`}
              >
                <span>Already have an account? </span>
              </div>
              <Link to="/register/sign-in">Sign-in</Link>
            </div>
          </div>
        </Container>
        <div className="divider-section">
          <div className="divider-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
