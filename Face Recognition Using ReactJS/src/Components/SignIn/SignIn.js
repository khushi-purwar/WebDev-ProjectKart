import React from "react";
import swal from "sweetalert";

let isValid;

let alert = true;

const warning = () => {
  if (alert) {
    swal({
      title: "Error",
      text: "Something is wrong , try again",
      dangerMode: true,
      button: {
        text: "Ok",
      },
    }).then((willDelete) => {});
    return (alert = false);
  }
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }
  onEmailChange = (event) => {
    isValid = true;
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };
  onSubmitChange = (event) => {
    if (isValid === true) {
      fetch("https://ancient-fjord-01096.herokuapp.com/signin", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: this.state.signInEmail,
          password: this.state.signInPassword,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.id) {
            this.props.loadUser(data);
            this.props.homeScreen("home");
          }
        });
    } else {
      warning();
      alert = true;
    }
  };

  render() {
    const { homeScreen } = this.props;
    return (
      <div className="container">
        <article className=" white  mv4 w-100 w-50-m w-25-l mw5 center shadow-5 cssSignin">
          <main className="pa4 ">
            <div className="measure ">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 white fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label
                    className="db white fw6 lh-copy f6"
                    htmlFor="email-address"
                  >
                    Email
                  </label>
                  <input
                    onChange={this.onEmailChange}
                    className="pa2 input-reset cssBorder bg-transparent  hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    pattern=".+@globex\.com"
                    size="30"
                    required
                  />
                </div>
                <div className="mv3">
                  <label className="db white fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    onChange={this.onPasswordChange}
                    className="b pa2 input-reset cssBorder bg-transparent  hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 white input-reset ba b--white bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign in"
                  onClick={this.onSubmitChange}
                />
              </div>
              <div className="lh-copy mt3">
                <p
                  onClick={() => homeScreen("register")}
                  className="f6 white link dim black db pointer"
                >
                  Register
                </p>
              </div>
            </div>
          </main>
        </article>
        <div className="white bg-box">
          <p>
            Made With ❤ By <br />{" "}
            <a
              className=" white"
              style={{ color: "#00bfa5" }}
              href="https://github.com/notse"
            >
              Nikhil Notse
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default SignIn;
