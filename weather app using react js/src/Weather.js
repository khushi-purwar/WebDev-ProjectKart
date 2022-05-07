import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import moment from "moment";
import Data from "./Data";
import SearchIcon from "@material-ui/icons/Search";
import "./Weather.css";
import Clouds from "./images/Clouds.jpg";

function Weather() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [background, setBackground] = useState(Clouds);
  const inputRef = useRef(null);
  const time = new Date().toLocaleTimeString().slice(0, -6);
  const [image, setImage] = useState("");
  const degree = <sup>°C</sup>;
  const minTemp = (
    <p>
      {weatherInfo?.main.temp_min} {degree}
    </p>
  );
  const maxTemp = (
    <p>
      {weatherInfo?.main.temp_max} {degree}
    </p>
  );

  useEffect(() => {
    fetchWeatherInfo();
  }, []);

  useEffect(() => {
    backgroundImage();
  }, [weatherInfo]);

  useEffect(() => {
    determineImage();
  }, [weatherInfo]);

  const fetchWeatherInfo = (e) => {
    e?.preventDefault();

    const options = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/weather",
      params: {
        q: inputRef.current.value || "London",
        units: "metric",
      },
      headers: {
        "x-rapidapi-key": "b5dc204a21mshf6a6ec9b8a55132p1b1cb9jsn7e1d1a8256a4",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setWeatherInfo(response.data);
      })
      .catch(() => {
        alert("Location not found");
      });
  };

  const determineImage = () => {
    setImage(
      `http://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@2x.png`
    );
  };

  const backgroundImage = (e) => {
    e?.preventDefault();

    const options = {
      method: "GET",
      url: `https://api.unsplash.com/search/photos/?page=1&query=${weatherInfo?.weather[0].main}&client_id=eRib5ypsOLGSG3A8iBTX8rdnO78zeLLfSNgVyHHxZEA`,
    };

    axios
      .request(options)
      .then((response) => {
        if (response.status === 200) {
          setBackground(
            response.data.results[Math.floor(Math.random() * 9 + 1)].urls.full
          );
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="weather" style={{ backgroundImage: `url(${background})` }}>
      <div className="weather__container">
        <div className="weather__left">
          <form>
            <SearchIcon className="weather__logo" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for places ..."
            />
            <button
              className="weather__leftButton"
              onClick={fetchWeatherInfo}
              type="submit"
            >
              Show me the weather
            </button>
          </form>
          <img className="weather__leftImage" src={image} alt="weather" />
          <div className="weather__temp">
            <p className="weather__leftTemp">
              {weatherInfo?.main.temp}
              {degree}
            </p>
          </div>
          <h3 className="weather__leftDate">
            {weatherInfo && `${moment.unix(weatherInfo?.dt).format("dddd")}`},
            <span className="weather__leftTime"> {weatherInfo && time}</span>
          </h3>

          <hr className="weather__leftLine" />

          <p className="weather__leftWeather">{weatherInfo?.weather[0].main}</p>

          <p className="weather__leftLocation">
            {weatherInfo?.name}, {weatherInfo?.sys?.country}
          </p>
        </div>

        <div className="weather__right">
          <h1 className="weather__title">
            <center>Today's Highlights</center>
          </h1>
          <div className="weather__rightInfo">
            <Data
              title="Wind Status"
              stat1={`${weatherInfo?.wind?.speed} km/h`}
              imageIcon="https://img.icons8.com/pastel-glyph/64/000000/wind--v1.png"
            />
            <Data
              title="Sunrise & Sunset"
              imageIcon="https://img.icons8.com/emoji/48/000000/sunrise-over-mountains.png"
              stat1={moment.unix(weatherInfo?.sys?.sunrise).format("LT")}
              stat2={moment.unix(weatherInfo?.sys?.sunset).format("LT")}
              imageIcon2="https://img.icons8.com/cotton/64/000000/sunset--v2.png"
            />
            <Data
              title="Min & Max Temperature"
              hasIcon={true}
              stat1={maxTemp}
              stat2={minTemp}
            />
            <Data
              imageIcon="https://img.icons8.com/officel/40/000000/humidity.png"
              title="Humidity"
              stat1={`${weatherInfo?.main.humidity}`}
            />
            <Data
              imageIcon="https://static.thenounproject.com/png/122738-200.png"
              title="Visibility"
              stat1={`${weatherInfo?.visibility / 1000} km`}
            />
            <Data
              imageIcon="https://img.icons8.com/officel/80/000000/pressure.png"
              title="Pressure"
              stat1={`${weatherInfo?.main.pressure}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
