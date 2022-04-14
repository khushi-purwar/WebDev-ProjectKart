import React from "react";
import { InputGroup, Button, Container } from "react-bootstrap";
import Geocoder from "react-native-geocoding";
import style from "./profile.module.css";

const Profile = () => {
  //var addressComponent = "Kolkata";
  /*function getData() {
    Geocoder.init("AIzaSyDrEoTByIUOUZ_JZtasU9-gvn0vbH-he3E");
    Geocoder.from(41.89, 12.49)
      .then((json) => {
        addressComponent = json.results[0].address_components[0];
        console.log(addressComponent);
      })
      .catch((error) => console.log(error));
  }

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    getLocation();
  }, [latitude],[longitude]);


  const updateLatitude = (e) => {
    setLatitude(e.target.value);
  };
  const updateLongitude = (e) => {
    setLongitude(e.target.value);
  };


  var address = "";
  const API_KEY = "pk.0657bf3e7dfe4535fc3d43a14089c73c";
  const getLocation = async () => {
    const response = await fetch(
      `https://us1.locationiq.com/v1/reverse.php?key=${API_KEY}&lat=${latitude}&lon=${longitude}&format=json`
    );
    const data = await response.json();
    console.log(data);
    address = data.display_name;
  };*/

  return (
    <>
      <Container className={style.styling}>
        <br></br>
        <InputGroup className="mb-3">
          <InputGroup.Text>Latitude</InputGroup.Text>
          <InputGroup.Text id="latitude">00</InputGroup.Text>
        </InputGroup>
        <br></br>
        <InputGroup className="mb-3">
          <InputGroup.Text>Longitude</InputGroup.Text>
          <InputGroup.Text id="longitude">00</InputGroup.Text>
        </InputGroup>
        <br></br>
        <InputGroup className="mb-3">
          <InputGroup.Text>Location</InputGroup.Text>
          <InputGroup.Text id="location">{addressComponent}</InputGroup.Text>
        </InputGroup>
        <Button variant="outline-secondary" id="locationBtn">
          Get Location
        </Button>
        <br></br>
        <br></br>
        <Button variant="outline-secondary" id="photoBtn">
          Take a Picture Now!
        </Button>
        <video id="player" autoPlay width="320px" height="240px"></video>
        <canvas
          id="canvas"
          width="320px"
          height="240px"
          style={{ display: "none" }}
        ></canvas>
        <Button variant="outline-secondary" id="capture">
          Capture
        </Button>
        <br></br>
        <div id="pick-image">
          <h6>Pick an Image instead</h6>
          <input type="file" accept="image/*" id="image-picker"></input>
        </div>
        <br></br>
        <br></br>
      </Container>
    </>
  );
};

export default Profile;

//API KEY=AIzaSyDrEoTByIUOUZ_JZtasU9-gvn0vbH-he3E
