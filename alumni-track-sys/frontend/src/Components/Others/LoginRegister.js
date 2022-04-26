import React, { useState } from "react";
import "./LoginRegister.css";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ls from "localstorage-slim";
import Alert from "@mui/material/Alert";

export default function LoginRegister() {
  const navigate = useNavigate();

  let msg;
  const [loginRes, setRes] = useState("");
  const [loginMsg, setLoginMsg] = useState();

  // const container = document.getElementById('container')

  const openSignUp = (e) => {
    const container = document.getElementById("container");
    console.log(container);
    console.log("in Register");
    e.preventDefault();
    container.classList.add("right-panel-active");
  };

  const openSignIn = (e) => {
    const container = document.getElementById("container");
    console.log("in Login");
    e.preventDefault();
    container.classList.remove("right-panel-active");
  };

  const [values, setValues] = React.useState({
    Name: "",
    EmailId: "",
    Password: "",
    EnrollmentNO: "",
    CollegeId: "",
    YearOfPassing: "",
  });
  const [valuing, setValuing] = React.useState({
    EmailId: "",
    Password: "",
    Role: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChanging = (prop) => (event) => {
    setValuing({ ...valuing, [prop]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      Name: values.Name,
      EnrollmentNO: values.EnrollmentNO,
      CollegeId: values.CollegeId,
      EmailId: values.EmailId,
      Password: values.Password,
      YearOfPassing: values.YearOfPassing,
    };

    console.log(body);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    try {
      const rep1 = await fetch(
        "http://localhost:3045/api/AlumniRegister",
        requestOptions
      );
      if (rep1.ok) {
        alert("Registration Done");
      } else {
        alert("Error !! , Some Error Occured");
      }
    } catch (err) {
      console.log("Err ", err);
      alert("Error !! Some Error Occured");
    }
  };

  //login

  const handleSubmiting = async (event) => {
    event.preventDefault();
    const body = {
      email: valuing.EmailId,
      password: valuing.Password,
      role: valuing.Role,
    };

    // try {

    // } catch (error) {

    // }

    console.log(body);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    try {
      let resp = await fetch("http://localhost:3045/api/login", requestOptions);
      resp.json().then((d) => {
        console.log(d);
        if (resp.status === 400) {
          setRes(false);
          setLoginMsg(d.message);
          msg = d.message;
          console.log("msssg", loginMsg);
        } else {
          localStorage.setItem("token", d.token);
          if (d.role === "college") {
            setRes(true);
            ls.set("role", d.role, { encrypt: true }); // with optional encryption
            localStorage.setItem("isAuthenticated", true);
            // localStorage.setItem("isAuthenticated",true)
            // window.authenticated = true
            navigate("/college");
          } else {
            setRes(true);
            // const isAuthenticated = true
            ls.set("role", d.role, { encrypt: true }); // with optional encryption

            localStorage.setItem("isAuthenticated", true);
            navigate("/alumni");
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const auth = localStorage.getItem("isAuthenticated");
  var role = ls.get("role", { decrypt: true });
  // if(role==='employee')
  // role='user';
  if (auth) {
    console.log("In login redirect ");
    return <Navigate to={`/${role}`} />;
  }

  return (
    <div className="login">
      {/* <h2>Welcome To ATS! </h2> */}
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form className="loginform" onSubmit={handleSubmit}>
            {/* Registeration */}

            <h1>Create Account</h1>
            {/* <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
          </div> */}

            {/* <span>or use your email for registration</span> */}
            <input
              type="text"
              placeholder="Name"
              value={values.Name}
              onChange={handleChange("Name")}
            />
            <input
              type="email"
              placeholder="Email"
              value={values.EmailId}
              onChange={handleChange("EmailId")}
            />
            <input
              type="password"
              placeholder="Password"
              value={values.Password}
              onChange={handleChange("Password")}
            />
            <input
              type="integer"
              placeholder="Enrollment Number"
              value={values.EnrollmentNO}
              onChange={handleChange("EnrollmentNO")}
            />
            <input
              type="integer"
              placeholder="Year Of Passing"
              value={values.YearOfPassing}
              onChange={handleChange("YearOfPassing")}
            />
            <input
              type="integer"
              placeholder="College Id"
              value={values.CollegeId}
              onChange={handleChange("CollegeId")}
            />

            <button>Register</button>
          </form>
        </div>

        {/* Login */}

        <div className="form-container sign-in-container">
          {loginRes === false ? (
            //   <Alert sx={{width:"25vw"}} >Success  — {loginRes}!</Alert>:""
            <Alert severity="error" sx={{ width: "25vw" }}>
              {loginMsg}!
            </Alert>
          ) : (
            ""
          )}
          {loginRes === true ? (
            <Alert sx={{ width: "25vw" }}>Success — {loginRes}!</Alert>
          ) : (
            ""
          )}
          <form onSubmit={handleSubmiting} className="loginform" action="#">
            <h1>Login</h1>

            <br />
            {/* <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
          </div>
          <span>or use your account</span> */}
            <input
              type="email"
              placeholder="Email"
              value={valuing.EmailId}
              onChange={handleChanging("EmailId")}
            />
            <input
              type="password"
              placeholder="Password"
              value={valuing.Password}
              onChange={handleChanging("Password")}
            />
            <input
              type="text"
              placeholder="Role"
              value={valuing.Role}
              onChange={handleChanging("Role")}
            />
            <a href="#">Forgot your password?</a>

            <button type="submit">Login</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={openSignIn}>
                Login
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={openSignUp}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
