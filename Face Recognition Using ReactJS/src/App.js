import React, { Component } from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import Logo from "./Components/Logo";
import InputForm from "./Components/Input-form";
import Rank from "./Components/Rank";
import FaceDetect from "./Components/FaceDetect";
import Particles from "react-particles-js";
import SignIn from "./Components/SignIn/SignIn";
import Register from "./Components/Register/Register";
import swal from "sweetalert";

let alert = true;

const alertfn = () => {
  if (alert) {
    swal({
      title: "FaceScan",
      text: "FaceScan is a Facial recoginition App  using Face Detection Api it automatically recognize and locate faces from any angle with landmarks and alignment",
      dangerMode: false,
      button: {
        text: "Ok",
      },
    }).then((willDelete) => {});
    return (alert = false);
  }
};

alertfn();

const particlesOpt = {
  particles: {
    number: {
      value: 50,
    },
    color: {
      value: "#00d9bb",
    },
    size_area: {
      value: 50,
    },
    size: {
      value: 5,
    },
    move: {
      speed: 5,
    },
  },
};
const initialState = {
  input: "",
  imgUrl: "",
  box: {},
  route: "signin",
  signedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    fetch("https://ancient-fjord-01096.herokuapp.com/").then((resp) =>
      resp.json()
    );
  }

  loadUser = (userData) => {
    this.setState({
      user: {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        entries: userData.entries,
        joined: userData.joined,
      },
    });
  };

  formBox = (data) => {
    const facePoints = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("InputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: facePoints.left_col * width,
      topRow: facePoints.top_row * height,
      rightCol: width - facePoints.right_col * width,
      bottomRow: height - facePoints.bottom_row * height,
    };
  };

  DisplayBox = (boxes) => {
    this.setState({ box: boxes });
  };

  onChangeInput = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonClick = () => {
    this.setState({ imgUrl: this.state.input });
    fetch("https://ancient-fjord-01096.herokuapp.com/imageUrl", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          fetch("https://ancient-fjord-01096.herokuapp.com/image", {
            method: "put",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            });
        }
        this.DisplayBox(this.formBox(response));
      })
      .catch((err) => {
        console.log("there is error: 1");
      });
  };

  homeScreen = (routes) => {
    if (routes === "signin") {
      this.setState(initialState);
    } else if (routes === "home") {
      this.setState({ signedIn: true });
    }
    this.setState({ route: routes });
  };

  render() {
    return (
      <div className="App">
        <Particles params={particlesOpt} />
        <Navigation
          signedIn={this.state.signedIn}
          outScreen={this.homeScreen}
        />
        {this.state.route === "home" ? (
          <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <InputForm
              onButtonClick={this.onButtonClick}
              onChangeInput={this.onChangeInput}
            />
            <FaceDetect box={this.state.box} imgUrl={this.state.imgUrl} />
          </div>
        ) : this.state.route === "signin" ? (
          <SignIn loadUser={this.loadUser} homeScreen={this.homeScreen} />
        ) : (
          <Register loadUser={this.loadUser} homeScreen={this.homeScreen} />
        )}
      </div>
    );
  }
}
export default App;
