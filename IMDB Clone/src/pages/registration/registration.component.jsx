import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import IMDbIcon from "../../static/assets/brands/imdb.png";
import FacebookIcon from "../../static/assets/brands/facebook.png";
import GithubIcon from "../../static/assets/brands/github.png";
import GoogleIcon from "../../static/assets/brands/google.png";

import {
  googleSignInStart,
  facebookSignInStart,
  githubSignInStart,
} from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const content = [
  {
    title: "Personalized Recommendations",
    subtitle: "Discover shows you'll love.",
  },
  {
    title: "Your Watchlist",
    subtitle:
      "Track everything you want to watch and receive e-mail when movies open in theaters.",
  },
  {
    title: "Your Ratings",
    subtitle: "Rate and remember everything you've seen.",
  },
  {
    title: "Contribute to IMDb",
    subtitle:
      "Add data that will be seen by millions of people and get cool badges.",
  },
];

const RegistrationPage = ({
  googleSignInStart,
  facebookSignInStart,
  githubSignInStart,
}) => {
  const history = useHistory();

  const signInButtons = [
    {
      name: "IMDb",
      icon: IMDbIcon,
      signIn: () => history.push("/sign-in"),
    },
    {
      name: "Google",
      icon: GoogleIcon,
      signIn: googleSignInStart,
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      signIn: facebookSignInStart,
    },
    {
      name: "Github",
      icon: GithubIcon,
      signIn: githubSignInStart,
    },
  ];
  return (
    <div className="registration">
      <h3 className="title-sm">Sign in</h3>
      <Container className="registration-container">
        <Row>
          <Col>
            <div className="options">
              <h3>Sign in</h3>
              <div className="buttons">
                {signInButtons.map(({ name, icon, signIn }, i) => (
                  <div className="btn-container" key={i}>
                    <button type="button" onClick={signIn}>
                      Sign in with {name}
                    </button>
                    <img src={icon} alt="icon" />
                  </div>
                ))}
              </div>
              <p className="divider-text">
                <span>or</span>
              </p>
              <button
                className="create-account-btn"
                onClick={() => history.push("/sign-up")}
              >
                Create a New Account
              </button>
              <span className="terms">
                By signing in, you agree to Conditions of Use and Privacy
                Policy.
              </span>
            </div>
          </Col>
          <Col>
            <div className="benefits">
              <h3>Benefits of your free IMDb account</h3>
              {content.map(({ title, subtitle }, index) => (
                <React.Fragment key={index}>
                  <span>{title}</span>
                  <p>{subtitle}</p>
                </React.Fragment>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="recently-viewed-container">
        <Row>
          <h3>Recently Viewed</h3>
          <span>Clear your history</span>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  facebookSignInStart: () => dispatch(facebookSignInStart()),
  githubSignInStart: () => dispatch(githubSignInStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
