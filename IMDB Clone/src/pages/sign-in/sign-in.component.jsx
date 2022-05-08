import React from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";

import Logo from "../../static/assets/logo.png";
import SignInForm from "../../components/auth/sign-in/sign-in-form.component";

const SignInPage = () => {
  const history = useHistory();
  return (
    <div className="sign-in-sign-up">
      <div className="form-page">
        <Helmet>
          <body class="light-bg"></body>
        </Helmet>
        <Container>
          <img src={Logo} alt="logo" />
          <div className="form-container">
            <SignInForm />
            <div className="spacing"></div>

            <div className="divider-break">
              <span>New to IMDb?</span>
            </div>
            <button
              onClick={() => history.push("/sign-up")}
              className="create-account"
            >
              Create your IMDb Account
            </button>
          </div>
        </Container>
        <div className="divider-section">
          <div className="divider-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
