import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../store/actions/alert";
import { register, clearErrors } from "../../store/actions/auth";

function Register({ setAlert, register, auth, history, clearErrors }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push("/");
    }
    if (auth.error === "Email already exists") {
      setAlert(auth.error, "danger");
      clearErrors();
    }
    //eslint-disable-next-line
  }, [auth.error, auth.isAuthenticated, history]);

  const { name, email, password, password2 } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
}
const mapStatesToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStatesToProps, { setAlert, register, clearErrors })(
  Register
);
