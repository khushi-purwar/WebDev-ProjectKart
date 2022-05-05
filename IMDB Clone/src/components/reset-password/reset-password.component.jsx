import React from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";

import Logo from "static/assets/logo.png";
import ResetPasswordForm from "./reset-password-form.component";

const ResetPassword = () => {
  const history = useHistory();

  return (
    <div className="reset-password">
      <div className="form-page">
        <Helmet>
          <body class="light-bg"></body>
        </Helmet>
        <Container>
          <img src={Logo} alt="logo" onClick={() => history.push("/")} />
          <div className="main">
            <h3 className="title">Password assistance</h3>
            <div className="form-container">
              <ResetPasswordForm />
              <div className="spacing"></div>
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

export default ResetPassword;
